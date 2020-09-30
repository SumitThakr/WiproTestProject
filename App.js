import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { Colors } from './src/constants';
//import the Home component that will fetch the data.
import Home from './src/screen/Home';
//import provider to connect component to redux store.
import { Provider } from 'react-redux';
//import your store to connect your component.
import { Store } from './src/redux';
const App = () => {
  return (
    <Provider store={Store}>
      <SafeAreaView style={{flex:1}}>       
          <Home />       
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.white,
  },
});

export default App;
