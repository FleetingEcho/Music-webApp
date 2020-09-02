import React from 'react';
import LazyLoad from "react-lazyload";
import { withRouter } from 'react-router-dom';

import { getCount } from "../../api/utils";

import { 
  ListWrapper,
  ListItem,
  List
} from './style';

function RecommendList(props) {
  const enterDetail = (id) => {
    props.history.push (
      {
        pathname:'/album',
        state:{albumId:id}
      }
    )
  }

  return (
    <ListWrapper
    
    >
      {
        props.recommendList!==[] ?
        <h1 className="title"> Recommend List </h1>
        : null
      }
      <List>
        {
          props.recommendList.map ((item, index) => {
            return (
              <ListItem 
                key={item.id + index}
                onClick={() => enterDetail(item.id)}
              >
                <div className="img_wrapper">
                  <div className="decorate"></div>
                    <LazyLoad 
                      placeholder={<img width="100%" height="100%" scr={require('./music.png')} alt="music" />}
                    >
                      <img src={item.picUrl + "?param=300x300"} width="100%" height="100%" alt="music"/>
                    </LazyLoad>
                  <div className="play_count">
                    <i className="iconfont play">&#xe885;</i>
                    <span className="count">{getCount (item.playCount)}</span>
                  </div>
                </div>
                <div className="desc">{item.name}</div>
              </ListItem>
            )
          })
        }
      </List>
    </ListWrapper>
  );
}

export default React.memo(withRouter(RecommendList));