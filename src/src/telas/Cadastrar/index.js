import React from 'react';

import { SafeAreaView, StatusBar, Text, StyleSheet, View, TextInput, TouchableOpacity, Image, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView } from 'react-native';

import { useNavigation } from '@react-navigation/native';

<<<<<<< Updated upstream
export default function Cadastrar() {
=======

const DismissKeyboard = ({children}) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>

        {children}
    </TouchableWithoutFeedback>
);

export default function Cadastrar (){
>>>>>>> Stashed changes

    const navigation = useNavigation();

    return (
        <DismissKeyboard>
        <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
        >
        





        <View style={styles.container}>
        

            <View style={styles.containerLogo}>
<<<<<<< Updated upstream
                <Image
                    source={require('../../assets/logo.png')}
                    style={{ width: '100%' }}
                    resizeMode='contain'
                />
=======
            <Image
            source={require('../../assets/imglogo.png')}
            style={{width: '100%'}}
            resizeMode='center'
            />
>>>>>>> Stashed changes
            </View>

            <View style={styles.containerForm}>
<<<<<<< Updated upstream
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
=======

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
>>>>>>> Stashed changes

                <Text style={styles.title}>E-mail</Text>
                <TextInput
                    placeholder="Digite seu e-mail"
                    style={styles.input}
                />

<<<<<<< Updated upstream
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
=======


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
           
>>>>>>> Stashed changes

        
        </View>
        </KeyboardAvoidingView>
        </DismissKeyboard>
        
        
    );
}

const styles = StyleSheet.create({
<<<<<<< Updated upstream
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'

    },
    containerLogo: {
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerForm: {
        flex: 1,
        backgroundColor: '#FFFFFF',
=======
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
>>>>>>> Stashed changes
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%',
    },
<<<<<<< Updated upstream
    title: {
        marginTop: 28,
=======
    title:{
        marginTop: 15,
>>>>>>> Stashed changes
        marginBottom: 12,
        fontSize: 15,
        fontWeight: "bold",
        
        
        
        
        
        
    },
    input: {
        borderColor: '#e8e8e8',
<<<<<<< Updated upstream
        borderWidth: 1,
        borderRadius: 5,
=======
        borderWidth: 3,
        borderRadius:10,
>>>>>>> Stashed changes
        height: 40,
        marginBottom: 4,
        paddingHorizontal: 10,
        fontSize: 16,
        
    },
<<<<<<< Updated upstream
    button: {
        backgroundColor: '#666666',
        borderRadius: 4,
=======
    button:{
        backgroundColor: 'white',
        borderRadius: 10,
>>>>>>> Stashed changes
        paddingVertical: 8,
        width: '40%',
        justifyContent: 'center',
<<<<<<< Updated upstream
        alignItems: 'center',
        marginTop: 14
=======
        alignItems:'center',
        marginLeft: 200,
        marginTop: 20,
        position:'relative'
        
>>>>>>> Stashed changes
    },
    buttonText: {
        fontSize: 18,
        color: 'black',
        fontWeight: 'bold',
    }
})