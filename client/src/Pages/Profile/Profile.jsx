import React ,{useContext,useEffect, useState} from 'react';
import UserContext from '../../context/UserContext';
import './profile.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Validate } from '../Auth/validation';
export default  function Profile(){
    const navigate = useNavigate();
    const {user} = useContext(UserContext);
    const {setUser} = useContext(UserContext);
    const [toggleEdit, setforEdit] = useState(false);
    const [name, name_fun] = useState('');
    const [email, mail_fun] = useState('');
    const [data, setData] = useState(null);
    useEffect(() => {
      const fetchData = async () => {
          try {
              const local_token = localStorage.getItem('user');
              console.log("hii from profile");
              console.log(local_token);
              const response = await axios.get('http://localhost:5005/', {
                  headers: {
                      Authorization: `Bearer ${local_token}`
                  }
              });

              console.log('Data:', response.data.data);
              setData(response.data.data); // Update state with fetched data
              setUser(response.data.data);
              console.log(user);

          } catch (error) {
              console.error('Error while sending home details:', error);
          }
      };

      fetchData();

  }, []); // Empty dependency array to run effect only once
  if(user === undefined){
    navigate('/Auth');
  }
                                                                
      async function handleEdit() {
         setforEdit(!toggleEdit);
         if(toggleEdit)
         {                
            try{ 
              const dataforValidate={
                name: name,
                email : email,
                // password: user.password,
              }
            if(Validate(dataforValidate,"Profile") ){

                const sending_data={
                    new_name: name,
                    new_email : email,
                    password: user.password,
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

                  console.log('updated :', response.data.data);
                  if((response.data !== null)){
                    console.log('updated details are alll correct and saved');
                    setforEdit(false);
                    setUser(context_data);
                    localStorage.setItem('user',response.data.token);
                    console.log(localStorage.getItem('user'));
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
          
    
          
    return (
    !(user) ? <div>
      {/* {alert('please login first')} */}
        {navigate('/Auth')}
    </div>:
    <div><br></br><br/><br/><br/><h2>namaskar</h2>
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
        