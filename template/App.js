/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import { WebView } from 'react-native-webview';

import React from 'react';


const App = () => {
  return (
    <WebView source={{ uri: 'https://www.google.com' }} />
  );
};

export default App;