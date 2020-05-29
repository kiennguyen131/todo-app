import React from 'react';
import './App.css';
import ToDoItem from './components/ToDoItem'

class App extends React.Component {
  // constructor() {
  //   super();
  //   this.todoItems = [
  //     { title: 'Choi', isComplete: true},
  //     { title: 'An'},
  //     { title: 'Ngu', isComplete: true},
  //     { title: 'Nghi'}
  //   ];
  // }

  // render() {
  //   return (
  //     <div className="App">
  //       {
  //         this.todoItems.length > 0 && this.todoItems.map((item, index) => <ToDoItem key={index} item={item}/>)
  //       }
  //       { 
  //         this.todoItems.length === 0 && 'nothing here'
  //       }
  //     </div>
  //   )
  // }
  render() {
    return (
      <div className="App">
        <ToDoItem/>
      </div>
    )
  }
}

export default App;
