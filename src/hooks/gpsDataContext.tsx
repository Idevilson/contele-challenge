import React, { 
    createContext, 
    useState, 
    ReactNode, 
    useContext
} from "react";


interface GpsDataProviderProps {
    children: ReactNode;
}

interface pointProps {
    id: string;
    latitude: number;
    longitude: number;
    speed: number;
    time: string;
}

interface GpsDataContextData{
    point: pointProps[];
}

const GpsContextData = createContext<GpsDataContextData>({} as GpsDataContextData)

function GpsDataProvider({ children }: GpsDataProviderProps){
    const [point, setProint] = useState<pointProps[]>([]);

    return (
        <GpsContextData.Provider value={{
            point,
        }}>
            { children }
        </GpsContextData.Provider>
    )
}

function useGpsData(): GpsDataContextData {
    return useContext(GpsContextData);
}

export { GpsDataProvider, useGpsData };