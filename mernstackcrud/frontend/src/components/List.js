import React from 'react'
import { FiEdit } from "react-icons/fi";
import { FiDelete } from "react-icons/fi";
import axios from "axios";
import { baseURL } from "../utils/constant";


const List = ({id, task, setUpdateUI, updateMode}) => {
  
    const removeTask = () => {
        axios.delete(`${baseURL}/delete/${id}`).then((res) => {
          console.log(res);
          setUpdateUI((prevState) => !prevState);
        });
      };
  
  
  
  
  
  
    return (
    <li>
        {task}
        <div className="icon_holder" >
        <FiEdit className="icon" onClick={() => updateMode(id, task)}/>
        <FiDelete className="icon" onClick={removeTask}/>
        </div>
    </li>
  );
};

export default List;