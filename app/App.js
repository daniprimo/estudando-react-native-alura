import React from 'react';
import {StatusBar} from 'react-native';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import Cesta from './src/ComponentesDeTela/Cesta/index';
import mock from './src/mocks/cesta';

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar style="auto" />
      <Cesta {...mock} />
    </SafeAreaView>
  );
}
