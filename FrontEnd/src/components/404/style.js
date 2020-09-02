import styled from 'styled-components';
import style from '../../assets/global-style';

export const Container = styled.div `
  width: 100%;
  height: 100%;
background-color: ${style["theme-color"]};
${'' /* display:flex; */}
flex-direction:row;
  img{
    width:30%;
    height:15%;
    margin-top:35%;
    margin-left:34%;
  }

`;
export const Error = styled.div `
  width: 50%;
  text-align:center;
  ${'' /* height: 100%; */}
  padding-top:30% ;
  margin-left:25%;
  background: ${ style["theme-color"] };

`;
export const Wrapper=styled.div `
    width: 100%;
    height:100%;
`