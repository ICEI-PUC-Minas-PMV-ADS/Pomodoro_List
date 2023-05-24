import React from 'react';
import {StyleSheet, Image} from 'react-native';

const Logo = () =>{
  return <Image style={styles.image} source={require('../assets/imglogo.png')} />
};

const styles = StyleSheet.create({
 image:{
    width: 100,
    borderRadius: 30
  },
});

export default Logo;