import React from 'react';
import {Image, StyleSheet, View, TouchableOpacity} from 'react-native';
import Texto from '../../../components/Texto';
import Botao from '../../../components/Botao';

export default function Detalhes({
  nome,
  logoFazenda,
  nomeFazenda,
  descricao,
  preco,
  botao,
}) {
  return (
    <>
      <Texto style={estilos.nome}>{nome}</Texto>
      <View style={estilos.viewFazenda}>
        <Image source={logoFazenda} style={estilos.imagemFazenda} />
        <Texto style={estilos.nomeFazenda}>{nomeFazenda}</Texto>
      </View>
      <Texto style={estilos.descricao}>{descricao}</Texto>
      <Texto style={estilos.preco}>{preco}</Texto>

      <Botao style={estilos.botao} onPress={() => {}} texto={botao} />
    </>
  );
}

const estilos = StyleSheet.create({
  nome: {
    color: '#464646',
    fontSize: 26,
    lineHeight: 42, //tamanho da linha
    fontWeight: 'bold', //texto negrito
    fontFamily: 'Montserrat-Bold',
  },
  viewFazenda: {
    flexDirection: 'row',
    paddingVertical: 12,
    marginLeft: 12,
  },
  imagemFazenda: {
    width: 32,
    height: 32,
  },
  nomeFazenda: {
    fontSize: 16,
    lineHeight: 26,
    fontFamily: 'Montserrat-Regular',
  },
  descricao: {
    color: '#a3a3a3',
    fontSize: 16,
    lineHeight: 26,
  },
  preco: {
    color: '#2a9f85',
    fontWeight: 'bold',
    fontSize: 26,
    lineHeight: 42,
    marginTop: 8,
  },
  botao: {
    marginTop: 16,
    backgroundColor: '#2a9f85',
    paddingVertical: 16,
    borderRadius: 6,
  },
  textoBotao: {
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 16,
    lineHeight: 26,
    fontWeight: 'bold',
  },
});
