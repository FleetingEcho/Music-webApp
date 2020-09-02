import React, { useRef, useState, useEffect } from "react";
import { connect } from "react-redux";
import { message, Button, Space } from 'antd';
import {
  changePlayingState,
  changeShowPlayList,
  changeCurrentIndex,
  changeCurrentSong,
  changePlayList,
  changePlayMode,
  changeFullScreen,
  changeSpeed
} from "./store/actionCreators";
import { isEmptyObject, shuffle, findIndex } from "../../api/utils";
import {getSongUrl} from '../../api/request'
import PlayList from "./PlayList";
import Toast from "./../../baseUI/Toast";
import Lyric from "../../api/lyric-parser";
import MiniPlayer from "./MiniPlayer";
import NormalPlayer from "./NormalPlayer";
import { playMode } from "./../../api/config";
import { getLyricRequest } from "./../../api/request";
import { withRouter } from 'react-router-dom';
let judgePlaying=false;

function Player(props) {
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentPlayingLyric, setPlayingLyric] = useState("");
  const [modeText, setModeText] = useState("");

  let percent = isNaN(currentTime / duration) ? 0 : currentTime / duration;

  const {
    speed,
    currentSong:immutableCurrentSong,
    currentIndex,
    playList:immutablePlayList,
    mode,
    sequencePlayList: immutableSequencePlayList,
    fullScreen
  } = props;
  let { playing} =props


  const {
    togglePlayingDispatch,
    togglePlayListDispatch,
    changeCurrentIndexDispatch,
    changeCurrentDispatch,
    changePlayListDispatch,
    changeModeDispatch,
    toggleFullScreenDispatch,
    changeSpeedDispatch
  } = props;

  const playList = immutablePlayList.toJS();
  const sequencePlayList = immutableSequencePlayList.toJS();
  const currentSong = immutableCurrentSong.toJS();
  // console.log(currentSong);
  const [preSong, setPreSong] = useState({});
  const audioRef = useRef();
  const audioRef111 = useRef();
  const toastRef = useRef();

  const currentLyric = useRef();
  // console.log(currentLyric);
  const currentLineNum = useRef(0);
  const songReady = useRef(true);
 
  useEffect(() => {
    if (
      !playList.length ||
      currentIndex === -1 ||
      !playList[currentIndex] ||
      playList[currentIndex].id === preSong.id ||
      !songReady.current
    )
    return;
    // console.log(playList);
    songReady.current = false;
    let current = playList[currentIndex];
    console.log(current);
    changeCurrentDispatch(current);
    setPreSong(current);
    setPlayingLyric("");
    const link=getSongUrl(current.id)
    audioRef.current.src = link;
    // console.log('链接是'+link);
    // console.log(audioRef);
    audioRef.current.autoplay = true;
    audioRef.current.playbackRate = speed;
    togglePlayingDispatch(true);
    getLyric(current.id);
    setCurrentTime(0);
    setDuration((current.dt / 1000) | 0);
    // eslint-disable-next-line
  }, [currentIndex, playList]);

  useEffect(() => {
    playing ? audioRef.current.play() : audioRef.current.pause();
  }, [playing]);

  useEffect(() => {
    if (!fullScreen) return;
    if (currentLyric.current && currentLyric.current.lines.length) {
      handleLyric({
        lineNum: currentLineNum.current,
        txt: currentLyric.current.lines[currentLineNum.current].txt
      });
    }
  }, [fullScreen]);

  const handleLyric = ({ lineNum, txt }) => {
    if(!currentLyric.current)return;
    currentLineNum.current = lineNum;
    setPlayingLyric(txt);
  };

  const getLyric = id => {
    console.log('songID is'+id);
    let lyric = "";
    if (currentLyric.current) {
      currentLyric.current.stop();
    }
    // 避免songReady恒为false的情况
    setTimeout(() => {
      songReady.current = true;
    }, 3000);
    getLyricRequest(id)
      .then(data => {
        console.log(data);
        lyric = data.lrc && data.lrc.lyric;
        // console.log('歌词是');
        // console.log(lyric);
        if(!lyric) {
          currentLyric.current = null;
          return;
        }
        currentLyric.current = new Lyric(lyric, handleLyric, speed);
        currentLyric.current.play();
        currentLineNum.current = 0;
        currentLyric.current.seek(0);
      })
      .catch(() => {
        currentLyric.current = "";
        songReady.current = true;
        audioRef.current.play();
      });
  };

  const clickPlaying = (e, state) => {
    e.stopPropagation();
    togglePlayingDispatch(state);
    if(currentLyric.current) {
      currentLyric.current.togglePlay(currentTime*1000);
    }
  };

  const onProgressChange = curPercent => {
    const newTime = curPercent * duration;
    setCurrentTime(newTime);
    audioRef.current.currentTime = newTime;
    if (!playing) {
      togglePlayingDispatch(true);
    }
    if (currentLyric.current) {
      currentLyric.current.seek(newTime * 1000);
    }
  };

  const updateTime = e => {
    setCurrentTime(e.target.currentTime);
  };

  const handleLoop = () => {
    audioRef.current.currentTime = 0;
    togglePlayingDispatch(true);
    audioRef.current.play();
    if (currentLyric.current) {
      currentLyric.current.seek(0);
    }
  };

  const handlePrev = () => {
    if (playList.length === 1) {
      handleLoop();
      return;
    }
    let index = currentIndex - 1;
    if (index === 0) index = playList.length - 1;
    if (!playing) togglePlayingDispatch(true);
    changeCurrentIndexDispatch(index);
  };

  const handleNext = () => {
    if (playList.length === 1) {
      handleLoop();
      return;
    }
    let index = currentIndex + 1;
    if (index === playList.length) index = 0;
    if (!playing) togglePlayingDispatch(true);
    changeCurrentIndexDispatch(index);
  };

  const handleEnd = () => {
    if (mode === playMode.loop) {
      handleLoop();
    } else {
      handleNext();
    }
  };

  const changeMode = () => {
    let newMode = (mode + 1) % 3;
    if (newMode === 0) {
      //顺序模式
      changePlayListDispatch(sequencePlayList);
      let index = findIndex(currentSong, sequencePlayList);
      changeCurrentIndexDispatch(index);
      setModeText("顺序循环");
    } else if (newMode === 1) {
      //单曲循环
      changePlayListDispatch(sequencePlayList);
      setModeText("单曲循环");
    } else if (newMode === 2) {
      //随机播放
      let newList = shuffle(sequencePlayList);
      let index = findIndex(currentSong, newList);
      changePlayListDispatch(newList);
      changeCurrentIndexDispatch(index);
      setModeText("随机播放");
    }
    changeModeDispatch(newMode);
    toastRef.current.show();
  };
  const handleError = () => {
    songReady.current = true;
    handleNext();
    // alert("播放出错");
    message.error('Insufficient Authority',0.5);
  };

  const clickSpeed = (newSpeed) => {
    changeSpeedDispatch(newSpeed);
    audioRef.current.playbackRate = newSpeed;
    currentLyric.current.changeSpeed(newSpeed);
    currentLyric.current.seek(currentTime*1000);
  }

  return (
    <div>
      {isEmptyObject(currentSong) ? null : (
        <NormalPlayer
          playing={playing}
          full={fullScreen}
          song={currentSong}
          percent={percent}
          clickPlaying={clickPlaying}
          togglePlayListDispatch={togglePlayListDispatch}
          
          mode={mode}
          modeText={modeText}
          duration={duration}
          currentTime={currentTime}
          currentLyric={currentLyric.current}
          currentPlayingLyric={currentPlayingLyric}
          speed={speed}
          changeMode={changeMode}
          handlePrev={handlePrev}
          handleNext={handleNext}
          onProgressChange={onProgressChange}
          currentLineNum={currentLineNum.current}
          toggleFullScreenDispatch={toggleFullScreenDispatch}
          clickSpeed={clickSpeed}
        />
      )}
      {isEmptyObject(currentSong) ? null : (
        <MiniPlayer
          playing={playing}
          full={fullScreen}
          song={currentSong}
          percent={percent}
          clickPlaying={clickPlaying}
          setFullScreen={toggleFullScreenDispatch}
          togglePlayList={togglePlayListDispatch}        
        />
      )}

      <PlayList clearPreSong={setPreSong.bind(null, {})}></PlayList>
      <audio
        ref={audioRef}
        onTimeUpdate={updateTime}
        onEnded={handleEnd}
        onError={handleError}
      ></audio>
      {/* <audio
        ref={audioRef111}
      ></audio> */}
      <Toast text={modeText} ref={toastRef}></Toast>
    </div>
  );
}

