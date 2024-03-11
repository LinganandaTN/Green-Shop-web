import React, { useState, useEffect ,useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import './auth.css';
import UserContext from '../../context/UserContext.js';
import {login,register} from '../../actions/Auth.js';
import {Validate} from './validation.jsx'
const Auth = () => {

    const [isLogin, is_Log_fun] = useState(true);
    const [name, name_fun] = useState('');
    const [email, mail_fun] = useState('');
    const [password, pass_fun] = useState('');
    const [repassword, repass_fun] = useState('');
    const [pass_alert, pass_alert_func] = useState('')
    const navigate = useNavigate();
    const {setUser} = useContext(UserContext);

      const Auth_func = async () => {
      try {

        if(isLogin){ // for login
          !isLogin && pass_alert_func("")
          const login_data={
            email : email,
            password: password,
          }
          if (Validate(login_data, "Login")){  //validating the entered details
            
            console.log('login validated');
            const log_status = await login(login_data,setUser);
            console.log(log_status);
            if(log_status ==="foundUser"){
              navigate('/');
            }
            else{
              console.log('user not found');
              { document.getElementById('alert').innerText = "user not found"}
              navigate('/Auth');
            }
          }
        else{
          { document.getElementById('alert').innerText = "wrong credentials"}
        }
      }
      else {  // for Register module
        const register_data={
          name : name,
          email : email,
          password: password,         
        }
        if(Validate(register_data,"Register")){
         
          console.log('register validated');
            const reg_status = await register(register_data,setUser);
            console.log(reg_status);
          { document.getElementById('alert').innerText = ""}
          // { document.getElementById('passalert').innerText = pass_alert }
          if((reg_status === "existUser" )){
            { document.getElementById('alert').innerText = "Already registered better try login"}
            navigate('/Auth');
          }

          else{
            navigate('/');
          }
        }
      
        else{
          { document.getElementById('alert').innerText = "wrong credentials"}
        }
      }
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
