import { fromJS } from "immutable";
import {
  getHotSingerListRequest,
  getSingerListRequest
} from "../../../api/request";
import * as actionTypes from './constants';
import {message} from 'antd'

const changeSingerList = (data) => ({
  type: actionTypes.CHANGE_SINGER_LIST,
  data: fromJS(data)
})

// 第一次加载热门歌手
export const getHotSingerList = () => {
  return (dispatch) => {
    getHotSingerListRequest(0).then( res => {
      // console.log(res);
      const data = res.artists;
      dispatch(changeSingerList(data));
      dispatch(changeEnterLoading(false));
      dispatch(changePullDownLoading(false));
    }).catch((err) => {
      console.log(err);
      message.error('Failed to fetch Hot Singer List')
    })
  }
}

// 加载更多热门歌手
export const refreshMoreHotSingerList = () => {
  return (dispatch, getState) => {
    const pageCount = getState().getIn(['singers', 'pageCount']);
    const singerList = getState().getIn(['singers', 'singerList']).toJS();
    getHotSingerListRequest(pageCount).then(res => {
      const data = [...singerList, ...res.artists];
      dispatch(changeSingerList(data));
      dispatch(changePullUpLoading(false));
    }).catch((err) => {
      console.log(err);
      message.error('Failed to refresh Hot Singer List')
    });
  }
}

//第一次加载对应类别的歌手
export const getSingerList = (category, alpha) => {
  return (dispatch) => {
    getSingerListRequest(category, alpha, 0).then(res => {
      const data = res.artists;
      dispatch(changeSingerList(data));
      dispatch(changeEnterLoading(false));
      dispatch(changePullDownLoading(false));
    }).catch((err) => {
      console.log(err);
      message.error('Failed to fetch Singer List')
    });
  }
};

//加载更多歌手
export const refreshMoreSingerList = (category, alpha) => {
  return (dispatch, getState) => {
    const pageCount = getState().getIn(['singers', 'pageCount']);
    const singerList = getState().getIn(['singers', 'singerList']).toJS();
    getSingerListRequest(category, alpha, pageCount).then(res => {
      const data = [...singerList, ...res.artists];
      dispatch(changeSingerList(data));
      dispatch(changePullUpLoading(false));
    }).catch((err) => {
      console.log(err);
      message.error('Failed to fetch More Singers')
    });
  }
};

export const changePageCount = (data) => ({
  type: actionTypes.CHANGE_PAGE_COUNT,
  data
});

//进场loading
export const changeEnterLoading = (data) => ({
  type: actionTypes.CHANGE_ENTER_LOADING,
  data
});

//滑动最底部loading
export const changePullUpLoading = (data) => ({
  type: actionTypes.CHANGE_PULLUP_LOADING,
  data
});

//顶部下拉刷新loading
export const changePullDownLoading = (data) => ({
  type: actionTypes.CHANGE_PULLDOWN_LOADING,
  data
});

