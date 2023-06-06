import { ADD_TASK } from "./actionType"
import { IS_DONE, EDIT, DELETE} from "./actionType"

export const addTask = newTask => {
    return {
        type: ADD_TASK,
        payload: newTask
    }
}
    export const IsDone = (idtodo) => {
        return {
            type: IS_DONE,
            payload: idtodo
        }
    
}
export const Edit = (etodo) => {
    return {
        type: EDIT,
        payload: etodo
    }

}
export const Delete = (dtodo) => {
    return {
        type: DELETE,
        payload: dtodo
    }

}
