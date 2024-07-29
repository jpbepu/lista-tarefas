import styled from "styled-components";
import colors from "../../styles/colors";

type Props = {
    active: boolean
}


export const Card = styled.div<Props>`
    padding: 8px;
    border: 1px solid ${props => props.active ? 'grey' : colors.description } ;
    border-radius: 8px;
    background-color: ${props => props.active ? 'white' : colors.background };
    color: ${props => props.active ? 'black' : colors.description } ;
    margin-bottom: 8px;
    cursor: pointer;

    span{
        color: ${props => props.active ? 'black' : colors.description } ;
    }

`

export const Counter = styled.span`
    font-size: 24px;
    font-weight: bold;

    color: aliceblue;

    display: block;

    
`


export const Label = styled.span`
    font-size: 14px;

    
`