import React from 'react';
import { useDispatch } from 'react-redux';
import { Delete } from '../Redux/actions';
const DeleteToDo = ({de}) => {
    const dispatch = useDispatch();
    const handleDeleteClick = () => {
		dispatch(Delete( de.id ));
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