import React from 'react'
import './AddItem.css'


class AddItem extends React.Component {

  render() {
    return (
      <div className="AddBlock">
        <button className="btn btn-outline-secondary"
        onClick={() => {this.props.onAddItem('fgdfg')}}
        >Добавить Элемент</button>
      </div>
    )

  }
}

export default AddItem
