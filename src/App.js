import React from 'react';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import Rotas from './src/Rotas';

export default function App() {
  return (
  <NavigationContainer>
    <StatusBar backgroundColor="#FFFFFF" barStyle="light-content" />
    <Rotas />
  </NavigationContainer>
  );
  }
