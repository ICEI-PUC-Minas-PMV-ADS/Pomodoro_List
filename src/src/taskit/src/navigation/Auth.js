import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../pages/Login';
import Register from '../pages/Register';
import Home from '../pages/Home';
import TrocaSenha from '../pages/TrocaSenha';
import Timer from '../pages/Timer';
import Tarefa from '../pages/Tarefa';

const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          header: () => null,
        }}
      />

      <Stack.Screen
        name="TrocaSenha"
        component={TrocaSenha}
        options={{
          header: () => null,
        }}
      />

      <Stack.Screen
        name="Timer"
        component={Timer}
        options={{
          header: () => null,
        }}
      />

<Stack.Screen
        name="Tarefa"
        component={Tarefa}
        options={{
          header: () => null,
        }}
      />

    </Stack.Navigator>
  );
};

export default Main;
