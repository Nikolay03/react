import React from 'react'

class FilterButton extends React.Component{


  render() {
    return (
        <div className="btn-group ml-1" role="group" aria-label="Basic example">
          <button type="button" className="btn btn-primary border-primary">all</button>
          <button type="button" className="btn btn-white border-primary">Active</button>
          <button type="button" className="btn btn-white border-primary">Done</button>
        </div>
      )
  }
}

export default FilterButton