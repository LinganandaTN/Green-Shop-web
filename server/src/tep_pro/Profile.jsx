import React ,{useContext, useState} from 'react';
import UserContext from './UserContext';

function Profile(){
    const {user} = useContext(UserContext);

    if(!user) return <h1> not logged in</h1>
    return(
        <div>
        {user.username}
        Profile 
        </div>
    )}

export default Profile;