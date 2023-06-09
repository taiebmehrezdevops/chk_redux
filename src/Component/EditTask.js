import React from "react";
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import ReactModal from 'react-modal';
import { Edit } from '../Redux/actions';
import {editodo} from '../Redux/TodoSlice'

const EditTask = ({todo}) => {
    const [description, setDesc] = useState(todo.desc);
    const [modalIsOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch()
    const OpenModal = () => {
        setIsOpen(true)
    }
    const closeModal = () => {
        setIsOpen(false)
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(editodo({id:todo.id,desc:description}))
       closeModal()
      };
    return(
        <div>
            <button onClick={OpenModal}>Edit Task</button>
            <ReactModal  isOpen={modalIsOpen}>
       <form > 
        <input id="desc" name ="desc" type="text" placeholder='description' onChange={(event) => setDesc(event.target.value)} value={description}/>
       <button  onClick={handleSubmit}>Submit</button>
       </form>
       <button onClick={closeModal}>Close</button>
    </ReactModal>
        </div>

    )
}
export default EditTask