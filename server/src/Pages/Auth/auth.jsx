import React, { useState, useEffect ,useContext} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import './auth.css';
import ThemeContext from '../u_logo/u_logo';
// import { Toolbar } from '../u_logo/u_logo';
import ChildComponent from './ChildComponent.jsx';
import UserContext from '../../context/UserContext.js';

const Auth = () => {
    const [isLogin, is_Log_fun] = useState(true);
    const [name, name_fun] = useState('');
    const [email, mail_fun] = useState('');
    const [password, pass_fun] = useState('');
    const [repassword, repass_fun] = useState('');
    const [pass_alert, pass_alert_func] = useState('')
    const navigate = useNavigate();
    const {setUser} = useContext(UserContext);

    function Validate(){
      const gmailPattern = /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)*@gmail\.com$/;
      const isGmail = gmailPattern.test(email);

      const passPattern =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
      const isPass = passPattern.test(password);
      const name_len = name.length;
      const pass_match = password === repassword ? true: false;
        if( (isGmail && isPass) && isLogin){
          return true;
        }
      
        else if( (name_len > 4 && isGmail && isPass && pass_match) && !isLogin) {
          return true;
        }
      
        else {
          return false;}
    }
    const Auth_func = async () => {
      try {

        if(isLogin){
          !isLogin && pass_alert_func("")

          if (Validate()){

          const login_data={
            email : email,
            password: password,
          }

          const response = await axios.post('http://localhost:5005/user/login',{data : login_data});
          console.log('login details  sent:', response.data);
          { document.getElementById('alert').innerText = ""}
          if((response.data === 'undefined')){
            { document.getElementById('alert').innerText = "user not found"}
            console.log(response.data);
            navigate('/Auth');
           }

          else{
            navigate('/');
          //   const name =response.data.name;
          //   const email =response.data.email;
          //  const password =response.data.password;
              const user =response.data;
              setUser(user);

          }
        }
        else{
          { document.getElementById('alert').innerText = "wrong credentials"}
        }
      }
      else{
        if(Validate()){
        const reg_data={
          name : name,
          email : email,
          password: password,
        }
        
        const response = await axios.post('http://localhost:5005/user/register',{data : reg_data});
        console.log('registration details sent:', response.data);
        { document.getElementById('alert').innerText = ""}
        // { document.getElementById('passalert').innerText = pass_alert }
        if((response.data == null)){
          navigate('/Auth');
         }

        else{
          navigate('/');
          const user =response.data;
          console.log(user)
          setUser(user);

        }
        }
      
      else{
        { document.getElementById('alert').innerText = "wrong credentials"}
      }}
      } 
      catch (error) {
        console.error('Error while sending details :', error);
      }
    };

    return (<div className='auth'>
      <h3 className='authHead'>{isLogin?"Login" :"Register"}</h3><br/>
    <div className='authContent'>
      <p id='alert'  >Enter the Credentials</p>
    {!isLogin &&
    <label className='labelGroup' htmlFor='name'>
       <span className='labelNote'>Name : </span>   <input type='text' onChange={(e) => name_fun(e.target.value)} placeholder='enter your name' id ='name'/>
    </label>}


    <label className='labelGroup' htmlFor='email'>
    <span className='labelNote'>Email : </span>  <input type='email' onChange={(e) => mail_fun(e.target.value)} placeholder='enter your mail id' id ='email'/>
    </label>

    <label className='labelGroup' htmlFor='password'>
    <span className='labelNote'>Password : </span> <input type='password' onChange={(e) => pass_fun(e.target.value)} placeholder='enter your password' id ='password'/>
    </label>

      {/* <p id = 'passalert' ></p> */}
    {!isLogin &&
    <label className='labelGroup' htmlFor='re_password'>
    <span className='labelNote'>Confirm Password : </span>  <input type='password' onChange = {(e) => repass_fun(e.target.value) } placeholder='re-enter your password' id ='re_password'/>
    </label>
    } 
    <br/>
    <button className='authGo' type ='submit' onClick = {Auth_func}>   GO..! </button>
    <br/><br/>
    <label className='authLink' onClick={() => is_Log_fun(!isLogin) }>{isLogin?"Don't Have Account ? Then Register": "Already Have Account ! Then Login"} </label>

    </div>
    </div>
    );
  };

export default Auth;
