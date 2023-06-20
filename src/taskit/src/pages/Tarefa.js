import React, { useState, useEffect } from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, TextInput} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons} from '@expo/vector-icons';
import { registerTarefa, getTarefas } from '../services/tarefas.services';


const Tarefa = () => {
  const options = { timeZone: 'America/Sao_Paulo', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
  const navigation = useNavigation();
  const route = useRoute();
  const userId = route.params.userId;

  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [timer, setTimer] = useState('');
  const [user, setUser] = useState('');
 
  useEffect (() => {
    chamarTarefas();
  }, []);

    const chamarTarefas = () => {
      getTarefas({}).then(res => {
        console.log(res.data);
        setTasks(res.data);
      });
    };
  
  const handleCriarTarefa = () => {
    try {
      if (newTask === undefined || newTask == "") {
        throw new Error("favor digitar uma tarefa");
      }
      
      registerTarefa({
        nome: newTask,
        data: new Date().toLocaleString('pt-BR', options),
        id_user: userId,
        timer: 0,
      }).then(res => {
        chamarTarefas();
      });
    } catch (error) {
      alert(error.message);
    }


  }
 

  return (
    <View style={styles.container}>

    <View style={styles.containerLogo}>
        <Image
          source={require('../assets/imglogo.png')}
          style={{ width: 200 }}
          resizeMode='contain'
        />
    </View>

    <View style={styles.form}>
      <TextInput style={styles.Input}
        placeholderTextColor="#999"
        autoCorrect={true}
        placeholder='Adicione uma tarefa'
        maxLength={25}
        onChangeText={text => setNewTask(text)}
        value={newTask} />
      <TextInput style={styles.Input}
        keyboardType='numeric' onChangeText={(text) => setTimer(text)}
        placeholder='numero' maxLength={10} />
      <TouchableOpacity style={styles.Button} onPress={handleCriarTarefa}>
        <Ionicons name='ios-add' size={25} color='#fff' />
      </TouchableOpacity>
    </View>

    <Text style={styles.Texto}>Tarefas e Tempo:</Text>
     {tasks.map(task => (
      <>
        <Text key={task.id} style={styles.TextoTimer}>{task.nome} {timer}</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Timer', {id:task.id, name:task.nome})}>
          <Ionicons name='md-timer-outline' size={25} />
        </TouchableOpacity>
      </>
      ))
    }

      <TouchableOpacity style={styles.LogoutButton} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.TextoLog}>Logout</Text>
          <Ionicons text='Logout' size={10} color='#fff' />
      </TouchableOpacity>
    </View>
  );

}


// Css da pagina
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4F99FC',
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginTop: 0,

  },
  Body: {
    flex: 1,

  },
  form: {
    padding: 0,
    height: 60,
    justifyContent: 'center',
    alignSelf: 'stretch',
    flexDirection: 'row',
    paddingTop: 13,
    borderTopWidth: 1,
    borderColor: '#eee',

  },

  Input: {
    
    height: 40,
    backgroundColor: '#eee',
    borderRadius: 4,
    paddingVertical: 5,
    paddingHorizontal: 10,
    justifyContent: 'center',
    flexDirection: 'row'
  },

  Button: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1c6cce',
    borderRadius: 4,
    marginLeft: 10,
    padding: 5,
  },

  LogoutButton: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 5,
    marginTop: 25,
    justifyContent: 'center',
    paddingVertical: 5,
    
  },

  FlatList: {
    Flex: 1,
    marginTop: 5,
  },

  ContainerView: {
    marginBottom: 15,
    padding: 15,
    borderRadius: 4,
    backgroundColor: 'white',
    display: 'flex',
    allignItens: 'center',
    justifyContent: 'space-between',
    borderwidth: 1,
    borderColor: '#eee',
    flexDirection: 'row',

  },

  Texto: {
    fontSize: 20,
    color: '#333',
    fontWeight: 'bold',
    marginTop: 4,
    textAlign: 'center',

  },

  TextoTimer: {
    fontSize: 20,
    color: '#333',
    fontWeight: 'bold',
    marginTop: 4,
    textAlign: 'center',
    flexDirection: 'row',

  },

  TextoLog: {
    fontSize: 20,
    color: '#333',
    fontWeight: 'bold',
    marginTop: 4,
    textAlign: 'center',
    position: 'relative',
  },

  containerLogo: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4F99FC',
  },

});

export default Tarefa;