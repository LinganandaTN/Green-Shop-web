import React, {useContext} from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import './Header.css'
import logo from '../../images/logo.png'
import UserContext from '../../context/UserContext';

function Header(){
  const {user} = useContext(UserContext);
  const {setUser} = useContext(UserContext);
  const navigate = useNavigate();
    function doLogout(){
      localStorage.removeItem('user');
      setUser(undefined);
      navigate('/');
    }

  return(
  <div className='mainHeader'>
    <div className='Header'>

      <Link to ='/' className='Header_tabs logo' ><img className='logoImg' src={logo} height = '50px' alt= ""/><p>Green Gracery</p></Link>
      <Link to = '/Shop' className='Header_tabs'>Shop</Link>
      <Link to = '/About' className='Header_tabs'>About</Link>
      <Link to = '/Contact' className='Header_tabs'>Contact</Link>
        { ( user === undefined) ?
      <Link to = '/Auth' className='Header_tabs'>Login</Link>
      :
      <><Link to = '/Profile' className='Header_tabs'> {user.name} </Link>
      <button className='Header_tabs' onClick={doLogout}>Logout</button> </>}     
    </div>
  </div>)
}

export default Header;
