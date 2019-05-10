import React from 'react'
import './ToDoListItem.css'


class ToDoListItems extends React.Component {

  state = {
    done: false,
    important: false
  }

  onLabelClick = () => {
    this.setState((state) => {
      return {
        done: !state.done
      }
    })
  }
  onImportantClick = () => {
    this.setState(({important}) => {
        return {
          important: !important
        }
      }
    )
  }


  render() {
    const {title, onDelete} = this.props

    let classNames = 'todo-list-item'
    if(this.state.done){
      classNames += ` done`
    }

    if(this.state.important){
      classNames += ' important'
    }

    return (
      <div className="row justify-content-sm-between align-items-center">
        <span className={classNames}
        onClick={this.onLabelClick}
        >{title}</span>
        <div>
          <button className="btn btn-success bg-white" type="submit"
          onClick={() => this.onImportantClick()}
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
