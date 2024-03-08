import React ,{useContext, useState} from 'react';
import UserContext from '../../context/UserContext';
import './profile.css';
import axios from 'axios';

export default  function Profile(){
    const {user} = useContext(UserContext);
    const {setUser} = useContext(UserContext);
    const [toggleEdit, setforEdit] = useState(false);
    const [name, name_fun] = useState('');
    const [email, mail_fun] = useState('');

    function Validate(){
        const gmailPattern = /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)*@gmail\.com$/;
        const isGmail = gmailPattern.test(email); 
        // const passPattern =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        // const isPass = passPattern.test(password);
        const name_len = name.length;
        // const pass_match = password === repassword ? true: false;    
          if( (name_len > 4 && isGmail )) {
            console.log(isGmail);
            return true;
          }
          else {
            return false;
          }
      }
                                                                
      async function handleEdit() {
         setforEdit(!toggleEdit);
         if(toggleEdit)
         {              
            try{ 
            if(Validate()){
                const sending_data={
                    new_name: name,
                    new_email : email,
                  }
                  const context_data={
                    id: user.id,
                    email:email,
                    name:name,  
                    password:user.password,                
                  }
                  name_fun('');
                  mail_fun('');                  
                  const response = await axios.put(`http://localhost:5005/user/updateuser/${user.id}`,{data : sending_data});
                  console.log(toggleEdit);    

                  console.log('updated details  sent:', response.data);
                  if((response.data !== null)){
                    console.log('updated details are alll correct and saved');
                    setforEdit(false);
                    setUser(context_data);
                    console.log(user);
                   }
                  else{
                    console.log('updated details are not saved');
                    setforEdit(true);
                   }
        
            }
            else{
               document.getElementById('correctUpdateAlert').innerText = "enter the correct credentials"
              setforEdit(true);
        }}
    
    catch (error) {
        console.error('Error while sending updated details :', error);
    }
}
            }
          
    

    return (<div><br></br><br/><br/><br/><h2>namaskar</h2>
    <br/>
    <br/>  
    <div>
    {!toggleEdit && <button className= 'editProfilebutton' onClick = {handleEdit}>edit profile</button>}
    {toggleEdit && <p id = "correctUpdateAlert"> </p>}
    <div className='profileContent' id = 'profileContentId'>
    <label className='profileData' id='profileDataId1'><label className='profileDataleft'>Name :</label>  {!toggleEdit ?  <label className='profileDataright'>{user.name}</label> : <input className='profileDataright' type='text' onChange ={ (e) => name_fun(e.target.value)}/>} </label><br/>
    <label className='profileData'><label className='profileDataleft'>Email Id :</label> {!toggleEdit ? <label className='profileDataright'>{user.email}</label> : <input className='profileDataright' type='text'  onChange ={ (e) => mail_fun(e.target.value)}/> } </label>
    </div>
    {toggleEdit && <button className= 'editProfilebutton' onClick = {handleEdit}>save profile</button>}

    </div>
    </div>
    );
        }
        