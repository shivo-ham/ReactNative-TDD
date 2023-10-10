import React from "react";
import {
    createBottomTabNavigator,
    BottomTabBarProps,
} from "@react-navigation/bottom-tabs";
import TabBar from "./tabBar";
import {
    Home,
    Cart,
    Menu,
    Account,
} from "../route";
import { useSafeArea } from "react-native-safe-area-context";
import { View } from "react-native";
import { Colors, Constants, ImageView } from "../../config/appConstants";

export const BottomMenu = () => {
    const Tab = createBottomTabNavigator();
    return (
        <View style={{ flex: 1, position: "relative" }}>
            <Tab.Navigator screenOptions={{
                headerShown: false,
                animation: Constants.animation_fade,
            }} tabBar={(props: BottomTabBarProps) => <TabBar {...props} />}>
                <Tab.Screen initialParams={{ icon: ImageView.tab1 }} name="Home" component={Home} />
                <Tab.Screen initialParams={{ icon: ImageView.tab2 }} name="Cart" component={Cart} />
                <Tab.Screen initialParams={{ icon: ImageView.tab3 }} name="Menu" component={Menu} />
                <Tab.Screen initialParams={{ icon: ImageView.tab4 }} name="Account" component={Account} />
            </Tab.Navigator>
            {useSafeArea().bottom > 0 && (
                <View
                    style={{
                        height: useSafeArea().bottom - 5,
                        backgroundColor: Colors.primary
                    }}
                />
            )}
        </View>
    );
};