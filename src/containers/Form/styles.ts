import styled from "styled-components";

export const FormContainer = styled.form`
    max-width: 560px;
    width: 100%;
    font-weight: bold;
    font-size: 14px;

    textarea{
        resize: none;
        margin: 16px 0;

    }
`

export const Options = styled.div`
    margin-bottom: 16px;

    p{
        margin-bottom: 8px;
    }

    input{
        margin-right: 4px ;
    }

    label{
        margin-right: 16px;
    }
`

export const Option = styled.div`
    display: inline;
    text-transform: capitalize;
`