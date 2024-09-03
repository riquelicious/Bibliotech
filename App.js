import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SplashAnimation from './modules/splash_menu';
//import {Header, Subtitle, Body, Caption} from './modules/text_module'

export default function App() {
  return (
    <View style={styles.container}>
      <SplashAnimation/>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
