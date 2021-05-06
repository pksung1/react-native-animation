/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {View, Text} from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SafeAreaView } from 'react-native-safe-area-context';

import * as Screens from './src/screens'


const Drawer = createDrawerNavigator();

const HomeScreen = () => {
  return (<SafeAreaView>
      <View>
        <Text>HomeScreen</Text>
      </View>
    </SafeAreaView>)
}

const App: () => Node = () => {

  return (
    <NavigationContainer >
      <Drawer.Navigator initialRouteName="Home" >
        <Drawer.Screen name="Home" component={HomeScreen}  />
        <Drawer.Screen name="OpacityScreen" component={Screens.OpacityScreen}/>
        <Drawer.Screen name="TranslateScreen" component={Screens.TranslateScreen}/>
        <Drawer.Screen name="SizeScreen" component={Screens.SizeScreen}/>
        <Drawer.Screen name="EasingScreen" component={Screens.EasingScreen}/>
        <Drawer.Screen name="SharedElementExample" component={Screens.SharedElementExample} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};


export default App;
