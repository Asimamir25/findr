import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigations from "../tabNavigation/TabNavigations";
import React, { useState, useEffect } from "react";
import auth from "@react-native-firebase/auth";
import { RootStackParamlist } from "../../constant/type";
import { StatusBar } from "expo-status-bar";
import { AUTH_STACK } from "../../constant/navigation/screen";

const Stack = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const Stack = createStackNavigator<RootStackParamlist>();

  function onAuthStateChanged(user: any) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing) return null;
  return (
    <>
      <StatusBar backgroundColor="white" />
      <NavigationContainer independent={true}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          {!!user ? (
            <Stack.Group>
              <Stack.Screen name="tabNavigations" component={TabNavigations} />
            </Stack.Group>
          ) : (
            <Stack.Group>
              {AUTH_STACK.map((item, index) => (
                <Stack.Screen
                  key={index}
                  name={item.screen as keyof RootStackParamlist}
                  component={item.component}
                />
              ))}
            </Stack.Group>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Stack;

const styles = StyleSheet.create({});
