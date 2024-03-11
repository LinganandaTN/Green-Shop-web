import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Log_t from './Log_t.jsx'
import User from './user.jsx'

import About from './Pages/About/About';
import Contact from './Pages/Contact';
import Auth from './Pages/Auth/auth';
import Home_body from './Pages/home/home';
import Shop from './Pages/Shop/Shop';
import UserContextProvider from './tep_pro/UserContextProvider';
import Profile from './Pages/Profile/Profile'
import Logout from './Pages/Logout/Logout';
function Allroutes(){
    return(
        <Routes>
        <UserContextProvider>
           <Route path='/' element={<Home_body />}></Route>
           <Route path='/Shop' element={<Shop />}></Route>
            <Route path='/About' element={<About />}></Route>
            <Route path='/Contact' element={<Contact />}></Route> 
            <Route path='/Auth' element={<Auth />}></Route>
            <Route path='/Profile' element= {<Profile />} > </Route>   
            <Route path= '/Logout' element={<Logout />}></Route>        
        </UserContextProvider>
        </Routes>
    )
}

export default Allroutes;