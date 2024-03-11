// Login function in React component
const login = async (username, password) => {
    try {
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });
        const data = await response.json();
        localStorage.setItem('token', data.token); // Store JWT token in local storage
        // Redirect or update UI based on login status
    } catch (error) {
        console.error('Login error:', error);
    }
    return <div>
        
    </div>
};