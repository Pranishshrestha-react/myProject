import React from 'react';
import { AppLoading } from 'expo-app-loading';
import { Container, Text } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import AppNavigator from './navigations';

export default function App() {
  
  return (
    <Container>
      <AppNavigator/>
    </Container>
  );

}



