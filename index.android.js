import React from 'react'
import {
  AppRegistry
} from 'react-native'

import { Provider } from 'react-redux'
import configureStore from './src/configureStore.js'
import Header from './src/redux/containers/Header';

const store = configureStore()

const reduxTest = () => (
  <Provider store={store}>
    <Header />
  </Provider>
)

AppRegistry.registerComponent('reduxTest', () => reduxTest);
