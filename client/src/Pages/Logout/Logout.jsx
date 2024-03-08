import React ,{useContext, useState} from 'react';
import UserContext from '../../context/UserContext';

function Logout(){
    const {setUser} = useContext(UserContext);
    const name ='';
    const password='';
    // const {user} = useContext(UserContext);

    // if(!user) return <h1> not logged in</h1>
    return(
        <div>
        {/* {user.name}
        {user.password} */}
        <h1>Logout </h1>
        <h1>Logout </h1>

        <h1>Logout </h1>

        {    setUser({name:'noUser',password:''})}

        </div>
    )}
    

export default Logout;