import API from './webapi.services';
import {BASE_URL} from './urls';

export const updatePassword = async (param) => {
    try{
      return await API.put(`${BASE_URL}/users?email=${param.email}`, param).then(
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