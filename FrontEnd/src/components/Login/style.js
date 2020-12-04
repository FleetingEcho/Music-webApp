import styled from 'styled-components';
import style from '../../assets/global-style';
import IconImg from './icon.jpg'
export const LoginContainer =styled.div `
height:100%;
border-bottom: 1px solid ${style["border-color"]};
background-color: ${style["theme-color"]};
width:100%;
${'' /* max-height:100%; */}
display:flex;
flex-direction:row;
.backImg{
  margin:0 auto;
  margin-top:125px;
  max-width:125px;
  height:100px;
  background:url(${IconImg}) no-repeat;
  background-size:100% 100%;
}
${'' /* flex-wrap:wrap; */}
${'' /* justify-content:space-around; */}
.nameInput{
  margin-top:40px;
  width:50%;
  margin-left:25%;
  margin-right:25%;
  ${'' /* margin: auto 0; */}
  height:30px;
}

.passwordInput{
  margin-top:30px;
  width:50%;
  margin-left:25%;
  margin-left:25%;
  height:30px;
  ${'' /* margin:0 auto; */}
}
button{
  margin-top:30px;
  width:50%;
  height:40px;
  margin-left:25%
}

`


export const LoginWrapper=styled.div `
    width: 100%;
    height:100%;
`