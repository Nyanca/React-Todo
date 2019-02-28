import React from 'react';
import Todoitem from './Todoitem';
import todoData from './todoData';

class Main extends React.Component {
  constructor() {
    super()
    this.state = {
        todos : todoData
    }
  }
  render(){
    const todoItems = this.state.todos.map(item => <Todoitem key={item.id} item={item} />) 

    return (
      <div>
        {todoItems}
      </div>
    )
  }
}

export default Main;