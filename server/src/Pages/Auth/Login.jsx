import React ,{useState, useContext} from 'react';
import UserContext from '../../context/UserContext';

function Login(){
    const [username, setUname] = useState('');
    const [password, setPassword] = useState('');

    const {setUser} = useContext(UserContext)

    function handleSubmit(e){
        e.preventDefault();
        setUser({username, password});
    }
    return(
        <div>
        uname : <input type="text" value={username} onChange= {(e) => { setUname(e.target.value)}} />
        password : <input type="password"  onChange= {(e) => { setPassword(e.target.value)}} />
        <button onClick={handleSubmit}>Login</button>
        </div>
    )}
        
        

export default Login;