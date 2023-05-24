import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import UserProvider from './src/contexts/UserContext';
import Route from './src/navigation/Route';
import Main from './src/navigation/Main';

const App = () => {

  return (
<UserProvider>
      <NavigationContainer>
        <Route />
      </NavigationContainer>
    </UserProvider>

  );

}

export default App;