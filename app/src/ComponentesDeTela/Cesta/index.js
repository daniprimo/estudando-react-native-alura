import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

import Topo from './components/topo';
import Detalhes from './components/detalhes';

export default function Cesta({topo, detalhes}) {
  return (
    <>
      <Topo {...topo} />
      <View style={estilos.cesta}>
        <Detalhes {...detalhes} />
      </View>
    </>
  );
}

const estilos = StyleSheet.create({
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});
