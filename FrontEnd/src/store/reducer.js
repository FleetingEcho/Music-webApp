import { combineReducers } from 'redux-immutable';
import { reducer as recommendReducer } from '../application/Recommend/store';
import { reducer as singersReducer } from '../application/Singers/store';
import { reducer as rankReducer } from '../application/Rank/store';
import { reducer as albumReducer } from '../application/Album/store/index';
import { reducer as mvPlayerReducer } from '../application/MvPlayer/store/index';
import { reducer as singerInfoReducer } from "../application/Singer/store/index";
import { reducer as playerReducer } from "../application/Player/store/index";
import { reducer as searchReducer } from "../application/Search/store/index";
import { reducer as mvListReducer } from "../application/MV/store/index";

export default combineReducers({
  recommend: recommendReducer,
  singers: singersReducer,
  rank: rankReducer,
  album: albumReducer,
  mvPlayer: mvPlayerReducer,
  singerInfo: singerInfoReducer,
  player: playerReducer,
  search: searchReducer,
  mvList:mvListReducer
});