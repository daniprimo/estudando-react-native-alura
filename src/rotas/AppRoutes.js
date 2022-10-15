import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import MelhoresProdutores from '../telas/MelhoresProdutores';

import ProdutorRotas from './ProdutorRotas';
import Coracao from '../assets/coracao.svg';
import Home from '../assets/home.svg';

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarIcon: ({color}) => {
            // let Icon = Home;
            // if (route.name === 'Melhores Produtores') {
            //   Icon = Coracao;
            // }
            // return <Icon />;
          },
          tabBarActiveTintColor: '#2a9f85',
          tabBarInactiveTintColor: '#c7c7c7',
          tabBarBackgroundColor: '#0000',
        })}>
        <Tab.Screen name="Home" component={ProdutorRotas} />
        <Tab.Screen name="Melhores Produtores" component={MelhoresProdutores} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
