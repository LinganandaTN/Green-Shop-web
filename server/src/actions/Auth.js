import api from "../api/index";

export const register = (authData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signUp(authData);
    dispatch({ type: "AUTH", data });

    navigate("/");
  } catch (error) {
    console.log(error);
  }
};

export const Log = (authData) => async () => {
 console.log("hi from login");
  try {
    const data= authData;
    const response =  await api.post('/user/login', {
    data: data 
  });

  console.log('Data sent:', response.data);
} catch (error) {
  console.error('Error sending data:', error);
}
};