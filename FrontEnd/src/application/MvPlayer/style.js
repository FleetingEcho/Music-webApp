import styled from 'styled-components';

export const Content = styled.div`
  position: fixed;
  top: 90px;
  bottom: ${props => props.play > 0 ? "60px" : 0};
  width: 100%;
`;

export const Comments = styled.div`
  width: 100%;
  margin-top:20px;
  ${'' /* background-color:skyblue; */}
`;
export const VideoItem= styled.div `
${'' /* margin-top:10px; */}
 font-family: "Arial","Microsoft YaHei","黑体","宋体",sans-serif;
 font-size:13px;
 margin-bottom:20px;
 .videoInfo{
   ${'' /* margin-top:10px; */}
   
 }
`
export const Wrapper = styled.div`
  width: 100%;
  background-color:skyblue;

`;
export const MvPlayerItem = styled.div`
  width: 100%;
  .commentTitle{
    font-family: "Arial","Microsoft YaHei","黑体","宋体",sans-serif;
    margin-bottom:10px;
    font-size:12px;
  }
  ${'' /* background-color:skyblue; */}

`;
export const Unique = styled.div`
  font-size:13px;
  width: 100%;
  ${'' /* background-color:#8aa4ab4d; */}
  border-radius:20px;
  overflow:hidden;
  margin-bottom:20px !important;
  div{
    font-family: "Arial","Microsoft YaHei","黑体","宋体",sans-serif;
    margin-bottom:10px;
  }
  .userInfo{
    margin-top:10px;
    margin-left:10px;
    float:left;
    line-height:40px;
    heigh:40px;
    width:15%;
    ${'' /* background-color:#4892e6; */}
  }
  .userName{
    color:#0a6fab;
  }
  .time{
    font-style:italic
  }
  .goRight{
    line-height:17px ;
    padding-top:10px;
    padding-right:10px;
    float:right;
border-bottom: 1px solid #e6eaea !important;
    width:75%
  }
  img{
    height:40px;
    width:40px;
    border-radius:50%;
  }
`;


export const Artist = styled.div`
  width: 100%;
  height:50px;
  img{
    float:left;
    width:60px;
    height:60px;
    border-radius:50%;
    margin-left:10px;
  }
  div{
    color:#0a6fab;
  height:50px;
  line-height:50px;
    float:left;
  display:border-box;
    margin-left: 20px;
    font-size:16px;
    font-family: "Arial","Microsoft YaHei","黑体","宋体",sans-serif;
  }

`;