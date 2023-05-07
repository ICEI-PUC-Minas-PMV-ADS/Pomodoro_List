import React from 'react';

import { SafeAreaView, StatusBar, Text, StyleSheet, View, TextInput, TouchableOpacity, Image, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView } from 'react-native';

import { useNavigation } from '@react-navigation/native';


const DismissKeyboard = ({ children}) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>

        {children}
    </TouchableWithoutFeedback>
);



export default function TrocaSenha (){
    const navigation = useNavigation();

    return (
    <DismissKeyboard>
    {/*<KeyboardAvoidingView
    style={styles.container}
    behavior="padding"
    >*/}
    <View style={styles.container}> 
        <View style={styles.containerLogo}>
            <Image
            source={require('../../assets/imglogo.png')}
            style={{width: '100%'}}
            resizeMode='center'
            />
        </View>
        
        <View style={styles.containerForm}> 
        
        <Text style={styles.title}>Digite o e-mail ou telefone cadastrado:</Text>
            <TextInput
            placeholder="Telefone ou E-mail"
            style={styles.input}
            />
        
        <TouchableOpacity style={styles.button}
        onPress={() => navigation.navigate('NovaSenha')}
        >
        <Text style={styles.buttonText}> Continuar</Text>
        </TouchableOpacity>            
        </View>            
        

    </View>
    
    </DismissKeyboard>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#4F99FC'
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
    containerForm:{
        flex:1,
        backgroundColor:'#4F99FC',
        paddingStart: '5%',
        paddingEnd: '5%',
    },
    containerLogo:{
        flex:0.2,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor:'#4F99FC'
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
        alignItems:'center'
    },
    buttonText:{
        fontSize: 18,
        color: 'black',
        fontWeight: 'bold',
        
    },
    title:{
        marginTop: 28,
        marginBottom: 12,
        fontSize: 16,
        color: 'white'
    }
})