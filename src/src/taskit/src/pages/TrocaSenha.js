import React, { useState } from 'react';
import { StyleSheet, View, Alert, Text, Image } from 'react-native';
import { TextInput, Button, Headline } from 'react-native-paper';
import TextField from '@mui/material/TextField';

import {VerificaEmail,login,requestPasswordReset} from '../services/auth.services';
import { updatePassword } from '../services/senha.services';
import Input from '../components/Input';
import Logo from '../components/Logo';

import { useNavigation } from '@react-navigation/native';

const TrocaSenha = () => {

  const navigation = useNavigation();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setconfirmPassword] = useState();

  const handleSalvar = () => {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (password === confirmPassword && regexEmail.test(email)){   
        VerificaEmail({
          email: email
        }).then( res => {
          if(res.message !== "Não Existe este email!"){
             requestPasswordReset(res.data, password).then(res => {
              Alert.alert(res);
              navigation.navigate("Login");
             });
          }else{
             Alert.alert(res);
          }
        });
    }else{
      Alert.alert("senhas não conferem!")
    }

  }


  return (

    <View style={styles.container}>

      <View style={styles.containerLogo}>
        <Logo />
      </View>

      <View style={styles.containerForm}>

        <Text style={styles.title}>Digite o e-mail cadastrado:</Text>
        <TextField
        style={styles.TextField}
          label="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          keyboardType="default"
        />

        <Text style={styles.title}>Digite a nova senha:</Text>
        <TextField
        style={styles.TextField}
          label="Digite a nova senha"
          value={password}
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
          keyboardType="default"
        />
         <Text style={styles.title}>Confirme sua senha:</Text>
        <TextField
        style={styles.TextField}
          label="Digite novamente a nova senha"
          value={confirmPassword}
          secureTextEntry
          onChangeText={(text) => setconfirmPassword(text)}
          keyboardType="default"
        />
        
        <Button
          style={styles.button}
          
          onPress={handleSalvar}>
          <Text style={styles.buttonText}> Cadastrar Senha</Text>
        </Button>

        <Button
          style={styles.button}
          
          onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}> Voltar</Text>
        </Button>

      </View>
    </View>

  );

}

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    paddingVertical: 5,
    marginBottom: 8,
    backgroundColor: '#FFFFFF'
  },

  buttonText: {
    fontSize: 18,
    color: '#4682B4',
  },
  container: {
    flex: 1,
    backgroundColor: '#4682B4'

  },
  containerLogo: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerForm: {
    flex: 1,
    backgroundColor: '#4682B4',
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
  title: {
    textAlign: 'center',
    marginTop: 12,
    marginBottom: 12,
    fontSize: 18,
    color: '#FFFFFF'
  },
  TextField: {
    marginBottom: 8,
    paddingVertical: 5,
    backgroundColor: '#FFFFFF',
    borderRadius: 4
  }
});

export default TrocaSenha;