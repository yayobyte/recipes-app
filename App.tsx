import { StatusBar } from 'expo-status-bar';
import * as Font from 'expo-font';
import { Fonts } from './src/types/general';
import {useState} from "react";
import AppLoading from 'expo-app-loading';
import {MealsNavigator} from "./src/navigation";

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
      <>
        <MealsNavigator />
        <StatusBar />
      </>
);
}

