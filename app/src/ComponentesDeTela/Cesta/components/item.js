import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';

import Texto from '../../../components/Texto';
import {Image} from 'react-native';

export default function item({item: {nome, imagem}}) {
  return (
    <View style={estilos.item}>
      <Image source={imagem} style={estilos.imagem} />
      <Texto style={estilos.nome}>{nome}</Texto>
    </View>
  );
}

const estilos = StyleSheet.create({
  item: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ececec',
    paddingVertical: 16,
    marginHorizontal: 16,
    alignItems: 'center',
  },
  imagem: {
    width: 46,
    height: 46,
  },
  nome: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 11,
    color: '#464646',
  },
});

/* Utilizando o Map para renderizar os itens mockados, porem não muito sustentavel
para o usurio pois exige um grande nivel de processamento devido operação ser semlhantes o 
ctrl c contr v...

export default function itens({titulo, lista}) {
  return (
    <>
      <Texto style={estilos.titulo}>{titulo}</Texto>
      {lista.map(({nome, imagem}) => {
        return (
          <View key={nome} style={estilos.item}>
            <Image source={imagem} style={estilos.imagem} />
            <Texto style={estilos.nome}>{nome}</Texto>
          </View>
        );
      })}
    </>
  );
}
*/
