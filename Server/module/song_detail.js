// 歌曲详情

module.exports = (query, request) => {
  query.ids = query.ids.split(/\s*,\s*/)
  const data = {
    c: '[' + query.ids.map((id) => '{"id":' + id + '}').join(',') + ']',
    ids: '[' + query.ids.join(',') + ']',
  }
  return request('POST', `https://music.163.com/weapi/v3/song/detail`, data, {
    crypto: 'weapi',
    cookie: query.cookie,
    proxy: query.proxy,
    // 103.126.92.132
    // proxy: `http://113.100.209.125:3128`,
    // proxy: `http://127.0.0.1:8080`,
    realIP: query.realIP,
    // realIP: '113.100.209.125',
  })
}
