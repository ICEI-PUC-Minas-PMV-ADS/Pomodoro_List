import React from 'react';

import { SafeAreaView, StatusBar, Text, StyleSheet, View, TextInput, TouchableOpacity, Image, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView } from 'react-native';

import { useNavigation } from '@react-navigation/native';


const DismissKeyboard = ({children}) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>

        {children}
    </TouchableWithoutFeedback>
);

export default function Cadastrar (){

    const navigation = useNavigation()

    return (
        <DismissKeyboard>
        <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
        >
        





        <View style={styles.container}>
        

            <View style={styles.containerLogo}>
            <Image
            source={require('../../assets/imglogo.png')}
            style={{width: '100%'}}
            resizeMode='center'
            />
            </View>
            
            <View style={styles.containerForm}>

            <Text style={styles.title}>Nome Completo</Text>
            <TextInput
            placeholder="Digite seu nome"
            style={styles.input}
            />

            <Text style={styles.title}>Nº do Celular</Text>
            <TextInput keyboardType='numeric'
            placeholder="Digite seu número de telefone celular"
            style={styles.input}
            />

            <Text style={styles.title}>E-mail</Text>
            <TextInput
            placeholder="Digite seu e-mail"
            style={styles.input}
            />



            <Text style={styles.title}>Senha</Text>
            <TextInput
            placeholder="Sua senha"
            style={styles.input}
            secureTextEntry={true}
            />



            <TouchableOpacity style={styles.button}
             onPress={() => navigation.navigate('ConfirmCadastro')}
            >
            <Text style={styles.buttonText}> Continuar</Text>
            </TouchableOpacity>
           </View> 
           

        
        </View>
        </KeyboardAvoidingView>
        </DismissKeyboard>
        
        
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#4F99FC'

    },
        containerLogo:{
        flex: 0.15,
        justifyContent:'center',
        alignItems:'center'
    },
    containerForm:{
        flex:1,
        backgroundColor:'#4F99FC',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%',
    },
    title:{
        marginTop: 15,
        marginBottom: 12,
        fontSize: 15,
        fontWeight: "bold",
        
        
        
        
        
        
    },
    input:{
        borderColor: '#e8e8e8',
        borderWidth: 3,
        borderRadius:10,
        height: 40,
        marginBottom: 4,
        paddingHorizontal: 10,
        fontSize: 16,
        
    },
    button:{
        backgroundColor: 'white',
        borderRadius: 10,
        paddingVertical: 8,
        width: '40%',
        justifyContent: 'center',
        alignItems:'center',
        marginLeft: 200,
        marginTop: 20,
        position:'relative'
        
    },
    buttonText:{
        fontSize: 18,
        color: 'black',
        fontWeight: 'bold',
    }
})
