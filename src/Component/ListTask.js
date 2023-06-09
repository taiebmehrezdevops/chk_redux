import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ToDo from './ToDo'

const ListTask = () => {
    const taskk = useSelector ((state) => state.tasks.task)
   console.log(taskk,'test');
    return(
        <div>
            {taskk.map((t) => (
              <ToDo e={t}/>
        ))}
        </div>
    )
}
export default ListTask