import React from 'react'
import ToDoListItems from '../ToDoListItem/ToDoListItems';

const ToDoList = ({data, onDelete}) => {
  return (
    <ul className="list-group mt-4">
      {
         data.map((item) => {
           const {id, ...allParams} = item
          return (
              <li key={id} className="list-group-item mt-1">
                <ToDoListItems  {...allParams}
                onDelete={() => onDelete(id)}
                />
              </li>
            )
          }
        )
      }
    </ul>
  )
}



export default ToDoList