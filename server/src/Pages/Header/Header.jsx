import React, {useContext} from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import './Header.css'
import logo from '../../images/logo.png'
// import {user_logo} from '../u_logo/u_logo'
import ThemeContext from '../u_logo/u_logo';
// import { Toolbar } from '../u_logo/u_logo';
import { Toolbar } from '../Auth/auth';
import UserContext from '../../context/UserContext';



function Header(){
  const {user} = useContext(UserContext);
  const {setUser} = useContext(UserContext);
  const navigate = useNavigate();
    function doLogout(){
      const name ='noUser';
      const password='';
      setUser({name, password});
      navigate('/');
      // const {user} = useContext(UserContext);
    }

  return(<div className='mainHeader'>
  <div className='Header'>

    <Link to ='/' className='Header_tabs logo' ><img className='logoImg' src={logo} height = '50px' alt= ""/><p>Green Gracery</p></Link>
    <Link to = '/Shop' className='Header_tabs'>Shop</Link>
    <Link to = '/About' className='Header_tabs'>About</Link>
    <Link to = '/Contact' className='Header_tabs'>Contact</Link>
    { console.log(user.name)}
      { ( user.name === 'noUser') ?
    <Link to = '/Auth' className='Header_tabs'>Login</Link>
    :
    <><Link to = '/Profile' className='Header_tabs'> {user.name} </Link>
    {/* <Link to = '/Logout' className='Header_tabs'>LogOut </Link> */}
    <button className='Header_tabs' onClick={doLogout}>Logout</button> </>}
    
    </div>
     </div>)
}
// import { useContext } from 'react';
// function Toolbar() {
//   // Use the useContext hook to access the context value
//   // const theme = React.useContext(ThemeContext);
//   return <div >Toolbar</div>;
// }
export default Header;
