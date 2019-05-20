import React from 'react'

class FilterButton extends React.Component{
  buttons = [
    {name: 'all', label: 'All'},
    {name: 'active', label: 'Active'},
    {name: 'done', label: 'Done'}
  ]

  render() {
    const {filter} = this.props
    const buttons = this.buttons.map((item) => {
      const isActive = filter === item.name
      const clazz = isActive ? 'btn-info' : 'btn-outline-secondary'
      return (
        <button key={item.name} type="button" className={`btn ${clazz}`}>{item.label}</button>
      )
    })
    return (
        <div className="btn-group ml-1" role="group" aria-label="Basic example">
          {buttons}
        </div>
      )
  }
}

export default FilterButton