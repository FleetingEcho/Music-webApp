import React,{useRef,useEffect,useState} from 'react'
import {LoginContainer,LoginWrapper} from './style'
import { withRouter,Link} from 'react-router-dom';
import {goLogIn} from '../../api/request'
import { setToken, setCookie} from '../../api/utils'
import { Input, Tooltip,Button,message} from 'antd';
import { InfoCircleOutlined, UserOutlined } from '@ant-design/icons';
import md5 from 'blueimp-md5';

function Login (props){
  const [name,setName]=useState("")
  const [password,setPassword]=useState("")
  const nameRef = useRef();
  const  passwordRef= useRef();
  useEffect(()=>{
    nameRef.current.focus();
  },[])
  
  const handleNameChange = (e) => {
    setName(e.currentTarget.value);
  };
  const handlePwdChange = (e) => {
    setPassword(e.currentTarget.value);
  };
  const submitInfo=()=>{
    if(name==='' || password==='')
    return message.error('username or password cannot be empty',0.8)
    goLogIn(name,md5(password)).then(res=>{
      // console.log(res);
      if(res.code===200){
        message.success('Login Successfully',0.6)
        setToken(res.token)
        setCookie(res.cookie)
        setName("")
        setPassword("")
        props.history.push('/recommend')
      }else {
        message.error('Failed to login')
      }
    }).catch(
      err=>{if(err) throw err}
    )
  }
  const customerLogin=(props)=>{
    // console.log(props);
    props.history.push({
      pathname: '/recommend/customer',
      // state: {auth: '1'},
  });
  }
  return(
    <LoginContainer>
      <LoginWrapper>
      <div className="backImg"></div>
      <Input
      ref={nameRef}
      // value={name}
      onChange={(e)=>{setName(e.target.value)}}
      className="nameInput"  
      placeholder="Enter your username"
      prefix={<UserOutlined className="site-form-item-icon" />}
      suffix={
        <Tooltip title="Case Sensitive">
          <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
        </Tooltip>
      }
    />
    <Input.Password 
     ref={passwordRef}
     onChange={(e)=>{setPassword(e.target.value)}}
     className="passwordInput"
     placeholder="input password" />
    <h3
    style={{marginTop:'50px',textAlign:'center'}}
    ><Link to='' onClick={()=>{
      customerLogin(props)
    }}>Visitor (Log in) </Link></h3>

    <Button type="primary" onClick={submitInfo}>
              Login
            </Button>
      </LoginWrapper>
    </LoginContainer>
  )


}

export default withRouter(Login)