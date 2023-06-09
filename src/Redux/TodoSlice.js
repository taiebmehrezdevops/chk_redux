import { createSlice } from "@reduxjs/toolkit"
import { Task } from "../Component/Task"

const initialState = {
    task: Task
}

export const TodoSlice = createSlice({
    name: 'ToDo',
    initialState,
    reducers:{
        addtodo:(state,action) => {
             state.task.push(action.payload)
        },
        editodo:(state,action) => {
            state.task.map((t)=>(t.id===action.payload.id?t.desc=action.payload.desc:t))
       },
       isdone:(state,action) => {
            state.task.map((t)=>(t.id===action.payload?t.etat=!t.etat:t.etat))
       },
      deletee:(state,action) => {
             state.task=state.task.filter((t)=> (t.id !== action.payload))
       }
    }

})
export const {addtodo, editodo, isdone, deletee} = TodoSlice.actions
export default TodoSlice.reducer