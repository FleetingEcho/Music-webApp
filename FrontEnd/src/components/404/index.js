import React,{useRef,useEffect,useState} from 'react';
import {Container,Error,Wrapper} from './style';
import icon from './icon.jpg'
import { Link } from "react-router-dom";

function NotFound(){

  return(
    <Container>
<Wrapper>
<img src={icon}  alt=""/>
      <Error>
       <h2>404 Not Found</h2>
      <h3 
        style={{marginTop:'30px',paddingBottom:'300px'}}
      >
      <Link to="recommend">
      Back to Home Page
      </Link>
      </h3>
      </Error>
</Wrapper>
    </Container>
  )
}

export default NotFound