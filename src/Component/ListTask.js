import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ToDo from './ToDo'

const ListTask = () => {
    const task = useSelector ((state) => state.task)
    const dispatch = useDispatch()
    return(
        <div>
            {task.map((t) => (
              <ToDo e={t}/>
        ))}
        </div>
    )
}
export default ListTask