import { fromJS } from 'immutable';
import { getAlbumDetailRequest } from '../../../api/request';
import { CHANGE_CURRENT_ALBUM, CHANGE_ENTER_LOADING } from './constants';

const changeCurrentAlbum = (data) => ({
  type: CHANGE_CURRENT_ALBUM,
  data: fromJS(data)
});

export const getAlbumList = (id) => {
  return dispatch => {
    getAlbumDetailRequest(id).then(res => {
      let data = res.playlist;
      dispatch(changeCurrentAlbum(data));
      dispatch(changeEnterLoading(false));
    }).catch(() => {
      console.log ("Failed to fetch Album Lit")
    })
  }
}

export const changeEnterLoading = (data) => ({
  type: CHANGE_ENTER_LOADING,
  data
});