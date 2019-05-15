import React from 'react'
import './ToDoListItem.css'


class ToDoListItems extends React.Component {


  render() {
    const {title, important, done, onDelete, onLabelClick, onImportantClick} = this.props

    let classNames = 'todo-list-item'
    if(done){
      classNames += ` done`
    }

    if(important){
      classNames += ' important'
    }

    return (
      <div className="row justify-content-sm-between align-items-center">
        <span className={classNames}
        onClick={onLabelClick}
        >{title}</span>
        <div>
          <button className="btn btn-success bg-white" type="submit"
          onClick={onImportantClick}
          ><i className="fas fa-exclamation text-success" /></button>
          <button className="btn btn-danger bg-white ml-1" type="submit"
          onClick={onDelete}
          ><i className="fas fa-trash text-danger" /></button>
        </div>
      </div>
    )

  }
}

export default ToDoListItems
