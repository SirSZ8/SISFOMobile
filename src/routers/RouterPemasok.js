import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ScreenPemasokList from "../screens/pemasok/ScreenPemasokList";
import ScreenPemasokCreate from "../screens/pemasok/ScreenPemasokCrete";

const Stack = createNativeStackNavigator();

export const RouterPemasokAuthenticated = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ScreenPemasokList" component={ScreenPemasokList} />
      <Stack.Screen
        name="ScreenPemasokCreate"
        component={ScreenPemasokCreate}
      />
    </Stack.Navigator>
  );
};
