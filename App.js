import React from 'react';
import {SafeAreaView, StatusBar, Text} from 'react-native';
import 'react-native-gesture-handler';
import Routes from './src/rotas/AppRoutes';

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar />
      <Routes />
    </SafeAreaView>
  );
}
