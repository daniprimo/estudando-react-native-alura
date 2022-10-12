import React, {useReducer, useMemo} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Estrelas from '../../../componentes/Estrelas';

const distanciaMetros = distancia => {
  return `${distancia}m`;
};

export default function Produtor({nome, imagem, distancia, estrelas}) {
  //const [selecionado, setSelecionado] = useState(false);
  const [selecionado, inverterSelecionado] = useReducer(
    selecionado => !selecionado,
    false,
  );

  const distanciaTexto = useMemo(() => distanciaMetros(distancia), [distancia]);

  return (
    <TouchableOpacity style={estilos.cartao} onPress={inverterSelecionado}>
      <Image source={imagem} style={estilos.imagem} accessibilityLabel={nome} />
      <View style={estilos.informacoes}>
        <View>
          <Text style={estilos.nomenome}>{nome}</Text>
          <Estrelas
            quantidade={estrelas}
            editavel={selecionado}
            grande={selecionado}
          />
        </View>
        <Text style={estilos.distancia}>{distanciaTexto}</Text>
      </View>
    </TouchableOpacity>
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
