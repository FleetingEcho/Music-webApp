import React, { useState, useEffect, useCallback, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import SearchBox from './../../baseUI/SearchBox';
import { getHotKeyWords, changeEnterLoading, getSuggestList } from './store/actionCreators';
import { connect } from 'react-redux';
import { getSongDetail } from './../Player/store/actionCreators';
import { Container, ShortcutWrapper, HotKey } from './style';
import Scroll from '../../baseUI/Scroll';
import Loading from './../../baseUI/Loading';
import LazyLoad, {forceCheck} from 'react-lazyload';
import { List,ImgList,MVInfo, ListItem, SongItem } from './style';
import { getName } from '../../api/utils';
import MusicalNote from '../../baseUI/MusicNode';
import {getMultiMatch} from '../../api/request'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
// import clonedeep from 'clonedeep'
// import { Spin } from 'antd';
import {getCount} from '../../api/utils'
import { withRouter } from 'react-router-dom';
let page=1;
function Search(props) {
  const [show, setShow] = useState(false);
  const [query, setQuery] = useState('');
  const [mvList,setMvList]=useState([])
  const musicNoteRef = useRef();
  const [mvListClone,setMvListClone]=useState([])
  // const [page,setPage]=useState(1)
  const {
    hotList, 
    enterLoading, 
    suggestList: immutableSuggestList, 
    songsCount, 
    songsList: immutableSongsList
  } = props;
  
  const suggestList = immutableSuggestList.toJS();
  const songsList = immutableSongsList.toJS();
  const {
    getHotKeyWordsDispatch,
    changeEnterLoadingDispatch,
    getSuggestListDispatch,
    getSongDetailDispatch
  } = props;

  useEffect(() => {
    // if(query==='') setMvListClone([])
    setShow(true);
    //用了redux缓存，不再赘述
    console.log(hotList)
    if(!hotList.size)
      getHotKeyWordsDispatch();
    // eslint-disable-next-line
  }, []);

  const searchBack = useCallback(() => {
    setShow(false);
  }, []);
 

  const handleQuery = (q) => {
    // console.log(q);
    setQuery(q);
    if(!q) return;
    getMultiMatch(q,page).then(res=>{
      if(res.code===200){
          setMvList(res.result.mvs)
      }
          }).catch(err=>console.log(err))
    
    changeEnterLoadingDispatch(true);
    getSuggestListDispatch(q);
  };

  const renderHotKey = () => {
    let list = hotList ? hotList.toJS(): [];
    return (
      <ul>
        {
          list.map(item => {
            return (
              <li className="item" key={item.first} onClick={() => setQuery(item.first)}>
                <span>{item.first}</span>
              </li>
            )
          })
        }
      </ul>
    )
  };

  const renderAlbum = () => {
    let albums = suggestList.playlists;
    if(!albums || !albums.length) return;
    return (
      <List>
        <h1 className="title">相关歌单</h1>
        {
          albums.map((item, index) => {
            return (
              <ListItem key={item.accountId+""+index} onClick={() => props.history.push({
                pathname:'/album',
                state:{albumId:item.id}
              })}>
                <div className="img_wrapper">
                  <LazyLoad placeholder={<img width="100%" height="100%" src={require('./music.png')} alt="music"/>}>
                    <img src={item.coverImgUrl} width="100%" height="100%" alt="music"/>
                  </LazyLoad>
                </div>
                <span className="name">歌单: {item.name}</span>
              </ListItem>
            )
          })
        }
      </List>
    )
  };

  const renderSingers = () => {
    let singers = suggestList.artists;
    if(!singers || !singers.length) return;
    return (
      <List>
        <h1 className="title">相关歌手</h1>
        {
          singers.map((item, index) => {
            return (
              <ListItem key={item.accountId+""+index} onClick={() => props.history.push({
              pathname:'/artist',
                state:{artistId:item.id}
              })}>
                <div className="img_wrapper">
                  <LazyLoad placeholder={<img width="100%" height="100%" src={require('./singer.png')} alt="singer"/>}>
                    <img src={item.picUrl} width="100%" height="100%" alt="music"/>
                  </LazyLoad>
                </div>
                <span className="name">歌手: {item.name}</span>
              </ListItem>
            )
          })
        }
      </List>
    )
  };
    const playMV = (id,artistId) => {
      props.history.push({
        pathname: '/play',
        state: {mvId:id,artistId:artistId},
    });
  }
  const renderMvs = () => {
    return (
      <div>
        {
          mvList.length===0?
          null
          :
          mvList.map((item, index, self) => {
            return (
                  <ImgList onClick={()=>playMV(item.id,item.artistId)}  key={index}>
                      <MVInfo>
                        <img src={item.cover} width="40%" alt="music"
                          onClick={()=>playMV(item.id,item.artistId)
                        }
                        />
                        <div className="imgInfo">
                          <div  style={{marginLeft:'10px', color:'#0a6fab'}}>
                          <span style={{marginRight:'10px', color:'#0a6fab'}}>{item.name} </span>                    
                          </div>
                          <div>
                          <span style={{marginLeft:'10px'}} >
                          Artist:
                          <span  style={{color:'#0a6fab'}}>{item.artistName} </span>                       
                          </span>
                          </div>
                          <div style={{marginLeft:'10px',marginTop:'8px'}} >
                          <FontAwesomeIcon icon={faVideo } 
                             style={{ marginRight: '5px' }}
                          />
                          {getCount(item.playCount)}
                          </div>
                        </div>
                      </MVInfo>
                    {/* </LazyLoad> */}
                  </ImgList>
            )
          })
        }
      </div>
    )
  };
  const renderSongs = () => {
    return (
      <SongItem style={{paddingLeft: "20px"}} > 
        {
          songsList.map(item => {
            return (
              <li key={item.id} onClick={(e) => selectItem(e, item.id)}>
                <div className="info">
                  <span>{item.name}</span>
                  <span>
                    { getName(item.artists) } - { item.album.name }
                  </span>
                </div>
              </li>
            )
          })
        }
      </SongItem>
    )
  };

  const selectItem = (e, id) => {
    getSongDetailDispatch(id);
    musicNoteRef.current.startAnimation({x:e.nativeEvent.clientX, y:e.nativeEvent.clientY});
  }
  // =========================================================
  return (
    <CSSTransition
      in={show}
      timeout={300}
      appear={true}
      classNames="fly"
      unmountOnExit
      onExited={() => props.history.goBack()}
    >
    <Container play={songsCount}>
      <div className="search_box_wrapper">
        <SearchBox back={searchBack} newQuery={query} handleQuery={handleQuery}></SearchBox>
      </div>
      <ShortcutWrapper show={!query}>
        

            <Scroll>
          <div>
            <HotKey>
              <h1 className="title">热门搜索</h1>
              {renderHotKey()}
            </HotKey>
          </div>
        </Scroll>
      </ShortcutWrapper>
      <ShortcutWrapper show={query}>
      {
        mvList.length===0 ? 
          null
          :
        <Scroll 
          onScroll={forceCheck}
          bounceBottom={true}
        >
          <div>
            { renderSingers() }
            { renderAlbum() }
            { renderSongs() }
            { renderMvs() }
          </div>
        </Scroll>
      }
          
        
      </ShortcutWrapper>
      { enterLoading? <Loading></Loading> : null }
      <MusicalNote ref={musicNoteRef}></MusicalNote>
    </Container>
  </CSSTransition>
  )
}

const mapStateToProps = (state) => ({
  hotList: state.getIn(['search', 'hotList']),
  enterLoading: state.getIn(['search', 'enterLoading']),
  suggestList: state.getIn(['search', 'suggestList']),
  songsCount: state.getIn(['player', 'playList']).size,
  songsList: state.getIn(['search', 'songsList'])
});

const mapDispatchToProps = (dispatch) => {
  return {
    getHotKeyWordsDispatch() {
      dispatch(getHotKeyWords());
    },
    changeEnterLoadingDispatch(data) {
      dispatch(changeEnterLoading(data))
    },
    getSuggestListDispatch(data) {
      dispatch(getSuggestList(data));
    },
    getSongDetailDispatch(id) {
      dispatch(getSongDetail(id));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(React.memo(Search)));