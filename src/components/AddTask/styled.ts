import styled from "styled-components";
import { Link } from "react-router-dom";
import colors from "../../styles/colors";


export const Circle = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 64px;
    width: 64px;
    background-color: ${colors.green};
    color: white;
    font-size: 40px;
    position: fixed;
    right: 40px;
    bottom: 40px;
    border-radius: 50%;
    text-decoration: none;
`

