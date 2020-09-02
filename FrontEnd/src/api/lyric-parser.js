// txt歌词
// time 进度时间
// '\['                 转义方括号
// '\d{2,}'             0-9任意数字重复至少两次，分别匹配分钟和整数秒
// (?:\.(\d{2,3}))?     是毫秒，可能有，也可能没有
// ']'                  匹配括号，很奇怪这个括号竟然不需要转义
const timeExp = /\[(\d{2,}):(\d{2})(?:[\.\:](\d{2,3}))?]/g
// 播放状态常量
const STATE_PAUSE = 0
const STATE_PLAYING = 1
// 重新定义了更加语义化的标签名
const tagRegMap = {
  title: 'ti',
  artist: 'ar',
  album: 'al',
  offset: 'offset',
  by: 'by'
}
// 输出 Lyric 类
function noop() {}

export default class Lyric {
  constructor(lrc, handler = noop, speed = 1) {
    this.lrc = lrc
    this.tags = {}
    this.lines = []
    this.handler = handler
    this.state = STATE_PAUSE
    this.curLineIndex = 0
    this.speed = speed
    // offset即为startTime
    this.offset = 0

    this._init()
  }

  _init() {
    this._initTag()

    this._initLines()
  }

  _initTag() {
    for (let tag in tagRegMap) {
      // 匹配出歌词的标签属性
      // 相当于 /..../i ,修饰符 ，表示不区分大小写 /../g 全局搜索
      const matches = this.lrc.match(new RegExp(`\\[${tagRegMap[tag]}:([^\\]]*)]`, 'i'))
      this.tags[tag] = matches && (matches[1] || '')
    }
  }

  _initLines() {
     // 通过换行符，拆解歌词
    const lines = this.lrc.split('\n')
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i]
       // 匹配时间戳
      let result = timeExp.exec(line)
      if (result) {
         // 去掉时间，只留下文字部分
        const txt = line.replace(timeExp, '').trim();
        if (txt) {
          if (result[3].length === 3) {
            result[3] = result[3] / 10;
          }
          // 将符合格式的歌词和时间转换后推进列表
          this.lines.push({
            time: result[1] * 60 * 1000 + result[2] * 1000 + (result[3] || 0) * 10,
            txt
          })
        }
      }
    }
// 按歌词的时间顺序重新排了一遍
    this.lines.sort((a, b) => {
      return a.time - b.time
    })

  }
// 通过时间，找到当前歌词的位置
  _findCurLineIndex(time) {
    for (let i = 0; i < this.lines.length; i++) {
      if (time <= this.lines[i].time) {
        return i
      }
    }
    return this.lines.length - 1
  }
// 调用处理函数，并将当前歌词和行数传入
  _callHandler(i) {
    if (i < 0) {
      return
    }
    this.handler({
      txt: this.lines[i].txt,
      lineNum: i
    })
  }
// 持续输出当前的歌词位置
  _playRest(isSeek = false) {
    let line = this.lines[this.curLineIndex]
    let delay;
    if (isSeek) {
      // 根据歌词中带有的时间信息，计算出下一次歌词变更的时间间隔
      delay = line.time - (+new Date() - this.startStamp);
    } else {
      //拿到上一行的歌词开始时间，算间隔
      let preTime = this.lines[this.curLineIndex - 1] ? this.lines[this.curLineIndex - 1].time : 0;
      delay = line.time - preTime;
    }
    this.timer = setTimeout(() => {
      this._callHandler(this.curLineIndex++)
      if (this.curLineIndex < this.lines.length && this.state === STATE_PLAYING) {
      // 只要处于播放状态中，重复调用这个函数
        this._playRest()
      }
    }, (delay / this.speed))
  }

  changeSpeed(speed) {
    this.speed = speed;
  }

  play(offset = 0, isSeek = false) {
    if (!this.lines.length) {
      return
    }
    // 修改播放状态
    this.state = STATE_PLAYING
  // 记录下播放开始瞬间的歌词当前值和时间戳
    this.curLineIndex = this._findCurLineIndex(offset)
    //现在正处于第this.curLineIndex-1行
    this._callHandler(this.curLineIndex - 1)
    this.offset = offset
    this.startStamp = +new Date() - offset
    // offset即为startTime
    if (this.curLineIndex < this.lines.length) {
      clearTimeout(this.timer)
      this._playRest(isSeek)
    }
  }
// 切换播放状态
  togglePlay(offset) {
    if (this.state === STATE_PLAYING) {
      this.stop()

       // 记录下暂停的时间戳
      this.offset = offset
    } else {
      this.state = STATE_PLAYING
      // 如果是第一次播放，传入 0
      // 如果是从暂停处播放，就传入已经播放完的进度时间
      this.play(offset, true)
    }
  }

  stop() {
    this.state = STATE_PAUSE
    this.offset = 0
    clearTimeout(this.timer)
  }
// 在指定位置开始播放
  seek(offset) {
    this.play(offset, true)
  }
}