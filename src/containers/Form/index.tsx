import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { MainContainer, SaveButton, Title } from '../../styles'
import { InputField } from '../../styles'
import { FormContainer, Options, Option } from './styles'


import * as enums from '../../utils/enums/Tasks'
import { register } from '../../store/reducers/tasks'

const Form = () => {

    const dispatch= useDispatch()
    const navigate = useNavigate()

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [priority, setPriority] = useState(enums.Priority.NORMAL)

    const registerTask = (e: FormEvent) => {
        e.preventDefault()

        dispatch(
                register({
                    title,
                    priority,
                    description,
                    status : enums.Status.PENDING
                })
        )

        navigate('/')
    }

    return(
        <MainContainer>
        <Title>Nova Tarefa</Title>
        <FormContainer onSubmit={registerTask}>
            <InputField required value={title} onChange={e => setTitle(e.target.value)} type="text" placeholder="Titulo" />
            <InputField as="textarea" required value={description} onChange={e => setDescription(e.target.value)} placeholder="Descricao da Tarefa" />

            <Options>
                <p>Prioridade</p>

                {Object.values(enums.Priority).map((p) => (
                    <Option key={p}>
                        <input
                            value={p}
                            name="prioridade"
                            type="radio"
                            id={p}
                            onChange={(e) => {setPriority(e.target.value as enums.Priority)
                                console.log(priority)
                            }}
                            defaultChecked={p === enums.Priority.NORMAL}
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