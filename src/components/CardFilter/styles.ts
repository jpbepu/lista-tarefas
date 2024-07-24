import styled from "styled-components";

type Props = {
    active: boolean
}


export const Card = styled.div<Props>`
    padding: 8px;
    border: 1px solid ${props => props.active ? '#1E90FF' : '#a1a1a1' } ;
    border-radius: 8px;
    background-color: ${props => props.active ? 'white' : '#ececec' };
    color: ${props => props.active ? '#1E90FF' : '#5E5E5E' } ;
    margin-bottom: 8px;
    cursor: pointer;


`

export const Counter = styled.span`
    font-size: 24px;
    font-weight: bold;

    display: block;

    
`


export const Label = styled.span`
    font-size: 14px;

    
`