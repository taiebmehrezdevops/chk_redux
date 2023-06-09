import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTask } from '../Redux/actions';
import {addtodo} from '../Redux/TodoSlice'
const AddTask = () => {
    const [desc, setDesc] = useState('')
    const [etat, setEtat] = useState('');
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addtodo({desc,etat,id:Math.random()})) 
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>

                <label htmlFor="Task">Task</label>
                <input type="text" name="title" id="title" onChange={e => setDesc(e.target.value)} />
            </div>
            
            <div>
                <input type="submit" value="Add" />
            </div>
        </form>
    )
}

export default AddTask