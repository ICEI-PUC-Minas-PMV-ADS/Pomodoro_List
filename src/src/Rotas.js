import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome from './telas/Welcome';
import Entrar from './telas/Entrar';
import Cadastrar from './telas/Cadastrar';
import ConfirmCadastro from './telas/ConfirmCadastro';
import Tarefa from './telas/Tarefa';
import TrocaSenha from './telas/TrocaSenha';
import NovaSenha from './telas/NovaSenha';

const Stack = createNativeStackNavigator();

export default function Rotas() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
            name="Welcome"
            component={Welcome}
            options={{headerShown: false}}
            />

        <Stack.Screen 
            name="Entrar"
            component={Entrar}
            options={{headerShown: false}}
            />

        <Stack.Screen 
            name="Cadastrar"
            component={Cadastrar}
            options={{headerShown: false}}
            />

        <Stack.Screen 
            name="ConfirmCadastro"
            component={ConfirmCadastro}
            options={{headerShown: false}}
            />

        <Stack.Screen 
            name="Tarefa"
            component={Tarefa}
            options={{headerShown: false}}
            />

        <Stack.Screen 
            name="TrocaSenha"
            component={TrocaSenha}
            options={{headerShown: false}}
            />

        <Stack.Screen 
            name="NovaSenha"
            component={NovaSenha}
            options={{headerShown: false}}
            />

      </Stack.Navigator>
    );
}