import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { StackRoutes } from './src/stack.routes';
import { GpsDataProvider } from './src/hooks/gpsDataContext';


export default function App() {
  return (
    <NavigationContainer>
      <GpsDataProvider>
        <StackRoutes />
      </GpsDataProvider>
    </NavigationContainer>
  );
}
