import React from 'react';
import {Image, StyleSheet, Text, Dimensions} from 'react-native';

import Texto from '../../../components/Texto';
import topo from '../../../../assets/topo.png';

const width = Dimensions.get('screen').width;

export default function Topo({titulo}) {
  return (
    <>
      <Image source={topo} style={estilos.topo} />
      <Texto style={estilos.titulos}>{titulo}</Texto>
    </>
  );
}

const estilos = StyleSheet.create({
  topo: {
    width: '100%', //largura da tela
    height: (578 / 768) * width, //altura
  },
  titulos: {
    width: '100%', //largura da tela
    position: 'absolute',
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 26,
    color: 'white',
    fontWeight: 'bold',
    padding: 16,
  },
});
