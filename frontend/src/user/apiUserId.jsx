import axios from "axios";


const uriBack = import.meta.env.VITE_URL_BACK;

export const getUserId = async (UserId) => {
  try {
    const response = axios.get(`${uriBack}/userId?UserId=${UserId}`)
    http://localhost:3000/convert/userId?userId=2
    return response.data
  } catch (error) {
    console.error('Error al obtener data de usuario',error);
    throw error;
  }
}

