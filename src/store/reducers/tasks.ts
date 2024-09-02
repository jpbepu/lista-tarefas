import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Task from "../../models/Task";
import * as enums from '../../utils/enums/Tasks'

const initialState = {

    items: [
        {
            id: 1,
            description: 'Estudar JavaScript ES6',
            priority: enums.Priority.NORMAL,
            status: enums.Status.COMPLETED,
            title: 'Estudar JavaScript'
        },
        {
            id: 2,
            description: 'Dar um banho no gato antes do almoco em familia',
            priority: enums.Priority.URGENT,
            status: enums.Status.PENDING,
            title: 'Dar banho no gato'
        },
        {
            id: 3,
            description: 'Fazer as compras para o almoco em familia',
            priority: enums.Priority.IMPORTANT,
            status: enums.Status.PENDING,
            title: 'Fazer compras'
        },

    ]
};



const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        remove: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter(task => task.id !== action.payload)
        },
        edit: (state, action: PayloadAction<Task>) => {
            const taskIndex = state.items.findIndex(t => t.id === action.payload.id)

            if (taskIndex >= 0) {
                state.items[taskIndex] = action.payload
            }
        },
        register: (state, action : PayloadAction<Omit<Task, 'id'>>) =>{
            const existingTask = state.items.find(
                t => t.title.toLowerCase() === action.payload.title.toLowerCase()
            )

            if (existingTask) {
                alert('tarefa repetida')
            } else {
                
                const lastTask = state.items[state.items.length -1]
                

                const newTask = {
                    ...action.payload,
                    id: lastTask ? lastTask.id + 1 : 1
                }

                state.items.push(newTask)
            }
        },
        changeStatus: (state, action: PayloadAction<{id: number; checked: boolean}>) =>{
            const taskIndex = state.items.findIndex((t) => t.id === action.payload.id)

            if (taskIndex >= 0) {
                state.items[taskIndex].status = action.payload.checked ?
                    enums.Status.COMPLETED :
                    enums.Status.PENDING
            }
        }

    }

})

export const { remove, edit, register, changeStatus } = taskSlice.actions
export default taskSlice.reducer