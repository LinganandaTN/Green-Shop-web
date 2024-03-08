import './App.css';
import Header from './Pages/Header/Header'
import Allroutes from './Allroutes';
import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Login from './Pages/Auth/Login';
import UserContextProvider from './context/UserContextProvider';
// import Profile from './Pages/Profile'
// import Auth from './Pages/Auth/auth'
function App() {
 

  return (
    <div className="App">
    <Router>
        {/* <Switch> */}
        <UserContextProvider>
          <Header />
          {/* <Login /> */}
          <Allroutes />
        {/* </Switch> */}
        </UserContextProvider>
    </Router>
    </div>
  );
}

export default App;
{/* <header className="App-header">
<img src={logo} className="App-logo" alt="logo" />
<p>
  Edit <code>src/App.js</code> and save to reload.
</p>
<a
  className="App-link"
  href="https://reactjs.org"
  target="_blank"
  rel="noopener noreferrer"
>
  Learn React
</a>
</header> */}