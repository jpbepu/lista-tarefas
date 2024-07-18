import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Task from "../../models/Task";
import * as enums from '../../utils/enums/Tasks'

const initialState = {

    items: [
    new Task(
        'Estudar',
        enums.Priority.IMPORTANT,
        enums.Status.PENDING,
        'Estudar front-end',
        1
    ),
    new Task(
        'Jogar',
        enums.Priority.IMPORTANT,
        enums.Status.PENDING,
        'Jogar SF6',
        2
    ),
    new Task(
        'Dormir',
        enums.Priority.IMPORTANT,
        enums.Status.PENDING,
        'zzz',
        3
    )
]};



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
        }

    }

})

export const { remove, edit } = taskSlice.actions
export default taskSlice.reducer