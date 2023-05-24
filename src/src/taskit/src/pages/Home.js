import React, { useState } from 'react';
import { StyleSheet, View, Alert, Image } from 'react-native';
import { Text, TextInput, Button, Headline } from 'react-native-paper';
//import Container from '../components/Container';
//import Body from '../components/Body';
//import Input from '../components/Input';
import Logo from '../assets/imglogo.png';

import { useNavigation } from '@react-navigation/native';
import { useUser } from '../contexts/UserContext';

const Home = () => {

  const navigation = useNavigation();

  return (

    <View style={styles.container}>

      <View style={styles.containerLogo}>
        <Image
          source={require('../assets/imglogo.png').default}
          style={{ width: 100, height: 100 }}
          resizeMode='contain'
        />
      </View>

      <View style={styles.containerForm}>
        <Button
          style={styles.button}
          mode="outlined"
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}> Entrar</Text>
        </Button>
        <Button
          style={styles.button}
          mode="outlined"
          onPress={() => navigation.navigate('Register')}>
          <Text style={styles.buttonText}> Cadastrar</Text>
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
    flex: 1,
    justifyContent: 'center',
    alignItems:'center'
},
containerForm:{
    flex:1,
    backgroundColor:'#4682B4',
    paddingStart: '5%',
    paddingEnd: '5%',
}

});

export default Home;