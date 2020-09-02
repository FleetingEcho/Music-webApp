import React, {useRef, createRef,useEffect} from 'react';
import { CSSTransition } from 'react-transition-group';
import ProgressCircle from '../../../baseUI/ProgressCircle';
import { getName } from '../../../api/utils';
import { MiniPlayerContainer } from './style';
import { useCallback } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
let judgePlaying=false;
let entry=0;
function MiniPlayer(props) {
  let { full, song, playing, percent } = props;
  const {isPlayingMv,locations}=props
  const { clickPlaying, setFullScreen, togglePlayList } = props;
  const miniPlayerRef = useRef();
  const stopTrigger = createRef();
  const miniWrapperRef = useRef();
  const miniImageRef = useRef();
  const handleTogglePlayList = useCallback((e) => {
    togglePlayList(true);
    e.stopPropagation();
  }, [togglePlayList]);

  const clickPlaying2=(e)=>{
    clickPlaying(e, true)
  }
// useEffect(() => {
  // if(props.location.pathname.indexOf('play')!== -1){
    // const unique=document.getElementById('unique')
    // unique.current.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    // if(unique!==null){unique.click((e)=>{clickPlaying(e, true); judgePlaying=true})}
// }
// }, [props]);
  
  return (
    <CSSTransition
      in={!full}
      timeout={300} 
      classNames="mini" 
      onEnter={() => {
        miniPlayerRef.current.style.display = "flex";
      }}
      onExited={() => {
        miniPlayerRef.current.style.display = "none";
      }}
    >
      <MiniPlayerContainer ref={miniPlayerRef} onClick={() => setFullScreen(true)}>
        <div className="icon" >
          <div className="imgWrapper" ref={miniWrapperRef} >
            <img className={`play ${playing===true? "": "pause"}`} ref={miniImageRef} src={song.al.picUrl} width="40" height="40" alt="img"/>
          </div>
        </div>
        <div className="text">
          <h2 className="name">{song.name}</h2>
          <p className="desc">{getName(song.ar)}</p>
        </div>
        <div className="control">
          <ProgressCircle radius={32} percent={percent}>
            { playing===true? 
              <i className="icon-mini iconfont icon-pause" onClick={(e) =>{clickPlaying(e, false);judgePlaying=false}}>&#xe650;</i>
              :
              <i id="unique" ref={stopTrigger} className="icon-mini iconfont icon-play" onClick={e =>clickPlaying2(e)}>&#xe61e;</i> 
            }
          </ProgressCircle>
        </div>
        <div className="control" onClick={handleTogglePlayList}>
          <i className="iconfont">&#xe640;</i>
        </div>
      </MiniPlayerContainer>
    </CSSTransition>
  )
}

export default connect((state)=>({isPlayingMv: state.getIn(['mvPlayer', 'isPlayingMv'])}) ,null)(withRouter(React.memo(MiniPlayer)))
