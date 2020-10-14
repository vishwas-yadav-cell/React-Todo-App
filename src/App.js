import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      list: []
    }
  }

  addItem(enteredText) {
    if (enteredText !== "") {
      const newItem = {
        id: Date.now(),
        value: enteredText,
        isDone: false
      }
      const newList = [...this.state.list];
      newList.push(newItem);
      this.setState({
        newItem: "",
        list: newList
      })
    }
  }

  updateInput(textInput) {
    this.setState({ newItem: textInput });
  }

  deleteItem(id) {
    const list = [...this.state.list];
    const updatedList = list.filter(item => item.id !== id);
    this.setState({ list: updatedList });
  }

  render() {
    return (
      <div>
        <div className="topLevel">
          <h1 className="app-title">React-Todo-App</h1>
          <div className="container">
            Add an Item...
          <br />
            <input type="text" className="input-text" placeholder="Enter your Task..." onChange={(e) => this.updateInput(e.target.value)} />
            <button className="add-btn" onClick={() => this.addItem(this.state.newItem)}>Add Task</button>
            <div className="list">
              <ul>
                {this.state.list.map(item => {
                  return (
                    <li key={item.id}>{item.value}<button className="btn" onClick={()=>this.deleteItem(item.id)}>Delete</button></li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
