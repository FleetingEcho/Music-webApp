import React, { useState, useEffect, useCallback, useRef } from 'react'
// import {getNewMvRequest,getMvDetailRequest,fetchMvUrlRequest,getRelatedMvRequest,getMvCommentRequest} from '../../api/request'
import Loading from '../../baseUI/Loading'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { Spin } from 'antd'
import {
  getMvUrl,
  getMvInfo,
  getRelatedMvUrl,
  changeEnterLoading,
  getMvCommentUrl,
  changePlayingMv,
  getArtistInfo,
} from './store/actionCreators'
import { connect } from 'react-redux'
import {
  Content,
  Artist,
  Comments,
  Wrapper,
  MvPlayerItem,
  Unique,
  VideoItem,
} from './style'
function MvPlayer(props) {
  let { location } = props.history
  const id = location.state.mvId
  // const artistId = location.state.artistId
  // const id = props.match.params.id
  // console.log(props);
  // const id ='167850';
  const {
    getMvUrlRequest,
    getMvInfoRequest,
    getRelatedMvRequest,
    getMvCommentUrlRequest,
    getArtistInfoRequest,
  } = props
  const {
    mvUrl,
    mvInfo,
    artistInfo,
    videoComments,
    hotComments,
    enterLoading,
  } = props
  useEffect(() => {
    // count++
    // if ( count>3)
    // return
    getMvUrlRequest(id)
    getMvInfoRequest(id)
    // getArtistInfoRequest(artistId)
  }, [getMvUrlRequest, getMvInfoRequest, id])
  useEffect(() => {
    getMvCommentUrlRequest(id)
  }, [id])
  // console.log(hotComments)
  // console.log(artistInfo);
  // console.log(videoComments);
  return (
    <MvPlayerItem>
      {enterLoading ? (
        <Loading />
      ) : (
        <div>
          <VideoItem>
            <video
              style={{ width: '100%', height: '200px' }}
              // autoPlay={false}
              // preload='auto'
              controls="controls"
              src={mvUrl}
            ></video>
            <div className="videoInfo">
              <div
                style={{
                  textAlign: 'center',
                  marginBottom: '10px',
                  marginTop: '5px',
                }}
              >
                <span style={{ color: '#0a6fab', fontSize: '16px' }}>
                  {mvInfo.name}
                </span>
              </div>
              <span style={{ marginLeft: '10px' }}>
                Artist:{' '}
                <span style={{ color: '#0a6fab' }}>{mvInfo.artistName}</span>{' '}
              </span>
              <span
                style={{
                  float: 'right',
                  fontStyle: 'italic',
                  marginRight: '10px',
                }}
              >
                {mvInfo.publishTime}
              </span>
            </div>
          </VideoItem>
          <div className="commentTitle" style={{ marginLeft: '10px' }}>
            热门评论: {hotComments.length}{' '}
          </div>
          {hotComments === []
            ? null
            : hotComments.map((item, index, self) => {
                return (
                  <Comments key={item.commentId + index}>
                    <Unique>
                      <div className="userInfo">
                        <img src={item.user.avatarUrl} alt="" />
                      </div>
                      <div className="goRight">
                        <div className="userName">{item.user.nickname} </div>
                        <div className="time">
                          {new Date(item.time).toString().substr(11, 10)}{' '}
                          <span style={{ float: 'right' }}>
                            {/* <span className="iconfont thumb"></span> */}
                            {/* <i className="far fa-thumbs-up"></i> */}
                            <FontAwesomeIcon icon={faThumbsUp} />
                            {item.likedCount}
                          </span>
                        </div>
                        <div className="content">{item.content} </div>
                      </div>
                    </Unique>
                  </Comments>
                )
              })}
          <div className="commentTitle" style={{ marginLeft: '10px' }}>
            最新评论: {videoComments.length}
          </div>
          {videoComments === []
            ? null
            : videoComments.map((item, index, self) => {
                return (
                  <Comments key={item.commentId + index}>
                    <Unique>
                      <div className="userInfo">
                        <img src={item.user.avatarUrl} alt="" />
                      </div>
                      <div className="goRight">
                        <div>{item.user.nickname} </div>
                        <div className="time">
                          {new Date(item.time).toString().substr(11, 10)}{' '}
                          <span style={{ float: 'right' }}>
                            {/* <span className="iconfont thumb"></span> */}
                            {/* <i className="far fa-thumbs-up"></i> */}
                            <FontAwesomeIcon icon={faThumbsUp} />
                            {item.likedCount}
                          </span>
                        </div>
                        <div>{item.content} </div>
                      </div>
                    </Unique>
                  </Comments>
                )
              })}
        </div>
      )}
    </MvPlayerItem>
  )
}

const mapStateToProps = (state) => ({
  mvUrl: state.getIn(['mvPlayer', 'mvUrl']),
  videoComments: state.getIn(['mvPlayer', 'videoComments']),
  hotComments: state.getIn(['mvPlayer', 'hotComments']),
  mvInfo: state.getIn(['mvPlayer', 'mvInfo']).toJS(),
  artistInfo: state.getIn(['mvPlayer', 'artistInfo']).toJS(),
  enterLoading: state.getIn(['mvPlayer', 'enterLoading']),
})

const mapDispatchToProps = (dispatch) => {
  return {
    getMvUrlRequest(id) {
      dispatch(getMvUrl(id))
      dispatch(changeEnterLoading(true))
      dispatch(changePlayingMv(true))
    },
    getMvInfoRequest(id) {
      dispatch(getMvInfo(id))
    },
    getRelatedMvRequest(id) {
      dispatch(getRelatedMvUrl(id))
    },
    getMvCommentUrlRequest(id) {
      dispatch(getMvCommentUrl(id))
      dispatch(changePlayingMv(true))
    },
    getArtistInfoRequest(id) {
      dispatch(getArtistInfo(id))
    },
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(MvPlayer))
