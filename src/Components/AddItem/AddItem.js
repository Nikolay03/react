import React from 'react'
import './AddItem.css'


class AddItem extends React.Component {
  state = {
    label: ''
  }
  onSubmitAddForm = (e) => {
    e.preventDefault();
    this.props.onAddItem(this.state.label);
    this.setState({
      label: ''
    })
  }
  onLabelChange = (e) => {
    this.setState({
      label: e.target.value
    })
  }
  render() {
    return (
      <form className="AddBlock d-flex mt-4"
      onSubmit={this.onSubmitAddForm}
      >
        <input type ="text" className="form-control mr-2" placeholder="What do you need"
        onChange={this.onLabelChange}
               value={this.state.label}
        />
        <button className="btn btn-outline-secondary"
                type="submit"
        >Добавить Элемент</button>
      </form>
    )

  }
}

export default AddItem
