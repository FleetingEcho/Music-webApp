import React, {Fragment,useState,useEffect} from 'react';
import { renderRoutes } from "react-router-config";
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import Player from '../Player';
// import { connect } from "react-redux";
import { HomeOutlined ,LogoutOutlined} from '@ant-design/icons';
import { Modal} from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import {
  Top,
  Tab,
  TabItem,
} from './style';
// import {
//   changePlayingState,
//   changeFullScreen
// } from "../../application/Player/store/actionCreators";
import {delCookie,delToken} from '../../api/utils'
const { confirm } = Modal;
let order=false
function showConfirm(props) {
  confirm({
    title: 'Confirm',
    icon: <ExclamationCircleOutlined />,
    content: 'Are you sure to Logout?',
    centered:true,
    onOk() {
      order=true;
      // const {togglePlayingDispatch,toggleFullScreenDispatch}=props
      props.history.push("/")
      // toggleFullScreenDispatch(null);
      // togglePlayingDispatch(null)
      delToken();
      delCookie();

    },
    onCancel() {
    },
  });
}



let res
const checkUrl=(props,order)=>{
  if(order===true) return true
  const { route } = props;
  const url=props.location.pathname
  if(url==='/') return true
    route.routes.map((item)=>{
      if(item.path!==url) return
      return res=false
    })
    if(res===undefined) res=true
    // console.log(res);
  return res
}

function Home (props) {
  const { route } = props;
  // const [order,setOrder]=setState(false)
  // console.log(props);
  const url=props.location.pathname
  // console.log(route);
  return (
    <div>
      {
      checkUrl(props,order) ?
      null 
      :
      <Fragment>
          <Top>
            <HomeOutlined
            onClick={()=>{props.history.push('/recommend')}}
              />
              <LogoutOutlined
              style={{marginLeft:'-42px'}}
              onClick={()=>{showConfirm(props)}}
               />
            <span className="title">Netease Music</span>
            <span 
              className="iconfont search" 
              onClick={() => props.history.push('/search')}
            >
              &#xe62b;
            </span>
        </Top>
        <Tab>
            <NavLink to="/recommend" activeClassName="selected">
              <TabItem><span > 推荐 </span></TabItem>
            </NavLink>
            <NavLink to="/singers" activeClassName="selected">
              <TabItem><span > 歌手 </span></TabItem>
            </NavLink>
            <NavLink to="/rank" activeClassName="selected">
              <TabItem><span > 排行榜 </span></TabItem>
            </NavLink>
            <NavLink to="/mv" activeClassName="selected">
              <TabItem><span > MV </span></TabItem>
            </NavLink>
        </Tab>
    </Fragment>
      }
      { renderRoutes (route.routes) }
      {
        checkUrl(props,order) ? 
        null
        :
        <Player/>
      }
    </div>
  )
}

// const mapStateToProps = state => ({
//   fullScreen: state.getIn(["player", "fullScreen"]),
//   playing: state.getIn(["player", "playing"]),
// });

// const mapDispatchToProps = dispatch => {
//   return {
//     togglePlayingDispatch(data) {
//       dispatch(changePlayingState(data));
//     },
//     toggleFullScreenDispatch(data) {
//       dispatch(changeFullScreen(data));
//     }
//   };
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(withRouter(React.memo(Home)));
export default withRouter(React.memo(Home))