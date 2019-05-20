import React, {Component} from 'react'
import withStyles from 'react-jss'


const style = {
  red: {
    '& input': {
      color: 'red'
    }
  }
}

class SearchPanel extends Component {
  state = {
    term: ''
  }
  onSearchChange = (e) => {
    const term = e.target.value
    this.setState({term})
    this.props.onSearchChange(term)
  }

  render() {
    return (
      <div className={this.props.classes.red}>
        <input type="text" placeholder="vvrff"
        value={this.state.term}
        onChange={this.onSearchChange}/>
      </div>
    )
  }
}

export default withStyles(style)(SearchPanel)
