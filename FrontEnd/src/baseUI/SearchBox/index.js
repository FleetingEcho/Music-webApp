import React, {useRef, useState, useEffect, useMemo} from 'react';
import { debounce } from './../../api/utils';
import { SearchBoxWrapper } from './style';
import { Input,message } from 'antd';
import {SearchOutlined } from '@ant-design/icons';
// const { Search } = Input;
const SearchBox = (props) => {
  const queryRef = useRef();
  const [query, setQuery] = useState('');
  const [queryTemp, setQueryTemp] = useState('');
  // 从父组件热门搜索中拿到的新关键词
  const { newQuery } = props;
  console.log(newQuery)
  // 父组件针对搜索关键字发请求相关的处理
  const { handleQuery } = props;
  // 根据关键字是否存在决定清空按钮的显示 / 隐藏 
  const displayStyle = query!=='' ? { display: 'block',marginLeft:'10px' } : { display: 'none' };

  useEffect (() => {
    queryRef.current.focus();
  }, []);

  useEffect(() => {
    // 注意防抖
    handleQueryDebounce(query);
    // eslint-disable-next-line
  }, [query]);

  useEffect(() => {
    // if(queryTemp===false) return
    if (newQuery !== query) {
      setQuery(newQuery);
    }
    // eslint-disable-next-line
  }, [newQuery]);

  // const handleChange = (value) => {
  //   setQuery(value);
  // };
  const handleChange = (e) => {
    setQueryTemp(e.currentTarget.value);
  };

  // 缓存方法
  let handleQueryDebounce = useMemo(() => {
    return debounce(handleQuery, 500);
  }, [handleQuery]);

  const clearQuery = () => {
    setQuery('');
    setQueryTemp('');
    queryRef.current.focus();
  }

  return (
    <SearchBoxWrapper>
      <i className="iconfont icon-back" onClick={() => props.back()}>&#xe655;</i>
      {/* <Input ref={queryRef} className="box" placeholder="搜索歌曲、歌手、专辑" value={query} onChange={handleChange}/> */}
       <Input
      ref={queryRef} 
       bordered={false}
      placeholder="搜索歌曲、歌手、专辑" 
      value={queryTemp}
      onChange={(e) =>{setQueryTemp(e.target.value)}}
      style={{ width:'90%',color:'#fff' }}
      onPressEnter={(e)=>{setQuery(e.target.value)}}
    />
      {
        query==='' ?
        <SearchOutlined
        style={{marginLeft:'10px',color:'#fff'}}
       onClick={()=>{setQuery(queryTemp)}}
       />
       :
      <i className="iconfont icon-delete" 
      onClick={()=>{clearQuery()}} 
      style={displayStyle}>&#xe600;</i>
      }

    </SearchBoxWrapper>
     
   
    
  )
};

export default React.memo(SearchBox);