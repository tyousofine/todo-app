import { createSlice } from "@reduxjs/toolkit";


export const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: []
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
        },

        clearTasks: (state, action) => {
            state.tasks = [];
        },

        setTasks: (state, action) => {
            state.tasks = action.payload;
        },

        setPriority: (state, action) => {
            const color = action.payload;
            state.tasks.forEach((task) => {
                if (task.id === color.id) {
                    task.priority = color.selected
                }
            })
        }

    }
})

export const { deleteTask, isComplete, addTask, clearTasks, setTasks, setPriority } = tasksSlice.actions;
export default tasksSlice.reducer;