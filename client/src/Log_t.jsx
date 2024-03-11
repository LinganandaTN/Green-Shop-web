import React, { useEffect } from "react";
import axios from "axios";

const Log_t = () => {
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/login');
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching login:', error);
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


export default Log_t;