import React, { useState } from 'react';
import { StyleSheet, View, Alert, Image, Text } from 'react-native';
import { TextInput, Button, Headline } from 'react-native-paper';
import Input from '../components/Input';
import Login from './Login';
import TextField from '@mui/material/TextField';

import { useNavigation } from '@react-navigation/native';

import {register} from '../services/auth.services';

const Register = () => {

  const navigation = useNavigation();

  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleRegister = () => {

    register({
      name: name,
      phone: phone,
      email: email,
      password: password
    }).then( res => {
      console.log(res);

      if(res){

        Alert.alert('Atenção', 'Usuário Cadastrado com sucesso!',[
          { text: "OK", onPress: () => navigation.goBack() }
        ]);
        navigation.navigate('Login');
      }else{

         Alert.alert('Atenção', 'Usuário não cadastrado! Tente novamente mais tarde.');
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
      <TextField
      style={styles.TextField}
          label="Nome"
          value={name}
          onChangeText={(text) => setName(text)}
          keyboardType="default"
          
        />
         <TextField
         style={styles.TextField}
          label="Telefone"
          value={phone}
          onChangeText={(text) => setPhone(text)}
          keyboardType="default"
         />
        <TextField
        style={styles.TextField}
          label="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          keyboardType="default"
        />
        
        <TextField
        style={styles.TextField}
          label="Senha"
          value={password}
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
          keyboardType="default"
          
        />
        
        <Button
          style={styles.button}
          mode="contained"
          onPress={handleRegister}>
          <Text style={styles.buttonText}> Cadastrar</Text>
        </Button>
        <Button
          style={styles.button}
          mode="outlined"
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
},
TextField: {
  marginBottom: 8,
  paddingVertical: 5,
  backgroundColor: '#FFFFFF',
  borderRadius: 4
}
});

export default Register;