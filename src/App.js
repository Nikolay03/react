import React from 'react';
import './App.css';
import ToDoList from './Components/ToDoList/ToDoList';
import SearchPanel from './Components/SearchPanel/SearchPanel';
import AppHeader from './Components/AppHeader/AppHeader';
import FilterButton from './Components/FilterButton/FilterButton'


class App extends React.Component{
  state = {
    toDoData:[
      {
        title:'Vue',
        id: 1
      },
      {
        title:'React',
        id: 2
      },
      {
        title:'Angular',
        id: 3
      }
    ]
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

  render(){
    return (
      <div className="App container-fluid">
        <div className="row justify-content-sm-center align-items-sm-center">
          <div className="col-sm-6">
            <AppHeader />
            <div className="row px-3">
              <SearchPanel />
              <FilterButton />
            </div>
            <ToDoList data={this.state.toDoData}
                      onDelete={this.onDeleteHandler}/>
          </div>
        </div>
      </div>
    );
  }
}



export default App;
