import React from 'react';

import { SafeAreaView, StatusBar, Text, StyleSheet, View, TextInput, TouchableOpacity, Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';

export default function Cadastrar (){

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
            <Text style={styles.title}>Nome Completo</Text>
            <TextInput
            placeholder="Digite seu nome"
            style={styles.input}
            />

            <Text style={styles.title}>Nº do Celular</Text>
            <TextInput
            placeholder="Digite seu número de telefone celular"
            style={styles.input}
            />

            <Text style={styles.title}>E-mail</Text>
            <TextInput
            placeholder="Digite seu e-mail"
            style={styles.input}
            />

            <Text style={styles.title}>Confirmar E-mail</Text>
            <TextInput
            placeholder="Digite seu e-mail"
            style={styles.input}
            />

            <Text style={styles.title}>Senha</Text>
            <TextInput
            placeholder="Sua senha"
            style={styles.input}
            />

            <Text style={styles.title}>Confirmar Senha</Text>
            <TextInput
            placeholder="Sua senha"
            style={styles.input}
            />

            <TouchableOpacity style={styles.button}
             onPress={() => navigation.navigate('ConfirmCadastro')}
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
        backgroundColor:'#FFFFFF'

    },
        containerLogo:{
        flex: 0.2,
        justifyContent: 'center',
        alignItems:'center'
    },
    containerForm:{
        flex:1,
        backgroundColor:'#FFFFFF',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%',
    },
    title:{
        marginTop: 28,
        marginBottom: 12,
        fontSize: 4
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
    button:{
        backgroundColor: '#666666',
        borderRadius: 4,
        paddingVertical: 8,
        width: '100%',
        justifyContent: 'center',
        alignItems:'center',
        marginTop: 14
    },
    buttonText:{
        fontSize: 18,
        color: '#FFFFFF',
        fontWeight: 'bold'
    }
})