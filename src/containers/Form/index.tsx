import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { MainContainer, SaveButton, Title } from '../../styles'
import { InputField } from '../../styles'
import { FormContainer, Options, Option } from './styles'


import * as enums from '../../utils/enums/Tasks'
import Task from '../../models/Task'
import { register } from '../../store/reducers/tasks'

const Form = () => {

    const dispatch= useDispatch()
    const navigate = useNavigate()

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [priority, setPriority] = useState(enums.Priority.NORMAL)

    const registerTask = (e: FormEvent) => {
        e.preventDefault()
        const taskToAdd = new Task(
            title,
            priority,
            enums.Status.PENDING,
            description,
            9
        )

        dispatch(register(taskToAdd))
        navigate('/')
    }

    return(
        <MainContainer>
        <Title>Nova Tarefa</Title>
        <FormContainer onSubmit={registerTask}>
            <InputField value={title} onChange={e => setTitle(e.target.value)} type="text" placeholder="Titulo" />
            <InputField as="textarea" value={description} onChange={e => setDescription(e.target.value)} placeholder="Descricao da Tarefa" />

            <Options>
                <p>Prioridade</p>

                {Object.values(enums.Priority).map(p => (
                    <Option key={p}>
                        <input
                            value={priority}
                            name="priority"
                            type="radio"
                            id={p}
                            onChange={e => setPriority(e.target.value as enums.Priority)}
                            defaultChecked={priority === enums.Priority.NORMAL}
                        />

                        <label htmlFor={p}>{p}</label>
                    </Option>
                ))}

            </Options>

            <SaveButton>Cadastrar</SaveButton>

        </FormContainer>
    </MainContainer>
    )
}

export default Form