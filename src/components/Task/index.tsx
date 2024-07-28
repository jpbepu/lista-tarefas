import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'
import { SaveButton } from '../../styles'


import { remove, edit } from '../../store/reducers/tasks'
import TaskClass from '../../models/Task'

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
     
    return (
        <S.Card>
            <S.Title>{title}</S.Title>
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
                        <S.Button onClick={() => setIsEditing(true)}>Editar</S.Button>
                        <S.RemoveButton onClick={() => dispatch(remove( id ))}>Remover</S.RemoveButton>
                    </>
                )}

            </S.Actions>
    
        </S.Card>
    )
}

export default Task