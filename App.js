import { StatusBar } from 'expo-status-bar';
import {  SafeAreaView,StyleSheet, Text, View } from 'react-native';
import Navigation from './src/config/navigation'

export default function App() {
  return (
    <SafeAreaView style={styels.droidSafeArea}>
   <Navigation/> 
      </SafeAreaView>
  );
}
const styels = StyleSheet.create({
  droidSafeArea: {
      flex: 1,
      // paddingTop: Platform.OS === 'android' ? 25 : 0
  },
});


