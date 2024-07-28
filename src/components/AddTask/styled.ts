import styled from "styled-components";
import { Link } from "react-router-dom";


export const Circle = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 64px;
    width: 64px;
    background-color: green;
    color: white;
    font-size: 40px;
    position: fixed;
    right: 40px;
    bottom: 40px;
    border-radius: 50%;
    text-decoration: none;
`

