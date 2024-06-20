import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Task from "../../models/Task";
import * as enums from '../../utils/enums/Tasks'

const initialState = [
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
];

const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        remove: (state, action: PayloadAction<number>) => {
            state = state.filter(task => task.id !== action.payload)
        }

    }

})

export const { remove } = taskSlice.actions
export default taskSlice.reducer