import React from 'react';

import { SafeAreaView, View, StatusBar, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';


export default function Welcome (){
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
        <TouchableOpacity style={styles.button}
        onPress={() => navigation.navigate('Entrar')}
        >
        <Text style={styles.buttonText}> Entrar</Text>
        </TouchableOpacity>    
     
        </View>    

        <View style={styles.botao}> 
        <TouchableOpacity style={styles.buttonC}
        onPress={() => navigation.navigate('Cadastrar')}
        >
        <Text style={styles.buttonText}> Cadastre-se</Text>
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
        flex: 2,
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
        position:'absolute',
        backgroundColor: 'white',
        borderRadius: 20,
        paddingVertical:20,
        width: '50%',
        alignSelf:'center',
        bottom:'50%',
        justifyContent: 'center',
        alignItems:'center',
    },
    buttonText:{
        fontSize: 18,
        color: 'black',
        fontWeight: 'bold',
    },
    botao:{
        flex: 1,
        backgroundColor:'#4F99FC',
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    buttonC:{
        position:'relative',
        backgroundColor: 'white',
        borderRadius: 20,
        paddingVertical:20,
        width: '50%',
        alignSelf:'center',
        bottom:'50%',
        bottom: 40,
        alignItems:'center',
        
    }
})