import styled from "styled-components/native";

interface ContainerProps {
    isActive: boolean;
};

export const Container = styled.TouchableOpacity<ContainerProps>`
    width: 75px;
    height: 75px;

    border-width: 2px;
    border-radius: 5px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-color: ${( props ) => props.isActive === true ? '#11bd01' : '#ccd0dd'}
`;

export const IntervalButtonText = styled.Text<ContainerProps>`
    font-size: 20px;

    color: ${( props ) => props.isActive === false && '#ccd0dd'}
`;