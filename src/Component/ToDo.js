import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IsDone } from "../Redux/actions";
import ReactModal from 'react-modal';
import EditTask from "./EditTask";
import DeleteToDo from "./DeleteToDo";

const ToDo = ({e}) => {
    const dispatch = useDispatch()
    return(
        <div>
        {e.etat ?   <h1 style={{color: 'green'}}>{e.desc} </h1>: <h1 >{e.desc} </h1>} <button onClick={()=> dispatch(IsDone(e.id))}>IsDone</button> <DeleteToDo de={e}/><EditTask todo={e}/>
        
        </div>
    )
}
export default ToDo