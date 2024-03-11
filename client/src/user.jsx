import React, { useEffect } from "react";
import axios from "axios";

const User = () => {
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/user');
                console.log("user");
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching user:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Login</h1>
        </div>
    );
};


export default User;