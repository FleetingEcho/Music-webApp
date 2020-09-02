import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import { filterIndex } from '../../api/utils';
import { getRankList } from './store';

import Loading from '../../baseUI/Loading';
import Scroll from '../../baseUI/Scroll';

// import { EnterLoading } from './../Singers/style';
import {
  List, 
  ListItem,
  SongList,
  Container
} from './style';

function Rank(props) {
  const { songsCount, rankList, loading } = props;
  const { getRankListDataDispatch } = props;

  useEffect (() => {
    getRankListDataDispatch ();
    // eslint-disable-next-line
  }, []);
  
  let globalStartIndex = filterIndex(rankList);
  let officialList = rankList.slice(0, globalStartIndex);
  let globalList = rankList.slice(globalStartIndex);

  const enterDetail = (detail) => {
    props.history.push ({
      pathname:'/album',
      state:{albumId:detail.id}
    })
  }

  const renderRankList = (list, global) => {
    return (
      <List globalRank={global}>
        {
        list.map ((item, index) => {
          return (
            <ListItem 
              key={index} 
              tracks={item.tracks} 
              onClick={() => enterDetail(item)}
            >
              <div className="img_wrapper">
                <img src={item.coverImgUrl} alt=""/>
                <div className="decorate"></div>
                <span className="update_frequecy">{item.updateFrequency}</span>
              </div>
              { renderSongList (item.tracks)  }
            </ListItem>
          )
        })
      } 
      </List>
    )
  }

  const renderSongList = (list) => {
    return list.length ? (
      <SongList>
        {
          list.map ((item, index) => {
            return <li key={index}>{index+1}. {item.first} - {item.second}</li>
          })
        }
      </SongList>
    ) : null;
  }

  let displayStyle = loading ? {"display":"none"}:  {"display": ""};

  return (
    <Container play={songsCount}>
      <Scroll>
        <div>
          <h1 className="offical" style={displayStyle}> Official List </h1>
            { renderRankList (officialList) }
          <h1 className="global" style={displayStyle}> Global List </h1>
            { renderRankList (globalList, true) }
          { loading ? <Loading /> : null }
        </div>
      </Scroll> 
      {renderRoutes (props.route.routes)}
    </Container>
  );
}

const mapStateToProps = (state) => ({
  rankList: state.getIn(['rank', 'rankList']).toJS(),
  loading: state.getIn(['rank', 'loading']),
  songsCount: state.getIn (['player', 'playList']).size,
});
const mapDispatchToProps = (dispatch) => {
  return {
    getRankListDataDispatch() {
      dispatch(getRankList());
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(React.memo (Rank));