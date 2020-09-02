import React, {useRef, useState, useEffect, useMemo} from 'react';
import { debounce } from './../../api/utils';
import { SearchBoxWrapper } from './style';

const SearchBox = (props) => {
  const queryRef = useRef();
  const [query, setQuery] = useState('');
  // 从父组件热门搜索中拿到的新关键词
  const { newQuery } = props;
  // 父组件针对搜索关键字发请求相关的处理
  const { handleQuery } = props;
  // 根据关键字是否存在决定清空按钮的显示 / 隐藏 
  const displayStyle = query ? { display: 'block' } : { display: 'none' };

  useEffect (() => {
    queryRef.current.focus();
  }, []);

  useEffect(() => {
    // 注意防抖
    handleQueryDebounce(query);
    // eslint-disable-next-line
  }, [query]);

  useEffect(() => {
    if (newQuery !== query) {
      setQuery(newQuery);
    }
    // eslint-disable-next-line
  }, [newQuery]);

  const handleChange = (e) => {
    setQuery(e.currentTarget.value);
  };

  // 缓存方法
  let handleQueryDebounce = useMemo(() => {
    return debounce(handleQuery, 500);
  }, [handleQuery]);

  const clearQuery = () => {
    setQuery('');
    queryRef.current.focus();
  }

  return (
    <SearchBoxWrapper>
      <i className="iconfont icon-back" onClick={() => props.back()}>&#xe655;</i>
      <input ref={queryRef} className="box" placeholder="搜索歌曲、歌手、专辑" value={query} onChange={handleChange}/>
      <i className="iconfont icon-delete" onClick={clearQuery} style={displayStyle}>&#xe600;</i>
    </SearchBoxWrapper>
  )
};

export default React.memo(SearchBox);