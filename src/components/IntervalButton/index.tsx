import React, { useState } from "react";


import { Container, IntervalButtonText } from "./styles";

interface IntervalButtonProps {
    setInterval: React.Dispatch<React.SetStateAction<number>>;
    isActive: boolean;
    label: string;
    setClickedId: React.Dispatch<React.SetStateAction<number>>
    index: number;
    intervalNumber: number;
}

const IntervalButton = ({ 
    isActive, 
    label, 
    setClickedId, 
    index,
    setInterval,
    intervalNumber
}: IntervalButtonProps) => {

    console.log(index);
    
    return(
        <Container 
            isActive={isActive}
            onPress={() => {
                setClickedId(index), setInterval(intervalNumber)
            }}
        >
            <IntervalButtonText isActive={isActive}>{label}</IntervalButtonText>
        </Container>
    )
}


interface buttonProps {
    label: string;
    intervalNumber: number;
}
interface buttonsGroupProps {
    buttons: buttonProps[];
    setInterval: React.Dispatch<React.SetStateAction<number>>;
}

const ButtonGroup = ({ buttons, setInterval }: buttonsGroupProps) => {
    const [ clickedId, setClickedId ] = useState(0);

    return (
        <>
            { buttons.map(( button , index) => (
                <IntervalButton 
                    key={index} 
                    isActive={ index === clickedId ? true : false} 
                    label={button.label}
                    setClickedId={setClickedId}
                    index={index}
                    intervalNumber={button.intervalNumber}
                    setInterval={setInterval}
                />
            )) }
        </>
    )
};

export { ButtonGroup };