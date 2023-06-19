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

// Deletar Tarefas CONFIGURAR
export const DeleteTarefas = async () => {
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