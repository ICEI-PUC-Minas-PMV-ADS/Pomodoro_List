import API from './webapi.services';
import {BASE_URL} from './urls';

export const register = async (param) => {
  try{
    return await API.post(`${BASE_URL}/register`, param).then( 
      response => {
        return response.data;
      },
      error =>{
        console.log(error);
        return  null;
      }
    );
  }catch(error){
    console.log(error);
    return null;
  }
}

export const login = async (param) => {
  try{
    return await API.post(`${BASE_URL}/login`, param).then( 
      response => {
        return response.data;
      },
      error =>{
        console.log(error);
        return  null;
      }
    );
  }catch(error){
    console.log(error);
    return null;
  }
}

export const requestPasswordReset = async (param, password) => {
  try {
    const endpoint = `${BASE_URL}/users/${param[0].id}`;

    let updatedData = {
      email: param[0].email,
      password: password,
      name: param[0].name,
      phone: param[0].phone,
      id: param[0].id
    };

    const response = await API.put(endpoint, updatedData);
    return 'Senha alterada com sucesso!';
  } catch (error) {
    console.error('Erro ao solicitar token de alteração de senha:', error);
    return null;
  }
}
  export const VerificaEmail = async (param) => {
    try{
      return await API.get(`${BASE_URL}/users?email=${param.email}`).then( 
        response => {
          const message = response.data.length > 0 ? "Existe este Email!" : "Não Existe este email!";
          return { data: response.data, message: message };
        },
        error =>{
          console.log(error);
          return  null;
        }
      );
    }catch(error){
      console.log(error);
      return null;
    }
}