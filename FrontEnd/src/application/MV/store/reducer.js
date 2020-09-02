import * as actionTypes from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS ({
  mvList:[],
  allMvList:[],
  selfMvList:[],
  enterLoading: false,
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.GET_MV_LIST:
      return state.set ('mvList', action.data);
    case actionTypes.GET_ALL_MV_LIST:
      return state.set ('allMvList', action.data);
    case actionTypes.GET_SELF_MV_LIST:
      return state.set ('selfMvList', action.data);
    case actionTypes.CHANGE_ENTER_LOADING:
      return state.set ('enterLoading', action.data);
    default:
      return state;
  }
};