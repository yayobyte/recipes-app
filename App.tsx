import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { Fonts } from './src/types/general';
import AppLoading from 'expo-app-loading';
import {MealsNavigator} from "./src/navigation";

const fonts = {
  [Fonts.openSans]: require('./assets/fonts/OpenSans-Regular.ttf'),
  [Fonts.openSansBold]: require('./assets/fonts/OpenSans-Bold.ttf'),
}

export default function App() {
  const [fontsLoaded] = useFonts(fonts)

  if(!fontsLoaded) {
    return (
        <AppLoading />
    )
  }

  return (
      <>
        <MealsNavigator />
        <StatusBar />
      </>
);
}

