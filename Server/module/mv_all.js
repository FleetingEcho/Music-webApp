// 全部MV

module.exports = (query, request) => {
  const data = {
    tags: JSON.stringify({
      地区: query.area || '全部',
      类型: query.type || '全部',
      排序: query.order || '上升最快',
    }),
    offset: Number(query.offset),
    // offset: 10,
    total: 'true',
    limit: query.limit || 30,
  }
  console.log(data);
  return request('POST', `https://interface.music.163.com/api/mv/all`, data, {
    crypto: 'weapi',
    cookie: query.cookie,
    proxy: query.proxy,
    realIP: query.realIP,
  })
}
