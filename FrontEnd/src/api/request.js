// import { axiosInstance } from './instance';
import axios from './instance';
import {getCookie} from './utils'
const cookie= getCookie()

export const getSongUrl = id => {
  return `https://music.163.com/song/media/outer/url?id=${id}.mp3`;
};

export const getBannerRequest = () => {
  return axios.request({
    url:  '/banner?type=2',
    method: 'get',
  })
}

export const checkStatus = () => {
  return axios.request({
    url:  '/login/status',
    method: 'get',
  })
}

export const goLogIn = (phone,password) => {
  return axios.request({
    url:  `/login/cellphone`,
    method: 'get',
    params:{
      phone:phone,
      // password:password,
      // countrycode:'1', // for America & Canada
      md5_password:password,
    }
  })
}

export const getRecommendListRequest = () => {
  return axios.request({
    url:  '/personalized',
    method: 'get',
  })
}

export const getHotSingerListRequest = (count) => {
  return axios.request({
    // url:   `/top/artists?offset=${count}`,
    url:   `/top/artists`,
    method: 'get',
    params:{
      offset:count
    }
  })
}

export const getSingerListRequest = (category, alpha, count) => {
  return axios.request({
    url:  `/artist/list`,
    method: 'get',
    params:{
      cat:category,
      initial:alpha.toLowerCase(),
      offset:count
    }
  })
}

export const getRankListRequest = () => {
  return axios.request({
    url:   `/toplist/detail`,
    method: 'get',
  })
};

export const getAlbumDetailRequest = id => {
  return axios.request({
    url:   `/playlist/detail`,
    method: 'get',
    params:{
      id:id
    }
  })
};
export const getArtistInfoRequest = id => {
  return axios.request({
    // url:   `/artist/desc`,
    url:   `/artist/album`,
    method: 'get',
    params:{
    limit:'1',
      id:id
    }
  })
};
/* export const getArtistInfoRequest = keywords => {
  return axios.request({
    // url:   `/artist/desc`,
    url:   `/search`,
    method: 'get',
    params:{
      // id:id
      type:100,
      keywords:keywords
    }
  })
}; */

export const getSingerInfoRequest = id => {
  return axios.request({
    url:   `/artists`,
    method: 'get',
    params:{
      id:id
    }
  })
};

export const getLyricRequest = id => {
  return axios.request({
    url:   `/lyric`,
    method: 'get',
    params:{
      id:id
    }
  })
};

export const getHotKeyWordsRequest = () => {
  return axios.request({
    url:   `/search/hot`,
    method: 'get',
  })
};

export const getSuggestListRequest = query => {
  return axios.request({
    url:   `/search/suggest`,
    method: 'get',
    params:{
      keywords:query
    }
  })
};

export const getResultSongsListRequest = query => {
  return axios.request({
    url:   `/search`,
    method: 'get',
    params:{
      keywords:query
    }
  })
};
export const getNewMvRequest = query => {
  return axios.request({
    url:   `/mv/first`,
    // url:   `/mv/exclusive/rcmd`,
    // url:   `/mv/all`,
    method: 'get',
    params:{
      // limit:'10'
      // area:area
    }
  })
};
export const getSelfMvRequest = (offset) => {
  return axios.request({
    url:   `/mv/exclusive/rcmd`,
    method: 'get',
    params:{
      limit:'10',
      offset:offset
    }
  })
};

export const getMultiMatch = (keywords,offset) => {
  return axios.request({
    // url:   `/search/multimatch`,
    url:   `/search`,
    method: 'get',
    params:{
      type:1004,
      // limit:'10',
      offset:offset,
      // type:'mobile',
      keywords:keywords
    }
  })
};
export const getAllMvRequest=(area,offset) => {
  return axios.request({
    url:   `/mv/all`,
    method: 'get',
    params:{
      limit:'10',
      area:area,
      // type:type,
      offset:offset,
      order:'最新'
    }
  })
};

export const getMvDetailRequest = id => {
  return axios.request({
    // url:   `/vdeo/url`,
    url:   `/mv/detail`,
    method: 'get',
    params:{
     mvid:id
    }
  })
};
// 相关视频
export const getRelatedMvRequest = id => {
  return axios.request({
    // url:   `/video/url`,
    url:  '/related/allvideo',
    method: 'get',
    params:{
     id:id
    }
  })
};
// 视频点赞评论等
  export const getMvCommentRequest = id => {
    return axios.request({
      url:  '/comment/mv',
      method: 'get',
      params:{
       id:id
      }
    })
  };

export const fetchMvUrlRequest = id => {
  return axios.request({
    url:   `/mv/url`,
    method: 'get',
    params:{
     id:id,
     r:'720'
    }
  })
};

export const getSongDetailRequest = id => {
  return axios.request({
    url:   `/song/detail`,
    method: 'get',
    params:{
      ids:id
    }
  })
};