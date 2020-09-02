import { fromJS } from 'immutable';
import {getNewMvRequest,getMvDetailRequest,fetchMvUrlRequest,
  getRelatedMvRequest,getMvCommentRequest,getArtistInfoRequest} from '../../../api/request'
import {GET_VIDEO_COMMENTS,GET_VIDEO_NEWCOMMENTS,GET_RELATED_VIDEOS,
  CHANGE_ENTER_LOADING,GET_MV_URL,GET_MV_INFO, IS_PLAYING_MV,GET_ARTIST_INFO} from './constants';
import {message} from 'antd'
const fetchMvUrl = (data) => ({
  type: GET_MV_URL,
  data
});

export const getMvUrl = (id) => {
  return dispatch => {
    fetchMvUrlRequest(id).then(res => {
      if(res.code === 200){
        let data = res.data.url;
        dispatch(fetchMvUrl(data));
        dispatch(changeEnterLoading(false));
      }
    }).catch((err) => {
      console.log(err);
      message.error('Failed to Mv Url')
    })
  }
}

export const getRelatedMvUrl = (id) => {
  return dispatch => {
    getRelatedMvRequest(id).then(res => {
      if(res.code === 200){
        console.log(res);
        // let data1 = res.data;
        // dispatch({
        //   type: GET_RELATED_COMMENT,
        //   data: fromJS(data1)
        // })
      }
    }).catch((err) => {
      console.log(err);
      message.error('Failed to Related Mv')
    })
  }
}
export const getMvCommentUrl = (id) => {
  return dispatch => {
     getMvCommentRequest(id).then(res => {
      if(res.code === 200){
        let data1 = res.comments;
        let data2 = res.hotComments;
        // console.log(data2);
        dispatch({
          type: GET_VIDEO_COMMENTS,
          data: data2,
        }
        );
        dispatch({
          type: GET_VIDEO_NEWCOMMENTS,
          data: data1,
        })
      }
    }).catch((err) => {
      console.log(err);
      message.error('Failed to Mv Comments')
    })
  }
}

export const getMvInfo = (id) => {
  return dispatch => {
    getMvDetailRequest(id).then(res => {
      if(res.code === 200){
      let data1 = res.data;
      dispatch({
        type: GET_MV_INFO,
        data: fromJS(data1)
      });
      dispatch(changeEnterLoading(false));
    }
    }).catch((err) => {
      console.log(err);
      message.error('Failed to Mv Info')
    })
  }
}
export const getArtistInfo = (id) => {
  return dispatch => {
    getArtistInfoRequest(id).then(res => {
      if(res.code === 200){
      let data1 = res.artist
      // console.log(res);
      dispatch({
        type: GET_ARTIST_INFO,
        data: fromJS(data1)
      });
    }
    }).catch((err) => {
      console.log(err);
     message.error('Failed to fetch Artist Info')
    })
  }
}

export const changeEnterLoading = (data) => ({
  type: CHANGE_ENTER_LOADING,
  data
});
export const changePlayingMv = (data) => ({
  type: IS_PLAYING_MV,
  data
});