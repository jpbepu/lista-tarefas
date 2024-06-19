import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
    }


`

export const Container = styled.div`

    display: grid;
    grid-template-columns: 240px auto;

`


export default GlobalStyle