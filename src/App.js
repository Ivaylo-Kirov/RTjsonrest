import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    }
  }
  componentDidMount() {
    axios.get('https://hlv7793ve8.execute-api.us-east-1.amazonaws.com/jsontest')
      .then((response) => {
        console.log(response.data);
        this.setState({todos: response.data})
      })
      .catch((err) => console.log(err));
  }

  render() {
      const {todos} = this.state;
      const todosDisplay = todos.map((todo) => {
        return <li key={todo.id}>ID: {todo.id} | Name: {todo.name}</li>
      })
    return(
      <ul>
        {todosDisplay}
      </ul>
    );
  }
}

export default App;
