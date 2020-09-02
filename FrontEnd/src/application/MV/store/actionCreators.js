import { fromJS } from 'immutable';
import {getNewMvRequest,getMvDetailRequest,
  getAllMvRequest,getSelfMvRequest,
  fetchMvUrlRequest} from '../../../api/request'
import {GET_MV_LIST,GET_ALL_MV_LIST,GET_SELF_MV_LIST,CHANGE_ENTER_LOADING} from './constants';
import {message} from 'antd'

export const getMvList = () => {
  return dispatch => {
    getNewMvRequest().then(res => {
      if(res.code === 200){
      let data1 = res.data;
      dispatch({
        type: GET_MV_LIST,
        data: fromJS(data1)
      });
      dispatch(changeEnterLoading(false));
    }
    }).catch(() => {
      message.error("Failed to fetch Mv List")
    })
  }
}

export const getAllMvList = (area,offset) => {
  return dispatch => {
    getAllMvRequest(area,offset).then(res => {
      if(res.code === 200){
      let data1 = res.data;
      dispatch({
        type: GET_MV_LIST,
        data: fromJS(data1)
      });
      dispatch(changeEnterLoading(false));
    }
    }).catch(() => {
      message.error("Failed to fetch Mv List")
    })
  }
}
export const getSelfMvList = (offset) => {
  return dispatch => {
    getSelfMvRequest(offset).then(res => {
      if(res.code === 200){
      let data1 = res.data;
      dispatch({
        type: GET_MV_LIST,
        data: fromJS(data1)
      });
      dispatch(changeEnterLoading(false));
    }
    }).catch(() => {
      message.error("Failed to fetch Mv List")
    })
  }
}

export const changeEnterLoading = (data) => ({
  type: CHANGE_ENTER_LOADING,
  data
});