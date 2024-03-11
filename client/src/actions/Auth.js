import api from "../api/index";

export const login = async (login_data, setUser) => {
  try {
      const response = await api.post('/user/login', { data: login_data });
      if (response.data.data === undefined) {
        return "notUser";
      } else {
        localStorage.setItem('user', response.data.token);
        const user = response.data.data;
        setUser(user);
        return "foundUser";
      }
  } catch (error) {
    console.error('Error while sending details:', error);
  }
};

export const register = async (register_data, setUser) => {
  try {
    const response = await api.post('/user/register', { data: register_data });
    if (response.data === 'Already registered') {
      return "existUser";
    } else {
      localStorage.setItem('user', response.data.token);
      const user = response.data.data;
      setUser(user);
      return "newUser";
    }
  } catch (error) {
    console.error('Error while sending details:', error);
  }
};



// export const login = async (login_data, setUser) => {
//   try {
//     console.log("hi from login");
//     console.log("login in action page");
//     const response = await api.post('/user/login', { data: login_data });
//     console.log('login details sent:', response.data.data);
//     console.log('login token generated:', response.data.token);

//     if (response.data.data === undefined) {
//       console.log("not user in action");
//       return "notUser";
//     } else {
//       localStorage.setItem('user', response.data.token);
//       console.log(localStorage.getItem('user'));
//       const user = response.data.data;
//       setUser(user);
//       return "foundUser";
//     }
//   } catch (error) {
//     console.error('Error while sending details:', error);
//   }
// };

// export const register = async (register_data, setUser) => {
//   try {
//     console.log("hi from register");
//     console.log("register in action page");
//     const response = await api.post('/user/register', { data: register_data });
//     console.log('register details sent:', response.data.data);
//     console.log('register token generated:', response.data.token);
//     console.log('registe', response.data);
//     if (response.data === 'Already registered') {
//       console.log("already register user");
//       return "existUser";
//     } else {
//       localStorage.setItem('user', response.data.token);
//       console.log(localStorage.getItem('user'));
//       const user = response.data.data;
//       setUser(user);
//       return "newUser";
//     }
//   } catch (error) {
//     console.error('Error while sending details:', error);
//   }
// };






