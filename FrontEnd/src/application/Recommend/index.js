import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { forceCheck } from 'react-lazyload';
import { renderRoutes } from 'react-router-config';

import * as actionCreators from './store/actionCreators';

import Scroll from '../../baseUI/Scroll';
import Loading from '../../baseUI/Loading';
import Slider from '../../components/Slider';
import RecommendList from '../../components/List';
import {checkStatus} from '../../api/request'
import { Content } from './style';

function Recommend(props) {
  const { bannerList, recommendList, enterLoading, songsCount } = props;
  const { getBannerDataDispatch, getRecommendListDataDispatch } = props;
  useEffect (() => {
    if (!bannerList.size) {
      getBannerDataDispatch();
    }
    if (!recommendList.size) {
      getRecommendListDataDispatch();
    }
    checkStatus().then(res=>{
      if(res.bindings[0]["expired"]!==false){
        alert("login time has expired!")
        props.history.push('/')
      }
    }).catch(err=>console.log(err))
    //eslint-disable-next-line
  }, []);

  const bannerListJs = bannerList ? bannerList.toJS() : [];
  const recommendListJS = recommendList ? recommendList.toJS() :[];
  // console.log(songsCount);
  return (
    <Content play={songsCount}
    style={{marginTop:'4px' , }}
    >
      <Scroll onScroll={forceCheck}>
        <div>
          <Slider bannerList={bannerListJs}></Slider>
          <RecommendList recommendList={recommendListJS}></RecommendList>
        </div>
      </Scroll>
      { enterLoading ? <Loading /> : null }      

      { renderRoutes (props.route.routes) }
    </Content> 
  );
}

// 映射 Redux 全局的 state 到组件的 props 上
const mapStateToProps = state => ({
  // 不要在这里将数据 toJS
  bannerList: state.getIn(['recommend', 'bannerList']),
  recommendList: state.getIn(['recommend', 'recommendList']),
  enterLoading: state.getIn(['recommend', 'enterLoading']),
  songsCount: state.getIn (['player', 'playList']).size,
})

// 映射 dispatch 到 props 上
const mapDispatchToProps = dispatch => ({
  getBannerDataDispatch() {
    dispatch(actionCreators.getBannerList());
  },
  getRecommendListDataDispatch() {
    dispatch(actionCreators.getRecommendList())
  }
})

// 将 ui 组件包装成容器组件
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Recommend));