import './App.css';
// import Header from './Pages/Header/Header'
import Allroutes from './Allroutes';
import { BrowserRouter as Router, Route, Switch, useLocation, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
// import Login from './Pages/Auth/Login';
// import UserContextProvider from './context/UserContextProvider';
// import Profile from './Pages/Profile'
// import Auth from './Pages/Auth/auth'
function App_t() {
 

  return (
    <div className="App">
    <Router>
     <Link to = '/login'  >login</Link>
     <Link to = 'user'> user</Link>
     <Allroutes />
    </Router>
    </div>
  );
}
export default App_t;
