import { createSlice } from "@reduxjs/toolkit";
import uuid from "react-uuid";

const tasks = [
    {
        id: uuid(),
        description: "Wash the dishes",
        status: false,
        priority: 'green'
    },
    {
        id: uuid(),
        description: "Cook dinner",
        status: false,
        priority: 'yellow'
    },
    {
        id: uuid(),
        description: "Finish JS4 lab2",
        status: false,
        priority: 'red'
    },
]

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks
    },
    reducers: {

        deleteTask: (state, action) => {
            const id = action.payload;
            state.tasks.forEach((task) => {
                if (task.id === id) {
                    state.tasks = state.tasks.filter((matched) => { return id !== matched.id })
                }
            })
        },

        isComplete: (state, action) => {
            const id = action.payload;
            state.tasks.forEach((task) => {
                if (task.id === id) {
                    task.status = !task.status
                }
            })

        },

        addTask: (state, action) => {
            state.tasks.push(action.payload)
        }
    }
})

export const { deleteTask, isComplete, addTask } = tasksSlice.actions;
export default tasksSlice.reducer;