import * as actionTypes from './constants';
import { fromJS } from 'immutable'; // 将 JS 对象转换成 immutable 对象
import { getBannerRequest, getRecommendListRequest } from '../../../api/request';
import {message} from 'antd'
const changeBannerList = data => ({
  type: actionTypes.CHANGE_BANNER,
  data: fromJS(data)
})

const changeRecommendList = data => ({
  type: actionTypes.CHANGE_RECOMMEND_LIST,
  data: fromJS(data)
})

export const getBannerList = () => {
  return (dispatch) => {
    getBannerRequest().then(data => {
      dispatch(changeBannerList(data.banners))
    }).catch((err) => {
      console.log(err);
     message.error('Failed to fetch Banner List')
    })
  }
}

export const getRecommendList = () => {
  return (dispatch) => {
    getRecommendListRequest ().then (data => {
      dispatch(changeRecommendList (data.result));
      dispatch(changeEnterLoading(false));
    }).catch ((err) => {
      console.log(err);
      message.error('Failed to fetch Recommend List')
    });
  }
};

export const changeEnterLoading = data => ({
  type: actionTypes.CHANGE_ENTER_LOADING,
  data
});
