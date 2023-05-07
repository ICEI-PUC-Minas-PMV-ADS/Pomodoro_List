import React from 'react';

import { SafeAreaView, StatusBar, Text, StyleSheet, View, TextInput, TouchableOpacity, Image, Keyboard, TouchableWithoutFeedback } from 'react-native';

import { useNavigation } from '@react-navigation/native';


const DismissKeyboard = ({ children}) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>

        {children}
    </TouchableWithoutFeedback>
);

export default function Entrar (){

    const navigation = useNavigation();
    

    return (
        <DismissKeyboard>
        <View style={styles.container}>

            <View style={styles.containerLogo}>
            <Image
            source={require('../../assets/imglogo.png')}
            style={{width: '100%'}}
            resizeMode= 'center'
            />
            </View>

            <View style={styles.containerForm}>
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

            <Text style={styles.senhaText}
            onPress={() => navigation.navigate('TrocaSenha')}
            >
                Esqueceu a senha?
                
            </Text>
            

            

           </View> 
           
           


           <View>
            <TouchableOpacity style={styles.buttonV}
            onPress={() => navigation.navigate('Welcome')}
            >
            <Text style={styles.buttonText}>Voltar</Text>
            
            </TouchableOpacity>
            </View>
            <View>
            <TouchableOpacity style={styles.button}
            onPress={() => navigation.navigate('Tarefa')}
            >
            <Text style={styles.buttonText}>Continuar</Text>
            
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
        containerLogo:{
        flex: 0.2,
        justifyContent: 'center',
        alignItems:'center',
    },
    containerForm:{
        flex:1,
        backgroundColor:'#4F99FC',
        paddingStart: '15%',
        paddingEnd: '15%',
    },
    senhaText:{
        marginTop: 28,
        marginBottom: 12,
        fontSize: 14,
        alignSelf:'center',
        marginLeft: 150,
        marginTop: 15,
        color: 'white'
    },
    title:{
        marginTop: 28,
        marginBottom: 1,
        fontSize: 16,
        color: 'white',
        
    },
    input:{
        borderColor: '#e8e8e8',
        borderWidth: 3,
        borderRadius:10,
        height: 50,
        marginBottom: 4,
        paddingHorizontal: 10,
        fontSize: 16
    },
    button:{
        position:'relative',
        backgroundColor: 'white',
        borderRadius: 50,
        paddingVertical:8,
        width: '40%',
        alignSelf: 'center',
        bottom: 73,
        justifyContent: 'center',
        alignItems:'center',
        left: 105,
    
    },
    buttonV:{
        position:'absolute',
        backgroundColor: 'white',
        borderRadius: 50,
        paddingVertical:8,
        width: '40%',
        alignSelf:'center',   
        justifyContent: 'center',
        alignItems:'center',
        right: 215,
        bottom: 30, 
    },
    
    buttonText:{
        fontSize: 18,
        color: 'black',
        fontWeight: 'bold',
        backgroundColor: 'white',
        
    },
})