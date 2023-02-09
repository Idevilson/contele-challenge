import React, { useEffect, useState } from 'react';
import { Alert, BackHandler } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { StackRoutes } from './src/stack.routes';
import { GpsDataProvider } from './src/hooks/gpsDataContext';

import { 
  requestForegroundPermissionsAsync, 
  getForegroundPermissionsAsync
} from 'expo-location';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  const [isGranted, setIsGranted] = useState(false);

 (async() =>{
    const { granted } = await getForegroundPermissionsAsync();

    if(granted){
      setIsGranted(granted);
    }else {
      const { granted } = await requestForegroundPermissionsAsync();
      if(granted){
        setIsGranted(granted)
      }
    }
  })()


  if(isGranted) {
    return (
      <NavigationContainer>
          <SafeAreaView style={{ flex: 1}}>
            <GpsDataProvider>
              <StackRoutes />
            </GpsDataProvider>
          </SafeAreaView>
      </NavigationContainer>
    )
  }
}
