import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    
`;

export const Header = styled.View`
    width: 100%;
    height: 60px;
    background-color: #1d1c84;
    align-items: center;
    padding-left: 15px;
    padding-right: 15px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const WellcomeText = styled.Text`
    font-size: 20px;
    color: #fff;
    opacity: 0.75;
`;

export const HeaderButton = styled.TouchableOpacity`
    
`;

export const HeaderButtonText = styled.Text`
    font-size: 20px;
    color: #fff;
`;

export const TrackingStatusContainer = styled.View`
    display: flex;
    flex-direction: row;
    width: 100%;    
    height: 100px;

    border-bottom-width: 2px;
    border-bottom-color: #dfe4ec;
`;

export const TrackingStatusContainerLeftArea = styled.View`
    width: 30%;
    height: 100px;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const TrackingStatusContainerRigthArea = styled.View`
    width: 70%;
    height: 97px;

    display: flex;
    justify-content: center;
`;

export const RightAreaTitle = styled.Text`
    font-size: 20px;
    font-weight: bold;
`;

export const OnlineIndicatior = styled.Text`
    font-size: 20px;
    color: #0fbc01;
`;

export const StatusOfServiceContainer = styled.View`
    display: flex;
    flex-direction: row;
`;

export const StatusOfServiceContainerLeftArea = styled.View`
    width: 70%;
    height: 100px;

    display: flex;
    justify-content: center;

    padding-left: 20px;
`;

export const StatusOfServiceTitle = styled.Text`
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 3px;
`;

export const StatusOfServiceText = styled.Text`
    font-size: 15px;
`;

export const StatusOfServiceContainerRightArea = styled.View`
    width: 30%;
    height: 100px;
    
    display: flex;
    justify-content: center;
    
    padding-right: 15px;
`;

export const IntervalComunicationContainer = styled.View`
    width: 100%;
    padding: 20px;
`;

export const IntervalComunicationText = styled.Text`
    font-size: 20px;
    font-weight: 500;
`;

export const ButtonsContainer = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    margin-top: 15px;
`;