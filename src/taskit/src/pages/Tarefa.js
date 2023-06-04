import React, { useState, useEffect } from 'react';
import {
  SafeAreaView, View, StatusBar, Text, StyleSheet, Image, TouchableOpacity, TextInput, Button, Alert, FlatList,
  KeyboardAvoidingView, Platform,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
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
      if (timer === undefined || timer == "") {
        throw new Error("favor digitar um tempo");
      }
      registerTarefa({
        nome: newTask,
        data: new Date().toLocaleString('pt-BR', options),
        id_user: userId,
        timer: timer
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
        <Text key={task.id} style={styles.Texto}>{task.nome} {timer}</Text>
      ))}
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
  containerLogo: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4F99FC',
  },

});

export default Tarefa;