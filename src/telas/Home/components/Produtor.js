import {Image, StyleSheet, Text, View} from 'react-native';
import React, {Component} from 'react';

export default function Produtor({nome, imagem, distancia, estrelas}) {
  return (
    <View style={estilos.cartao}>
      <Image source={imagem} style={estilos.imagem} accessibilityLabel={nome} />
      <View style={estilos.informacoes}>
        <Text style={estilos.nomenome}>{nome}</Text>
        <Text style={estilos.distancia}>{distancia}</Text>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  cartao: {
    backgroundColor: '#f6f6f6',
    marginVertical: 16,
    marginHorizontal: 16,
    borderRadius: 6,
    flexDirection: 'row',
    elevation: 6,

    //ios
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
  },
  imagem: {
    width: 48,
    height: 48,
    borderRadius: 6,
    marginVertical: 16,
    marginLeft: 16,
  },
  informacoes: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 8,
    marginVertical: 16,
    marginRight: 16,
  },
  nome: {
    fontSize: 14,
    lineHeight: 22,
    fontWeight: 'bold',
  },
  distancia: {
    fontSize: 12,
    lineHeight: 19,
  },
});
