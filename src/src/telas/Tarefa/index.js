import React from 'react';

import { SafeAreaView, View, StatusBar, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';

import { useNavigation } from '@react-navigation/native';


export default function Tarefa (){
    const navigation = useNavigation();

    return (
    <View style={styles.container}> 
        <View style={styles.containerLogo}>
            <Image
            source={require('../../assets/logo.png')}
            style={{width: '100%'}}
            resizeMode='contain'
            />

            <Text>Tarefa</Text>
        </View>
        
       
        

    </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FFFFFFF'
    },
    containerLogo:{
        flex:0.2,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor:'#FFFFFFF'
    
    }
})