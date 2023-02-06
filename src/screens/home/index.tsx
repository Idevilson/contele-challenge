import React, { useState } from "react";
import { Text, Switch } from "react-native";

import HomeIcon from "../../../assets/HomeIcon.svg";

import { database } from "../../database";

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
    StatusOfServiceContainer,
    StatusOfServiceContainerLeftArea,
    StatusOfServiceContainerRightArea,
    StatusOfServiceTitle,
    StatusOfServiceText,
    IntervalComunicationContainer,
    IntervalComunicationText,
    ButtonsContainer
} from "./styles";

import { IntervalButton } from "../../components/IntervalButton";
import { useEffect } from "react";

export function Home(){
    const [isServiceActive, SetIsServiceActive] = useState(false);

    useEffect(() => {
        async function loadData() {
            const pointCollection = database.get('points');
            const points = await pointCollection.query().fetch();
            console.log(points);
        };

        loadData();
    }, []);

    return(
        <Container>
            <Header>
                <WellcomeText>
                    Olá, ben-vindo
                </WellcomeText>

                <HeaderButton>
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
                    <OnlineIndicatior>
                        Online
                    </OnlineIndicatior>
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
                        onValueChange={() => SetIsServiceActive(!isServiceActive)}
                        value={isServiceActive}
                    />
                </StatusOfServiceContainerRightArea>
            </StatusOfServiceContainer>

            <IntervalComunicationContainer>
                <IntervalComunicationText>Intervalo de comunicação</IntervalComunicationText>
                <ButtonsContainer>
                    <IntervalButton 
                        timeText="10s" 
                        isActive={true}
                    />

                    <IntervalButton 
                        timeText="5s" 
                        isActive={false}
                    />

                    <IntervalButton 
                        timeText="3s" 
                        isActive={false}
                    />

                    <IntervalButton 
                        timeText="1s" 
                        isActive={false}
                    />
                </ButtonsContainer>
            </IntervalComunicationContainer>
        </Container>
    )
}