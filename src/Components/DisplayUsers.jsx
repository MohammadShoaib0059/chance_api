import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components';
import {MdDeleteForever} from "react-icons/all.js";
import { removeUser } from '../store/slices/userSlice';


const DisplayUsers = () => {

  const dispatch = useDispatch();
  const data = useSelector((state) => {
    return state.users;
  })
console.log(data);

const DeleteUser = (id) => {
  dispatch(removeUser(id))
}
  return (
    <Wrapper>
    <div>
    <ul>
      {
        data.map((item,id) =>{
         
          return <li key={id}>{item}
          <button className='btn-delete' onClick = {() => DeleteUser(id)}>
            <MdDeleteForever className="delete-icon" />
          </button>
          </li>
        })
      
      }
    </ul>
    </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
li{
display:flex;
justify-content:left;
align-item:center;
}
`;

export default DisplayUsers
