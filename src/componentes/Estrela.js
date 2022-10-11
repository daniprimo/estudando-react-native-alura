import React from 'react';
import {TouchableOpacity, Image, StyleSheet} from 'react-native';
import estrela from '../assets/estrela.png';
import EstrelaCinza from '../assets/estrelaCinza.png';

export default function Estrela({
  onPress,
  desabilitada = true,
  preenchida,
  grande = false,
}) {
  const estilos = estillosFuncao(grande);
  const getImagem = () => {
    if (preenchida) {
      return estrela;
    }
    return EstrelaCinza;
  };

  return (
    <TouchableOpacity onPress={onPress} disabled={desabilitada}>
      <Image source={getImagem()} style={estilos.estrela} />
    </TouchableOpacity>
  );
}

const estillosFuncao = grande =>
  StyleSheet.create({
    estrela: {
      width: grande ? 36 : 12,
      height: grande ? 36 : 12,
      marginRight: 2,
    },
  });
