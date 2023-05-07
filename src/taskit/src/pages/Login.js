import React, { useState } from 'react';
import { StyleSheet, View, Alert, Text, Image, TextInput} from 'react-native';
import {Button, Headline } from 'react-native-paper';
//import Container from '../components/Container';
//import Header from '../components/Header';
//import Body from '../components/Body';
import Input from '../components/Input';
//import Logo from '../components/Logo';
import{ useFonts, Montserrat_300Light} from '@expo-google-fonts/montserrat';
import { useNavigation } from '@react-navigation/native';
import {useUser} from '../contexts/UserContext';

import {login} from '../services/auth.services';
import Tarefa from './Tarefa';

const Login = () => {

  const navigation = useNavigation();
  const {setSigned, setName} = useUser();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

   const handleLogin= () => {

    login({
      email: email,
      password: password
    }).then( res => {
      console.log(res);

      if(res && res.user){
        setSigned(true);
        setName(res.user.name);
        AsyncStorage.setItem('@TOKEN_KEY', res.accessToken).then();
        
      }else{
         Alert.alert('Atenção', 'Usuário ou senha inválidos!');
      }

    });
    
  }
  return (

    <View style={styles.container}>

      <View style={styles.containerLogo}>
        <Image
          source={require('../assets/imglogo.png')}
          style={{ width: 100 }}
          resizeMode='contain'
        />
      </View>

      <View style={styles.containerForm}>
        <Input 
          label="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          
        />
        <Input
          
          label="Senha"
          value={password}
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
          
        />
        <Button
          style={styles.button}
          mode="contained"
          onPress={handleLogin}>
          <Text style={styles.buttonText}> Login</Text>
        </Button>
        <Button
          style={styles.button}
          mode="contained"
          onPress={() => navigation.navigate('NovaSenha')}>
          <Text style={styles.buttonText}> Esqueceu sua senha?</Text>
        </Button>
        <Button
          style={styles.button}
          mode="contained"
          onPress={() => navigation.navigate('Tarefa')}>
          <Text style={styles.buttonText}> Tarefa</Text>
        </Button>
        <Button
          style={styles.button}
          mode="contained"
          onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}> Voltar</Text>
        </Button>
      </View>
        
    </View>

  );

};

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    paddingVertical: 5,
    marginBottom: 8,
    backgroundColor: '#FFFFFF'
  },
  header: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 12
  },
  buttonText: {
    fontSize: 18,
    color: '#4682B4',
  },
  container:{
    flex:1,
    backgroundColor:'#4682B4'

},
    containerLogo:{
    flex: 0.2,
    justifyContent: 'center',
    alignItems:'center'
},
containerForm:{
    flex:1,
    backgroundColor:'#4682B4',
    paddingStart: '5%',
    paddingEnd: '5%',
},
input: {
  borderColor: '#4682B4',
  borderWidth: 1,
  borderRadius: 4,
  paddingVertical: 5,
  marginBottom: 8,
  backgroundColor: '#FFFFFF',
  fontSize: 18
}
});

export default Login;