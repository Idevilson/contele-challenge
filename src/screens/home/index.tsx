import React, { useEffect, useState } from "react";
import { Switch } from "react-native";

import HomeIcon from "../../../assets/HomeIcon.svg";

import { useNavigation }  from '@react-navigation/native';
import { useNetInfo } from '@react-native-community/netinfo';
import { synchronize } from '@nozbe/watermelondb/sync';
import { database } from '../../database';
import { api } from '../../services/api';

import { 
    Container, 
    Header,
    HeaderButton,
    HeaderButtonText,
    WellcomeText,
    TrackingStatusContainer,
    TrackingStatusContainerLeftArea,
    TrackingStatusContainerRigthArea,
    RightAreaTitle,
    OnlineIndicatior,
    OfflineIndicatior,
    StatusOfServiceContainer,
    StatusOfServiceContainerLeftArea,
    StatusOfServiceContainerRightArea,
    StatusOfServiceTitle,
    StatusOfServiceText,
    IntervalComunicationContainer,
    IntervalComunicationText,
    ButtonsContainer
} from "./styles";

import { ButtonGroup } from "../../components/IntervalButton";
import { useGpsData } from "../../hooks/gpsDataContext";

import { PointItem as ModelPointItem } from '../../database/model/PointItem';

interface pointProps {
    id: string;
    latitude: number | null ;
    longitude: number;
    speed: number | null;
    time: string;
}

const buttons = [
    {
        intervalNumber: 10000,
        label: "10s"
    },
    {
        intervalNumber: 5000,
        label: "5s"
    },
    {
        intervalNumber: 3000,
        label: "3s"
    },
    {
        intervalNumber: 1000,
        label: "1s"
    }
]

export function Home(){
    const [isServiceActive, SetIsServiceActive] = useState(false);
    const [pointsData, setPointsData] = useState<pointProps[]>([]);

    const { 
        watchPosition, 
        clearWatch, 
        setInterval,
        points 
    } = useGpsData();

    const netInfo = useNetInfo();
    const navigation = useNavigation();

    async function offilineSynchronize(){
        await synchronize({
           database,
           pullChanges: async () => {
              await database.get('points').create(point => pointsData);
              const response = await api.get(`/points/`);
              setPointsData(points);

  
              const { changes, lastestVersion } = response.data;
              return { changes, timestamp: lastestVersion };
           },
        });
     }

     useEffect(() => {
        async function fetchPoints(){
           try {
              const pointCollection = database.get<ModelPointItem>('points');
              const pointsDataDB = await pointCollection.query().fetch();
              
              setPointsData(pointsDataDB);
           } catch (error) {
              console.log(error);
           }
        }
  
        fetchPoints();
     }, []);


    useEffect(() => {
        if(netInfo.isConnected === true){
            offilineSynchronize();
        }
    }, [netInfo.isConnected]);

    function handlePointStatus(){
        navigation.navigate('Status', { pointsData });
    };
   
    return(
        <Container>
            <Header>
                <WellcomeText>
                    Olá, ben-vindo
                </WellcomeText>

                <HeaderButton onPress={() => handlePointStatus()}>
                    <HeaderButtonText>
                        Status
                    </HeaderButtonText>
                </HeaderButton>
            </Header>

            <TrackingStatusContainer>
                <TrackingStatusContainerLeftArea>
                    <HomeIcon width={65} height={65}/>
                </TrackingStatusContainerLeftArea>

                <TrackingStatusContainerRigthArea>
                    <RightAreaTitle>
                        My GPS - Tracking
                    </RightAreaTitle>

                        {
                            isServiceActive === true ?  <OnlineIndicatior>Online</OnlineIndicatior> : <OfflineIndicatior>Offline</OfflineIndicatior>
                        }
                </TrackingStatusContainerRigthArea>
            </TrackingStatusContainer>

            <StatusOfServiceContainer>
                <StatusOfServiceContainerLeftArea>
                    <StatusOfServiceTitle>
                        Status do serviço
                    </StatusOfServiceTitle>
                    <StatusOfServiceText>
                        Serviço ativo
                    </StatusOfServiceText>
                </StatusOfServiceContainerLeftArea>
                <StatusOfServiceContainerRightArea>
                    <Switch 
                        trackColor={{ false: '#e4e3eb', true: '#15bc02' }}
                        onValueChange={(value) => {
                            if(value){
                                SetIsServiceActive(true);
                                watchPosition()
                            }else{
                                SetIsServiceActive(false);
                                clearWatch()
                            }
                        }}
                        value={isServiceActive}
                    />
                </StatusOfServiceContainerRightArea>
            </StatusOfServiceContainer>

            <IntervalComunicationContainer>
                <IntervalComunicationText>Intervalo de comunicação</IntervalComunicationText>
                <ButtonsContainer>
                    <ButtonGroup buttons={buttons} setInterval={setInterval}/>
                </ButtonsContainer>
            </IntervalComunicationContainer>
        </Container>
    )
}