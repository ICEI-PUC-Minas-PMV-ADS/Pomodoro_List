import React, { useState, useEffect } from 'react';
import {
  SafeAreaView, View, StatusBar, Text, StyleSheet, Image, TouchableOpacity, TextInput, Button, Alert, FlatList,
  KeyboardAvoidingView, Platform
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Tarefa = () => {

  const navigation = useNavigation();

  const [task, setTask] = useState([]);
  const [newTask, setNewTask] = useState('');

  // função de async-storage não esta funcionando 100% ainda
  async function addTask() {
    const search = task.filter(task => task === newTask)
    if (newTask === '') {
      return;
    }
    if (search.length !== 0) {
      Alert.alert("Atenção", "Nome da tarefa repetido!");
      return;
    }
    setTask([...task, newTask]);
    setNewTask('');
    Keyboard.dismiss();
  }
  async function removeTask(item) {

    Alert.alert(
      "Deletar Task",
      "Tem certeza que deseja remover esta anotação?",
      [
        {
          text: "cancel",
          onPress: () => {
            return;
          },
          style: 'cancel'
        },
        {
          text: 'Ok',
          onPress: () => setTask(task.filter(tasks => tasks !== item)),
        },
      ],
      { cancelable: false }
    );
  }
  useEffect(() => {
    async function carregaDados() {
      const task = await AsyncStorage.getItem("task");
      if (task) {
        setTask(Json.parse(task));

      }
    }
    carregaDados()
  }, [])

  useEffect(() => {
    async function salvaDados() {
      AsyncStorage.setItem("task", JSON.stringify(task))
    }
    salvaDados();
  }, [task]);

  // função do aplicativo flatlist funcional

  return (
    <>
      <KeyboardAvoidingView
        keyboardVerticalOffset={0}
        behavior="padding"
        style={{ flex: 1, }}
        enabled={Platform}

      >


        <View style={styles.containerLogo}>
          <Image
            source={require('../services/auth.services')}
            style={{ width: '100%' }}
            resizeMode='center'
          />
        </View>


        <View style={styles.container}>

          <View style={styles.Body}>
            <FlatList
              style={styles.FlatList}
              data={task}
              keyExtractor={item => item.toString()}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => (
                <View styles={styles.ContainerView}>
                  <Text style={styles.Texto}> {item} </Text>
                  <TouchableOpacity onPress={() => removeTask(item)}>
                    <MaterialIcons name="delete-forever" size={25} color='#f64c75'
                    />
                  </TouchableOpacity>
                </View>
              )}
            />



          </View>

          <View style={styles.form}>
            <TextInput
              style={styles.Input}
              placeholderTextColor="#999"
              autoCorrect={true}
              placeholder='Adicione uma tarefa'
              maxLength={25}
              onChangeText={text => setNewTask(text)}
              value={newTask}
            />
            <TouchableOpacity style={styles.Button} onPress={() => addTask()}>
              <Ionicons name='ios-add' size={25} color='#fff' />
            </TouchableOpacity>
          </View>

        </View>

      </KeyboardAvoidingView>
    </>

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
    flex: 1,
    height: 40,
    backgroundColor: '#eee',
    borderRadius: 4,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderwidth: 1,
    borderColor: 'eee',
  },
  Button: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1c6cce',
    borderRadius: 4,
    marginLeft: 10,
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
    fontSize: 14,
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