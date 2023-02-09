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

import { useNavigation }  from '@react-navigation/native';
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

    const navigation = useNavigation();
   
    console.log("Home renderizou");

   
    return(
        <Container>
            <Header>
                <HeaderButton onPress={() => navigation.navigate('Home')}>
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
                                packageStatus={"status"}
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