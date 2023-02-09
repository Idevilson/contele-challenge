import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
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
`;

export const ScrenName = styled.Text`
    font-size: 20px;
    color: #fff;
    opacity: 0.75;

    margin-left: 27%;
`;

export const HeaderButton = styled.TouchableOpacity`
    
`;

export const HeaderButtonText = styled.Text`
    font-size: 20px;
    color: #fff;
`;

export const PackageContainer = styled.ScrollView`
    background-color: #fff;
    flex: 1;
    width: 100%;

    padding-left: 10px;
    padding-right: 10px;
`;

export const PackageSeparator = styled.View`
    width: 100%;
    border-bottom-width: 1.5px;
    border-bottom-color: grey;

    margin-top: 5px;
    margin-bottom: 5px;
`;