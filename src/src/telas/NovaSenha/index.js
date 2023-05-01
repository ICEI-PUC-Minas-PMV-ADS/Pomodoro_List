import React from 'react';

import { SafeAreaView, View, StatusBar, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';

import { useNavigation } from '@react-navigation/native';


export default function NovaSenha (){
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
        
        <Text style={styles.title}>Senha:</Text>
            <TextInput
            placeholder="Telefone ou E-mail"
            style={styles.input}
            />

           <Text style={styles.title}>Confirmar Senha:</Text>
           <TextInput
            placeholder="Telefone ou E-mail"
            style={styles.input}
            />
            
        <TouchableOpacity style={styles.button}
        onPress={() => navigation.navigate('Entrar')}
        >
        <Text style={styles.buttonText}> Continuar</Text>
        </TouchableOpacity>            
        </View>            
        

    </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FFFFFFF'
    },
    containerForm:{
        flex:1,
        backgroundColor:'#FFFFFF',
        paddingStart: '5%',
        paddingEnd: '5%',
    },
    input:{
        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius:5,
        height: 40,
        marginBottom: 4,
        paddingHorizontal: 10,
        fontSize: 16
    },
    containerLogo:{
        flex:0.2,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor:'#FFFFFFF'
    },
    button:{
        position:'absolute',
        backgroundColor: '#666666',
        borderRadius: 50,
        paddingVertical:8,
        width: '60%',
        alignSelf:'center',
        top:'40%',
        justifyContent: 'center',
        alignItems:'center'
    },
    buttonText:{
        fontSize: 18,
        color: '#FFFFFF',
        fontWeight: 'bold'
    },
    title:{
        marginTop: 28,
        marginBottom: 12,
        fontSize: 16
    }
    
})