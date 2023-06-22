import API from './webapi.services';
import {BASE_URL} from './urls';

export const registerTarefa = async (param) => {
  try{
    
    return await API.post(`${BASE_URL}/tarefa`, param).then( 
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
 export const getTarefas = async () => {
    try{
      return await API.get(`${BASE_URL}/tarefa`).then( 
        response => {
          const message = response.data?"funcionou":"não funcionou";
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

export const AlterarTarefa = async (id, param) => {
  try{
    
    return await API.patch(`${BASE_URL}/tarefa/${id}`, param).then( 
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

// Deletar Tarefas CONFIGURAR
export const DeleteTarefa = async (id) => {
  try{
    return await API.delete(`${BASE_URL}/tarefa/${id}`).then( 
      response => {
        const message = response.data?"funcionou":"não funcionou";
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