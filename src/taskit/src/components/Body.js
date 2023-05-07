import React from 'react';
import {StyleSheet, View} from 'react-native';

const Body = ({children}) =>{
  
  return <View style={styles.container}>{children}</View>
};

const styles = StyleSheet.create({
 
  container:{
    flex:1,
    backgroundColor: '#4682B4',
    margin:8,
    
  },
});

export default Body;