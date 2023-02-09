import React, {
    createContext,
    useState,
    ReactNode,
    useContext,
    useEffect,
    SetStateAction,
    Dispatch
} from "react";

import { database } from "../database";

import format from "date-fns/format";
import ptBR from "date-fns/esm/locale/pt-BR/index.js";
import 'react-native-get-random-values'
import { nanoid } from "nanoid";

import Geolocation from '@react-native-community/geolocation';
import { Alert } from "react-native";

interface GpsDataProviderProps {
    children: ReactNode;
}

interface pointProps {
    id: string;
    latitude: number | null ;
    longitude: number;
    speed: number | null;
    time: string;
}

interface GpsDataContextData{
    points: pointProps[];
    watchPosition: () => void;
    clearWatch: () => void;
    setInterval: Dispatch<SetStateAction<number>>
}

const GpsContextData = createContext<GpsDataContextData>({} as GpsDataContextData);


function GpsDataProvider({ children }: GpsDataProviderProps){
    const [interval, setInterval] = useState<number>(1000);

    let subscriptionId = 0;
    const points: pointProps[] = [];

    const watchPosition = () => {
        try {
          const watchID = Geolocation.watchPosition(
            (position) => {
              console.log("Função");

              const date = new Date(position.timestamp);
              const hours = date.getHours();
              const minutes = date.getMinutes();
              const dateFormatted = format(position.timestamp, 'yyyy-MM-dd', { locale: ptBR });

              const point = {
                id: nanoid(6),
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                speed: position.coords.speed,
                time: String(dateFormatted) + ", " + String(hours) + String(minutes)
              }

              points.push(point);
              
              console.log(points);
            },
            (error) => Alert.alert('WatchPosition Error', JSON.stringify(error)),
            { interval: interval, enableHighAccuracy: true }
          );

          subscriptionId = watchID;
        } catch (error) {
          Alert.alert('WatchPosition Error', JSON.stringify(error));
        };
      };

      const clearWatch = () => {
        subscriptionId !== 0 && Geolocation.clearWatch(subscriptionId);
        subscriptionId = 0;
      };

    useEffect(() => {
        async function loadData() {
            const pointCollection = database.get('points');
            const points = await pointCollection.query().fetch();
            console.log(points);
        };

        loadData();
    }, []);


    return (
        <GpsContextData.Provider value={{
            points,
            watchPosition,
            clearWatch,
            setInterval
        }}>
            { children }
        </GpsContextData.Provider>
    )
}

function useGpsData(): GpsDataContextData {
    return useContext(GpsContextData);
}

export { GpsDataProvider, useGpsData };