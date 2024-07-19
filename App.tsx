import React, { useEffect, useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Home from './src/modules/home';
import Login from './src/modules/login';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';
import {legacy_createStore as createStore, combineReducers} from 'redux';
import {ActionSheetProvider} from '@expo/react-native-action-sheet';
import {store} from './store';
import Auth from './src/modules/login';
const Stack = createStackNavigator();

function App(): React.JSX.Element {
  return (
    //create seperate file for navigation
    <Provider store={store}>
      <NavigationContainer>
        <ActionSheetProvider>
          <Stack.Navigator >
                <Stack.Screen
                name="Auth"
                component={Auth}
                options={{gestureEnabled: false}}
                />
                <Stack.Screen
                name="Home"
                component={Home}
                options={{gestureEnabled: false, headerLeft: () => null}}
                />
          </Stack.Navigator>
        </ActionSheetProvider>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
