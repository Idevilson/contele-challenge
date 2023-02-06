import React from "react";


import { Container, IntervalButtonText } from "./styles";

interface IntervalButtonProps {
    isActive: boolean;
    timeText: string;
}

export function IntervalButton({ isActive, timeText}: IntervalButtonProps) {
    

    return(
        <Container isActive={isActive}>
            <IntervalButtonText isActive={isActive}>{timeText}</IntervalButtonText>
        </Container>
    )
}