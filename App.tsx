import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { Fonts } from './src/types/general';
import {useState} from "react";
import AppLoading from 'expo-app-loading';

const fetchFonts = () => {
  return Font.loadAsync({
    [Fonts.openSans]: require('./assets/fonts/OpenSans-Regular.ttf'),
    [Fonts.openSansBold]: require('./assets/fonts/OpenSans-Bold.ttf'),
  })
}

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if(!fontsLoaded) {
    return (
        <AppLoading
          startAsync={fetchFonts}
          onError={(err) => console.error('Error loading fonts: ', err)}
          onFinish={() => setFontsLoaded(true)}
        />
    )
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
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
