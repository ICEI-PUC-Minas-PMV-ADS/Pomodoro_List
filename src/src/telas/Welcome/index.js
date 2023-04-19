import React from 'react';

import { SafeAreaView, View, StatusBar, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';


export default function Welcome (){
    const navigation = useNavigation();

    return (
    <View style={styles.container}> 
        <View style={styles.containerLogo}>
            <Image
            source={require('../../assets/logo.png')}
            style={{width: '100%'}}
            resizeMode='contain'
            />
        </View>

        <View style={styles.containerForm}> 
        <TouchableOpacity style={styles.button}
        onPress={() => navigation.navigate('Entrar')}
        >
        <Text style={styles.buttonText}> Entrar</Text>
        </TouchableOpacity>    
     
        </View>    

        <View style={styles.containerForm}> 
        <TouchableOpacity style={styles.button}
        onPress={() => navigation.navigate('Cadastrar')}
        >
        <Text style={styles.buttonText}> Cadastre-se!</Text>
        </TouchableOpacity>            
        </View>            
        

    </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FFFFFF'

    },
        containerLogo:{
        flex: 2,
        justifyContent: 'center',
        alignItems:'center'
    },
    containerForm:{
        flex:1,
        backgroundColor:'#FFFFFF',
        paddingStart: '5%',
        paddingEnd: '5%',
    },
    button:{
        position:'absolute',
        backgroundColor: '#666666',
        borderRadius: 50,
        paddingVertical:8,
        width: '60%',
        alignSelf:'center',
        bottom:'60%',
        justifyContent: 'center',
        alignItems:'center'
    },
    buttonText:{
        fontSize: 18,
        color: '#FFFFFF',
        fontWeight: 'bold'
    }
})