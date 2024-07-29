import { ChangeEvent, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'
import { Button } from '../../styles'
import { SaveButton } from '../../styles'


import { remove, edit, changeStatus } from '../../store/reducers/tasks'
import TaskClass from '../../models/Task'

import * as enums from '../../utils/enums/Tasks'

type Props = TaskClass




const Task = ({
    description : initialDescription,
    title,
    priority,
    status,
    id
} : Props) => {

    const dispatch = useDispatch()
    const [isEditing, setIsEditing] = useState(false)
    const [description, setDescription] = useState('')

    useEffect(() => {
        if (initialDescription.length > 0){
            setDescription(initialDescription)
        }
    },[initialDescription])

    function changeTaskStatus(e: ChangeEvent<HTMLInputElement>) {
        console.log(e.target.checked)
        dispatch(changeStatus({
            id,
            checked: e.target.checked,
        }))
    }
     
    return (
        <S.Card>

            <label htmlFor={title}>
                <input
                    type="checkbox"
                    checked={
                        status === enums.Status.COMPLETED
                    }
                    onChange={changeTaskStatus}
                    id={title}
                />
                <S.Title>
                    {isEditing && <em>Editando: </em>}
                    
                    {title}
                </S.Title>
            </label>

            <S.Tag parameter='priority' priority={priority}>{priority}</S.Tag>
            <S.Tag parameter='status' status={status}>{status}</S.Tag>
            <S.Description
                disabled={!isEditing}
                value={description}
                onChange={ e => setDescription(e.target.value)}
            />
            <S.Actions>
                {isEditing ? (
                    <>
                        <SaveButton
                            onClick={() => {
                                dispatch(
                                    edit({
                                        description,
                                        title,
                                        priority,
                                        status,
                                        id
                                    })
                                )
                                setIsEditing(false)
                            }}>Salvar</SaveButton>

                        <S.CancelButton
                            onClick={() => {
                                setIsEditing(false)
                                setDescription(initialDescription)
                            }
                        }>
                            Cancelar
                        </S.CancelButton>
                    </>
                ) : (
                    <>
                        <Button onClick={() => setIsEditing(true)}>Editar</Button>
                        <S.RemoveButton onClick={() => dispatch(remove( id ))}>Remover</S.RemoveButton>
                    </>
                )}

            </S.Actions>
    
        </S.Card>
    )
}

export default Task