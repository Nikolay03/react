import React from 'react'
import ToDoListItems from '../ToDoListItem/ToDoListItems';

const ToDoList = ({data, onDelete, clicker}) => {
  return (
    <ul className="list-group mt-4">
      {
         data.map((item) => {
           const {id, ...allParams} = item
          return (
              <li key={id} className="list-group-item mt-1">
                <ToDoListItems
                  {...allParams}
                  onDelete={() => onDelete(id)}
                  onLabelClick={() => clicker.onLabelClick(id)}
                  onImportantClick={() => {clicker.onImportantClick(id)}}
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