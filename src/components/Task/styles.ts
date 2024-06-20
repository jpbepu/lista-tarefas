import styled from "styled-components";
import colors from "../../styles/colors";

import * as enums from '../../utils/enums/Tasks'


//handle tag color----------------

type TagProps = {
    priority?: enums.Priority
    status?: enums.Status
    parameter: 'status' | 'priority'
}

function BGColor(props:TagProps): string{

    if(props.parameter === 'status'){
        if (props.status === enums.Status.PENDING) return colors.yellow
        if (props.status === enums.Status.COMPLETED) return colors.green
    } else {
        if (props.priority === enums.Priority.URGENT) return colors.red
        if (props.priority === enums.Priority.IMPORTANT) return colors.orange
        if (props.priority === enums.Priority.NORMAL) return colors.blue
    }

    return '#ccc'
}

//--------------------------------

export const Card = styled.div`
    background-color: aliceblue;
    box-shadow:  0px 4px 4px rgba(0,0,0,0.5);
    padding: 16px;
    margin-bottom: 32px;
    border-radius: 16px;
`

export const Title = styled.h3`
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 16px;
`

export const Tag = styled.span<TagProps>`
    padding: 4px 8px;
    font-size: 10px;
    color: white;
    font-weight: bold;
    background-color: ${(props) => BGColor(props)};
    border-radius: 8px;
    margin-right: 8px;
    display: inline-block;
`

export const Description = styled.textarea`
    font-family: monospace;
    color: #8B8B8B;
    font-size: 14px;
    line-height: 24px;
    display: block;
    width: 100%;
    margin: 16px 0;

    resize: none;
    border: none;
    background-color: transparent;
`

export const Actions = styled.div`
    border-top: 1px solid rgba(0,0,0,0.1);
    padding-top: 16px;
`


//buttons
export const Button = styled.button`
    font-size: 12px;
    padding: 8px 12px;
    color: white;
    font-weight: bold;
    border: none;
    cursor: pointer;
    background-color: #313131;
    border-radius: 8px;
    margin-right: 8px;
`

export const SaveButton = styled(Button)`
    background-color: ${colors.green};
`

export const CancelButton = styled(Button)`
    background-color: ${colors.red};
`

export const RemoveButton = styled(Button)`
    background-color: ${colors.red};
`