import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

import Logo from '../../../assets/logo.png';
import topo from '../../../mocks/topo';

export default function Topo() {
  return (
    <View style={estilos.topo}>
      <Image source={Logo} style={estilos.imagem} />
      <Text style={estilos.boasVindas}>{topo.boasVindas}</Text>
      <Text style={estilos.legenda}>{topo.legenda}</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  topo: {
    backgroundColor: '#f6f6f6',
    padding: 16,
  },
  imagem: {
    width: 70,
    height: 28,
  },
  boasVindas: {
    marginTop: 24,
    fontSize: 26,
    lineHeight: 42,
    fontWeight: 'bold',
  },
  legenda: {
    fontSize: 16,
    lineHeight: 26,
  },
});