// 映射Redux全局的state到组件的props上
const mapStateToProps = state => ({
  fullScreen: state.getIn(["player", "fullScreen"]),
  playing: state.getIn(["player", "playing"]),
  currentSong: state.getIn(["player", "currentSong"]),
  showPlayList: state.getIn(["player", "showPlayList"]),
  mode: state.getIn(["player", "mode"]),
  speed: state.getIn(["player", "speed"]),
  currentIndex: state.getIn(["player", "currentIndex"]),
  playList: state.getIn(["player", "playList"]),
  sequencePlayList: state.getIn(["player", "sequencePlayList"])
});

// 映射dispatch到props上
const mapDispatchToProps = dispatch => {
  return {
    togglePlayingDispatch(data) {
      dispatch(changePlayingState(data));
    },
    toggleFullScreenDispatch(data) {
      dispatch(changeFullScreen(data));
    },
    togglePlayListDispatch(data) {
      dispatch(changeShowPlayList(data));
    },
    changeCurrentIndexDispatch(index) {
      dispatch(changeCurrentIndex(index));
    },
    changeCurrentDispatch(data) {
      dispatch(changeCurrentSong(data));
    },
    changeModeDispatch(data) {
      dispatch(changePlayMode(data));
    },
    changePlayListDispatch(data) {
      dispatch(changePlayList(data));
    },
    changeSpeedDispatch(data) {
      dispatch(changeSpeed(data));
    }
  };
};

// 将ui组件包装成容器组件
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(React.memo(Player)));