import React from 'react';
import Login1 from './Login1';
import Profile from './Profile';
import UserContextProvider from './UserContextProvider';

function App1(){
    return(
        <UserContextProvider>
            <h1>Hello World</h1>
            <Login1 />
            <Profile />
        </UserContextProvider>
    )}

export default App1;