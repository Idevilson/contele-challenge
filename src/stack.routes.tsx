import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

import { Home } from "./screens/home";
import { Status } from "./screens/status";

export function StackRoutes() {
    
    
    return(
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Home" component={Home} />            
            <Stack.Screen name="Status" component={Status} />
        </Stack.Navigator>
    )
}