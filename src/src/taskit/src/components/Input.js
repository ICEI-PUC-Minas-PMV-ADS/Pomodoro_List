import React from 'react';
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
//import TextField from '@mui/material/TextField';

const Header = (props) => {
  return (
    <TextInput
      style={styles.title}
        {...props}
    />)
    ;
};

const styles = StyleSheet.create({
  title: {
    //marginTop: 28,
     borderRadius: 4,
    paddingVertical: 5,
    marginBottom: 8,
    fontSize: 18,
    color: '#FFFFFFF'
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

export default Header;