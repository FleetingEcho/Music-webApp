import styled from 'styled-components';

export const Content = styled.div`
  position: fixed;
  top: 90px;
  bottom: ${props => props.play > 0 ? "60px" : 0};
  width: 100%;
  margin-top:3.5px;
  img{
    border-radius:10px;
    height:100px;
  }
`;
export const ChannelItem = styled.div`
width:100%;
height:50px;
text-align:center;
border:0px solid #fff;
li{
  color:'#123456';
  float:left;
  margin-left:60px;
  margin-bottom:20px;
  border:2px solid skyblue !important;
  height:25px;
  padding: 0 10px;
  line-height:25px;
  border-radius:20px;
  font-size:16px;
  background-color:skyblue;
  &:hover,&:active,&:focus{
          &{
            outline: none;
          }
          &:before{
            background: red;
          }
        }
}

`;
export const ImgList=styled.div `
 font-family: "Arial","Microsoft YaHei","黑体","宋体",sans-serif;
 font-size:14px;
 line-height:20px;
 margin-bottom:10px;
 .imgInfo{
  height:100px;
   float:right;
   width:60%;
   border-bottom: 1px solid #e6eaea !important;
   div{
  ${'' /* color:#0a6fab; */}
   }
 }

`
export const MVInfo=styled.div `
width:100%;
height:93px;
`