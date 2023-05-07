import React, { useState } from 'react';
import { StyleSheet, View, Alert, Text, Image } from 'react-native';
import { TextInput, Button, Headline } from 'react-native-paper';
//import Container from '../components/Container';
//import Header from '../components/Header';
//import Body from '../components/Body';
import Input from '../components/Input';
//import Logo from '../components/Logo';

import { useNavigation } from '@react-navigation/native';

const NovaSenha = () => {
  const navigation = useNavigation();
  return (

    <View style={styles.container}> 
        
        <View style={styles.containerLogo}>
            <Image
            source={require('../assets/imglogo.png')}
            style={{width: '100%'}}
            resizeMode='contain'
            />
        </View>
        
        <View style={styles.containerForm}> 
        
        <Text style={styles.title}>Digite o e-mail ou telefone cadastrado:</Text>
            <TextInput
            placeholder="Telefone ou E-mail"
            style={styles.input}
            />
        
        <Button
          style={styles.button}
          mode="contained"
          onPress={() => navigation.navigate('TrocaSenha')}>
          <Text style={styles.buttonText}> Continuar</Text>
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

}

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
title:{
  textAlign: 'center',
  marginTop: 28,
  marginBottom: 12,
  fontSize: 18,
  color: '#FFFFFF'
}
});

export default NovaSenha;