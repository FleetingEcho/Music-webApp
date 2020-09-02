import React,{ Fragment } from "react";
import { Route, Redirect } from "react-router-dom";
import {getToken,setToken,getCookie} from '../api/utils'
// import routes from "./index";
import RouterConfig from "./index";
import { IconStyle } from '../assets/iconfont/iconfont'
import { GlobalStyle } from '../style'
import {withRouter} from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import {message} from 'antd'
let count=0
function FrontendAuth(props){
  console.log(props);
  // let {location} = props.history;
    const pathname = props.location.pathname;
    console.log(pathname);
    let res
    const targetRouter =RouterConfig[0].routes.some((item)=>{
      // console.log(item);
      item.path===pathname ? res=true : res=false
      return res
    });
    const isLogin = getToken();
    // console.log(targetRouter);
    // count++
    if(!isLogin && pathname==='/'){
      setToken('1234567')
    }
    if (isLogin) {
      // console.log(2222);
      // 已登录
    if (!targetRouter) {
      // 404
          message.error('No such page..')
          return (
            <Fragment>{renderRoutes(RouterConfig)}</Fragment>
            // <Home></Home>
          ) 
    }else{
      // 非404
      if (pathname === "/") {
        return <Redirect to="/recommend"></Redirect>;
      } else {
        return (
          <Fragment>
            <GlobalStyle></GlobalStyle>
            <IconStyle></IconStyle>
            {renderRoutes(RouterConfig)}
          </Fragment>
        )
      }
    }
    } else {
      // 未登录
          if (pathname === "/") {
            return <Fragment>{renderRoutes(RouterConfig)}</Fragment> 
          }else{
            return <Redirect to="/"></Redirect>;
          }
    }

    
  
}

export default withRouter(FrontendAuth);