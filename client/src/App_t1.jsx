import React, { useState } from 'react';
import axios from 'axios';

function App_t1() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [token, setToken] = useState('');

    const login = async (username, password) => {
        try {
            console.log(username);

            const response = await axios.post('http://localhost:5001/api/login', { username, password });
            const { token } = response.data;
            setToken(token);
            setLoggedIn(true);
        } catch (error) {
            console.error('Login error:', error);
        }
    };

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:5001/api/data', {
                headers: {
                    Authorization: "Bearer " +token,
                }
            });
            console.log('Data:', response.data);
        } catch (error) {
            console.error('Fetch data error:', error);
        }
    };

    return (
        <div>
            {loggedIn ? (
                <div>
                    <h1>Welcome, {token}</h1>
                    <button onClick={fetchData}>Fetch Protected Data</button>
                </div>
            ) : (
                <div>
                    <h1>Login</h1>
                    <button onClick={() => login('admin', 'password')}>Login</button>
                </div>
            )}
        </div>
    );
}

export default App_t1;