import * as actionTypes from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS ({
  relatedVideos:[],
  videoComments:[],
  enterLoading: false,
  mvUrl:'',
  mvInfo:{},
  hotComments:[],
  isPlayingMv:false,
  artistInfo:{},
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.IS_PLAYING_MV:
      return state.set ('isPlayingMv', action.data);
    case actionTypes.GET_ARTIST_INFO:
      return state.set ('artistInfo', action.data);
    case actionTypes.GET_VIDEO_COMMENTS:
      return state.set ('hotComments', action.data);
    case actionTypes.GET_VIDEO_NEWCOMMENTS:
      return state.set ('videoComments', action.data);
    case actionTypes.GET_RELATED_VIDEOS:
      return state.set ('relatedVideos', action.data);
    case actionTypes.CHANGE_ENTER_LOADING:
      return state.set ('enterLoading', action.data);
    case actionTypes.GET_MV_URL:
      return state.set ('mvUrl', action.data);
    case actionTypes.GET_MV_INFO:
      return state.set ('mvInfo', action.data);
    default:
      return state;
  }
};