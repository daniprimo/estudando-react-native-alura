import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../telas/Home';
import MelhoresProdutores from '../telas/MelhoresProdutores';

import ProdutorRotas from './ProdutorRotas';
import MelhoresProdutoresRotasa from './MelhoresProdutores';

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={ProdutorRotas} />
        <Tab.Screen name="Melhores Produtores" component={MelhoresProdutores} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
