import React, { useState } from 'react';
import {
  Alert, Image, ScrollView, Text, TextInput, TouchableOpacity, View
} from 'react-native';
import estilos from './estilos';

import { buscaUsuarios } from '../../servicos/requisicoes/usuarios';

export default function Principal({ navigation }) {
  const [nomeUsuario, setNomeUsuario] = useState('');
  const [usuario, setUsuario] = useState({});

  async function busca() {
    const resultado = await buscaUsuarios(nomeUsuario);
    console.log(resultado)

    setNomeUsuario(''); 
    if (resultado) {
      setUsuario(resultado);
    } else {
      Alert.alert('Usuario não cadastrado');
      setUsuario([])
    }
    // api
    //   .get('/users?login=andreocunha')
    //   .then(response => {
    //     console.log(response.data);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
  }

  return (
    <ScrollView>
      <View style={estilos.container}>
        {
          usuario?.login &&
          <>
            <View style={estilos.fundo} />
            <View style={estilos.imagemArea}>
              <Image
                source={{ uri: usuario.avatar_url }} style={estilos.imagem} />
            </View>
            <Text style={estilos.textoNome}>{usuario.name}</Text>
            <Text style={estilos.textoEmail}>{usuario.email}</Text>
            <View style={estilos.seguidoresArea}>
              <View style={estilos.seguidores}>
                <Text style={estilos.seguidoresNumero}>{usuario.followers}</Text>
                <Text style={estilos.seguidoresTexto}>Seguidores</Text>
              </View>
              <View style={estilos.seguidores}>
                <Text style={estilos.seguidoresNumero}>{usuario.following}</Text>
                <Text style={estilos.seguidoresTexto}>Seguindo</Text>
              </View>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Repositorios', {id: usuario.id})}>
              <Text style={estilos.repositorios}>Ver os repositórios</Text>
            </TouchableOpacity>
          </>
        }
        <TextInput
          placeholder="Busque por um usuário"
          autoCapitalize="none"
          style={estilos.entrada}
          value={nomeUsuario}
          onChangeText={setNomeUsuario}
        />

        <TouchableOpacity style={estilos.botao} onPress={busca}>
          <Text style={estilos.textoBotao}>Buscar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}