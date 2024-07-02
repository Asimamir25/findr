import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import Navigation from "./src/navigation/Navigation";
import { store } from "./src/store/store";
import { Provider } from "react-redux";
import * as SplashScreen from "expo-splash-screen";
import { FONTS, FONT_FAMILIES } from "./src/constant/font";
export default function App() {
  SplashScreen.preventAutoHideAsync();
  let [fontLoaded] = useFonts({
    FG_BOLD: FONTS.FG_BOLD,
    FG_SBOLD: FONTS.FG_SBOLD,
    FG_REG: FONTS.FG_REG,
    FG_MED: FONTS.FG_MED,
    INTER_MED: FONTS.INTER_MED,
    INRTER_REG: FONTS.INTER_REG,
  });
  if (!fontLoaded) {
    return <AppLoading />;
  }
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
