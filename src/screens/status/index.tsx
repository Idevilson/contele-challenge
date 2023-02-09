import React, { useEffect, useState } from "react";



import { 
    Container, 
    Header,
    HeaderButton,
    HeaderButtonText,
    PackageContainer,
    ScrenName,
    PackageSeparator
} from "./styles";

import { useGpsData } from "../../hooks/gpsDataContext";
import { Package } from "../../components/package";
import { useRoute } from "@react-navigation/native";

interface pointProps {
    id: string;
    latitude: number | null ;
    longitude: number;
    speed: number | null;
    time: string;
}


export function Status(){
    const [isServiceActive, SetIsServiceActive] = useState(false);

    const route = useRoute();
    const points = route.params as pointProps[];
   
    console.log("Home renderizou");

    useEffect(() => {
        if(isServiceActive){
            
        }
    }, []);

   
    return(
        <Container>
            <Header>
                <HeaderButton>
                    <HeaderButtonText>
                        Voltar
                    </HeaderButtonText>
                </HeaderButton>

                <ScrenName>
                    Status
                </ScrenName>
            </Header>

            <PackageContainer>
                    {
                        points.map(point =>  (
                            <>
                            <Package 
                                packageIdText={point.id}
                                packageStatus={"Pendente Sincronizar"}
                                packageTime={"11:32"}
                            />
                            
                            <PackageSeparator />
                            </>
                        ))
                    }       
            </PackageContainer>

        </Container>
    )
}