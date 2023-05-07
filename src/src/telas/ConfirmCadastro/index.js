import React from 'react';

import { SafeAreaView, View, StatusBar, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';

import { useNavigation } from '@react-navigation/native';


export default function ConfirmCadastro (){
    const navigation = useNavigation();

    return (
    <View style={styles.container}> 
        <View style={styles.containerLogo}>
            <Image
            source={require('../../assets/imglogo.png')}
            style={{width: '100%'}}
            resizeMode='center'
            />
        </View>
        
        <View style={styles.containerForm}> 
        <Text style={styles.title}>Digite o código enviado para o {'\n'}
        e-mail ou telefone cadastrado:</Text>
        <TextInput
            placeholder="Digite seu e-mail"
            style={styles.input}
            />
            
        <TouchableOpacity style={styles.button}
        onPress={() => navigation.navigate('Tarefa')}
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
        backgroundColor:'#4F99FC'

    },
        containerLogo:{
        flex: 0.2,
        justifyContent: 'center',
        alignItems:'center'
    },
    containerForm:{
        flex:1,
        backgroundColor:'#4F99FC',
        paddingStart: '5%',
        paddingEnd: '5%',
    },
    button:{
        position:'relative',
        backgroundColor: 'white',
        borderRadius: 50,
        paddingVertical:8,
        width: '60%',
        alignSelf:'center',
        top:'10%',
        justifyContent: 'center',
        alignItems:'center',
        
    },
    buttonText:{
        fontSize: 18,
        color: 'black',
        fontWeight: 'bold'
    },
    title:{
        color: 'white',
        marginTop: 28,
        marginBottom: 30,
        fontSize: 20,
        marginLeft: 40,
    },
    input:{
        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius:5,
        height: 40,
        marginBottom: 4,
        paddingHorizontal: 10,
        fontSize: 16,
        marginTop:15,
    }

})