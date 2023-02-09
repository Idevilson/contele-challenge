import React from "react";

import { 
    Container, 
    TopContainer, 
    BottonContainer, 
    PackageIdText, 
    PackageTime, 
    PackageStatusText,
} from "./styles";

interface PackageProps {
    packageIdText: string;
    packageTime: string;
    packageStatus: string
}

export function Package({ 
    packageTime, 
    packageIdText,
    packageStatus
}: PackageProps) {

    return(
        <Container>
            <TopContainer>
                <PackageIdText>Pacote ID: {packageIdText}</PackageIdText>
                <PackageTime>{packageTime}</PackageTime>
            </TopContainer>

            <BottonContainer>
                <PackageStatusText>{packageStatus}</PackageStatusText>
            </BottonContainer>
        </Container>
    )
}