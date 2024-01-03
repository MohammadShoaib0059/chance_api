import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteUsers } from '../store/slices/userSlice';
const DeleteAllUser = () => {
  const dispatch = useDispatch();

  const DeleteAlldata = (id) => {
dispatch(deleteUsers())
  }
  return (
    <div>
      <button className='btn' onClick={() => DeleteAlldata()}>Delete All Users</button>
    </div>
  )
}

export default DeleteAllUser
