import axios from "axios";

const signIn = async (email, password) => {
  try {
    const response = await axios.post(`api/authentication/signIn`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.error('Error signing in:', error.message);
    throw error;
  }
};

const signUp = async (email, password, userName) => {
  try {
    const response = await axios.post(`api/authentication/signUp`, {
      email,
      password,
      userName,
    });
    return response.data;
  } catch (error) {
    console.error('Error signing up:', error.message);
    throw error;
  }
};

const verifyUser = async () => {
  try {
    const response = await axios.get(`api/users/auth`);
    return response.data;
  } catch (error) {
    console.error('Error verifying user:', error.message);
    throw error;
  }
};

const authenticationAPI = {
  signIn,
  signUp,
  verifyUser,
};

export default authenticationAPI;