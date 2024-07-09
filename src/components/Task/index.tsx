import { useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'

import * as enums from '../../utils/enums/Tasks'

import { remove } from '../../store/reducers/tasks'
import TaskClass from '../../models/Task'

type Props = TaskClass




const Task = ({title, priority, status, description, id} : Props) => {
    const dispatch = useDispatch()
    const [isEditing, setIsEditing] = useState(false)
    
    return (
        <S.Card>
            <S.Title>{title}</S.Title>
            <S.Tag parameter='priority' priority={priority}>{priority}</S.Tag>
            <S.Tag parameter='status' status={status}>{status}</S.Tag>
            <S.Description value={description}/>
            <S.Actions>
                {isEditing ? (
                    <>
                        <S.SaveButton>Salvar</S.SaveButton>
                        <S.CancelButton onClick={() => setIsEditing(false)}>Cancelar</S.CancelButton>
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