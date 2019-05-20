import React from 'react';
import './App.css';
import ToDoList from './Components/ToDoList/ToDoList';
import SearchPanel from './Components/SearchPanel/SearchPanel';
import AppHeader from './Components/AppHeader/AppHeader';
import FilterButton from './Components/FilterButton/FilterButton'
import AddItem from "./Components/AddItem/AddItem";


class App extends React.Component{

  maxId = 100
  state = {
    toDoData:[
      {
        title:'Vue',
        id: 1,
        important: false,
        done: false
      },
      {
        title:'React',
        id: 2,
        important: true,
        done: false
      },
      {
        title:'Angular',
        id: 3,
        important: false,
        done: false
      }
    ],
    term: '',
    filter: 'done'
  }

  onLabelClick = (id) => {
    this.setState(({toDoData}) => {
      const idx = toDoData.findIndex((el) => el.id === id)

      const oldItem = toDoData[idx]
      const newItem = {...oldItem, done: !oldItem.done}

      const before = toDoData.slice(0, idx)
      const after = toDoData.slice(idx + 1)
      const neArray = [...before, newItem, ...after]
      return {
        toDoData: neArray
      }
    })
  }
  onImportantClick = (id) => {
    this.setState(({toDoData}) => {
      const idx = toDoData.findIndex((el) => el.id === id)

      const oldItem = toDoData[idx]
      const newItem = {...oldItem, important: !oldItem.important}

      const newArray = [
        ...toDoData.slice(0, idx),
        newItem,
        ...toDoData.slice(idx + 1)
      ]
        return {
        toDoData: newArray
        }
      }
    )
  }

  clicker = {
    onLabelClick: this.onLabelClick,
    onImportantClick: this.onImportantClick
  }

  onDeleteHandler = (id) => {
  this.setState(({toDoData}) => {
    const idx = toDoData.findIndex((el) => (el.id === id))
    const before = toDoData.slice(0, idx)
    const after = toDoData.slice(idx + 1)
    const neArray = [...before, ...after]

    return {
      toDoData: neArray
    }
  })
  }
  onAddItem = (text) => {
    const newItem = {
      title: text,
      important: false,
      done: false,
      id: this.maxId ++
    }

    this.setState(({ toDoData }) => {
      const newArray = [
        ...toDoData,
        newItem
      ]

      return {
        toDoData: newArray
      }
    })
  }
  search = (items, term) => {
    if(term.length === 0) {
      return items
    }
    return items.filter((item) => {
      return item.title.toLowerCase().indexOf(term.toLowerCase()) > -1;

    })
  }

  onSearchChange = (term) => {
    this.setState({ term })
  }

  filter = (items, filter) => {
    switch (filter){
      case 'all':
        return items
      case 'active':
        return items.filter((item) => !item.done)
      case 'done':
        return items.filter((item) => item.done)
      default:
        return items
    }

  };

  render(){
    const visibleItems = this.filter(this.search(this.state.toDoData, this.state.term), this.state.filter)
    return (
      <div className="App container-fluid">
        <div className="row justify-content-sm-center align-items-sm-center">
          <div className="col-sm-6">
            <AppHeader />
            <div className="row px-3">
              <SearchPanel
                onSearchChange={this.onSearchChange}/>
              <FilterButton filter={this.state.filter}/>
            </div>
            <ToDoList
              data={visibleItems}
              clicker={this.clicker}
              onDelete={this.onDeleteHandler}/>
              <AddItem onAddItem={this.onAddItem}/>
          </div>
        </div>
      </div>
    );
  }
}



export default App;
