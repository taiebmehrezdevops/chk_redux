import React from 'react';
import { useDispatch } from 'react-redux';
import { Delete } from '../Redux/actions';
import {deletee} from '../Redux/TodoSlice';
const DeleteToDo = ({de}) => {
    const dispatch = useDispatch();
    const handleDeleteClick = () => {
		dispatch(deletee( de.id ));
	};

    return(
          <div>
            <button onClick={handleDeleteClick} >
          Delete
      </button>
      </div>
    )
}
export default DeleteToDo