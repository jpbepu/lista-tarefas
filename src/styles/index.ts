import styled, { createGlobalStyle } from "styled-components";
import colors from "./colors";
import { Button } from "../components/Task/styles";

const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        font-family: "Inter", sans-serif;
    }


`

export const MainContainer = styled.main`
    padding: 0 40px;
    height: 100vh;
    overflow-y: scroll;
`

export const Container = styled.div`

    display: grid;
    grid-template-columns: 240px auto;

`
export const Title = styled.h2`
    display: block;
    margin: 40px 0;
    font-weight: bold;
    font-size: 18px;
`

export const InputField = styled.input`

    padding: 8px;
    background-color: aliceblue;
    border-radius: 8px;
    border: 1px solid #666666;
    font-weight: bold;
    color: #666666;
    width: 100%;
    

`

export const SaveButton = styled(Button)`
    background-color: ${colors.green};
`


export default GlobalStyle