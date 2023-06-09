import { ADD_TASK, IS_DONE, EDIT, DELETE } from "./actionType";
import { Task } from "../Component/Task";
const initialState = {
    task: Task
}




























const reducer = (state = initialState, action) =>{
    
    switch (action.type){
        case ADD_TASK:
            return{
                task:[...state.task, action.payload]
            }
            case IS_DONE:
            return{
             ...state,task:state.task.map((t)=>(t.id===action.payload?{...t,etat:!t.etat}:t))
            }
            case EDIT:
            return{
             ...state,task:state.task.map((t)=>(t.id===action.payload.id?action.payload:t))
            }
            case DELETE:
            return{
             ...state,task:state.task.filter((t)=> (t.id !== action.payload || t.etat === true))
            }
            
            default:
                return state
    }
}
export default reducer
