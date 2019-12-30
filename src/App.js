import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import './App.css';
import Todos from './components/Todos'
import Header from './components/layout/Header'
import AddTodo from './components/AddTodo'
import uuid from 'uuid';
import About from './components/pages/About'
import axios from 'axios'

class App extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      todos :[]
    }
  }

  markComplete = (id)=>
  {
    // console.log("from app js",id);
    this.setState({
      todos: this.state.todos.map(todo=>{
        if(todo.id === id)
        {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    })
  }

  delTodo = (id) =>
  {
    // this.setState({
    //   todos: [...this.state.todos.filter(todo => todo.id !== id )]
    // })

    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res => this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id )]
    }))
  }

  addTodo=(title) =>
  {
    //This method is for adding into state offline(static)
    // const newTodo={
    //   id:uuid.v4(),
    //   title:title,
    //   completed:false
    // }
    // this.setState({todos:[...this.state.todos,newTodo]});

    //below method for post in jsonplaceholder
    axios.post('https://jsonplaceholder.typicode.com/todos',{title:title,completed:false})
    .then(res => this.setState({todos:[...this.state.todos,res.data]}))
    
  }

  componentDidMount()
  {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res => {
        this.setState({
          todos:res.data
        })
      
    })
  }
  render(){
    return(
      <Router>
      <div>
      <Header />
      <Route exact path='/' render={props => (
        <React.Fragment>
            <AddTodo addTodo={this.addTodo}/>
      <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
        </React.Fragment>
      )} />

      <Route path='/about' component={About}/>
      
      </div>
      </Router>
    );
  }
}

export default App;
