import React, { useState, useEffect, useCallback, useRef } from 'react'
import { withRouter } from 'react-router-dom'
import { forceCheck } from 'react-lazyload'
import Scroll from '../../baseUI/Scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVideo } from '@fortawesome/free-solid-svg-icons'
import LazyLoad from 'react-lazyload'
import {
  getMvList,
  getSelfMvList,
  getAllMvList,
  changeEnterLoading,
} from './store/actionCreators'
import { connect } from 'react-redux'
import { Content, ChannelItem, ImgList, MVInfo } from './style'
import Loading from '../../baseUI/Loading'
import { renderRoutes } from 'react-router-config'
import { Spin } from 'antd'
import { Tabs } from 'antd'
import clonedeep from 'clonedeep'
import { getCount } from '../../api/utils'
const { TabPane } = Tabs
let mvList1 = []
let mvList2 = []
let judge = 1
let judge1 = 0
let flag = false
let selfListPage = 0
let allListPage = 1
let ListPage = 1
// let flag2=0;
let loadingFlag = false
let tabScroll = false
function MV(props) {
  const [channel, setChannel] = useState('最新')
  const [offset, setOffset] = useState(0)
  const [mvListClone, setMvListClone] = useState([])
  const { getMvListRequest, getSelfMvListRequest, getAllMvListRequest } = props
  const [count, setCount] = useState(0)
  const { mvList, songsCount, enterLoading } = props
  if (mvList.length !== 0) {
    mvList1 = clonedeep(mvList)
  }
  if (count === 0 && mvList1.length !== 0) {
    setMvListClone(mvList)
    let count1 = 2
    setCount(count1)
  }
  useEffect(() => {
    if (channel === '最新') {
      getMvListRequest()
      mvList1 = []
      mvList2 = []
      allListPage = 0
      selfListPage = 0
      setMvListClone([])
      setTimeout(() => {
        console.log(mvList1)
        setMvListClone(mvList1)
      }, 800)
    } else if (channel === '全部') {
      setMvListClone([])
      mvList2 = []
      mvList1 = []
      selfListPage = 0
      ListPage = 1
      getAllMvListRequest('全部', '0')
      setTimeout(() => {
        setMvListClone(mvList1)
      }, 800)
    } else if (channel === '网易云') {
      setMvListClone([])
      mvList2 = []
      mvList1 = []
      allListPage = 0
      ListPage = 0
      // flag=0
      getSelfMvListRequest('0')
      setTimeout(() => {
        setMvListClone(mvList1)
      }, 800)
    } else {
      return
    }
  }, [channel])
  const playMV = (id, artistId) => {
    props.history.push({
      pathname: '/play',
      state: { mvId: id, artistId: artistId },
    })
    // props.history.push(`/play`)
  }

  const fetchMoreData = () => {
    if ((judge = judge1 === 1)) {
      if (channel === '最新') {
        mvList1 = []
        tabScroll = true
        loadingFlag = false
        mvList2 = []
        return
      } else if (channel === '全部') {
        mvList2.push(...mvList1)
        mvList1 = []
        allListPage += 1
        getAllMvListRequest('全部', allListPage * 10)
      } else if (channel === '网易云') {
        mvList2.push(...mvList1)
        mvList1 = []
        selfListPage += 1
        // console.log(flag*10);
        getSelfMvListRequest(selfListPage * 10)
      }
      setTimeout(() => {
        judge1 = 0
        console.log(mvList)
        mvList2.push(...mvList1)
        setMvListClone(mvList2)
        loadingFlag = false
        flag = false
      }, 1000)
    } else {
      return
    }
    // console.log(mvList);
    // console.log('mvList2长度'+mvList2.length);
    // {/* <Spin style={{ marginLeft: '50%' }} /> */}
  }
  return (
    <Content play={songsCount}>
      {enterLoading && mvListClone.length === 0 ? (
        <Loading/>
      ) : (
        <Scroll
          bounceBottom={tabScroll}
          onScroll={forceCheck}
          pullUp={() => {
            // loadingFlag=true;
            // flag=true;
            judge1++
            fetchMoreData()
          }}
          // pullDownRefresh={true}
        >
          <div>
            <div key={props.location.key}>
              <ChannelItem>
                <Tabs
                  onTabClick={(key) => setChannel(key)}
                  defaultActiveKey={channel}
                  centered
                >
                  <TabPane tab="最新" key="最新"></TabPane>
                  <TabPane tab="网易云" key="网易云"></TabPane>
                  <TabPane tab="全部" key="全部"></TabPane>
                </Tabs>
              </ChannelItem>
            </div>
            {mvListClone.length === 0 ? (
              <Spin style={{ marginLeft: '50%',marginTop: '40%' }} />
            ) : (
              mvListClone.map((item, index, self) => {
                return (
                  <ImgList
                    onClick={() => playMV(item.id, item.artistId)}
                    key={index}
                  >
                    <MVInfo>
                      <img
                        src={item.cover}
                        width="40%"
                        alt="music"
                        onClick={() => playMV(item.id, item.artistId)}
                      />
                      <div className="imgInfo">
                        <div style={{ marginLeft: '10px', color: '#0a6fab' }}>
                          <span
                            style={{ marginRight: '10px', color: '#0a6fab' }}
                          >
                            {item.name}{' '}
                          </span>
                        </div>
                        <div>
                          <span style={{ marginLeft: '10px' }}>
                            Artist:
                            <span style={{ color: '#0a6fab' }}>
                              {item.artistName}{' '}
                            </span>
                          </span>
                        </div>
                        <div style={{ marginLeft: '10px', marginTop: '8px' }}>
                          <FontAwesomeIcon
                            icon={faVideo}
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
            )}
            {enterLoading ? <Spin style={{ marginLeft: '50%' }} /> : null}
          </div>
        </Scroll>
      )}
      {renderRoutes(props.route.routes)}
    </Content>
  )
}

const mapStateToProps = (state) => ({
  mvList: state.getIn(['mvList', 'mvList']).toJS(),
  allMvList: state.getIn(['mvList', 'allMvList']).toJS(),
  selfMvList: state.getIn(['mvList', 'selfMvList']).toJS(),
  enterLoading: state.getIn(['mvList', 'enterLoading']),
  songsCount: state.getIn(['player', 'playList']).size,
})

const mapDispatchToProps = (dispatch) => {
  return {
    getMvListRequest() {
      dispatch(getMvList())
      dispatch(changeEnterLoading(true))
    },
    getAllMvListRequest(area, offset) {
      dispatch(getAllMvList(area, offset))
      dispatch(changeEnterLoading(true))
    },
    getSelfMvListRequest(offset) {
      dispatch(getSelfMvList(offset))
      dispatch(changeEnterLoading(true))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(MV))
