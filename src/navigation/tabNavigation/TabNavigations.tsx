import { Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BOTTOM_STACK } from "../../constant/navigation/screen";
import { RootStackParamlist } from "../../constant/type";

const TabNavigations = () => {
  const Tab = createBottomTabNavigator<RootStackParamlist>();
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Tab.Navigator
        initialRouteName="home"
        screenOptions={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: {
            position: "absolute",
            bottom: 25,
            paddingHorizontal: 23,
            left: 20,
            right: 20,
            elevation: 0,
            alignSelf: "center",
            marginLeft: 35,
            borderTopWidth: 2,
            borderColor: "black",
            borderWidth: 2,
            width: 277,
            borderRadius: 42,
            height: 62,
          },
        }}
      >
        {BOTTOM_STACK.map((item, index) => (
          <Tab.Screen
            key={index}
            name={item.name as keyof RootStackParamlist}
            component={item.component}
            options={{
              tabBarIcon: () => (
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <item.icon width={24} height={24} />
                  <Text>{item.name}</Text>
                </View>
              ),
            }}
          />
        ))}
      </Tab.Navigator>
    </View>
  );
};

export default TabNavigations;
