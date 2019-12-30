import React, { Component } from 'react'
import TodoItem from './TodoItem'

class Todos extends Component {
    render() {
        // console.log(this.props.todos);
        return (
            <div>                
                    {this.props.todos.map((todo) => 
                    { return(
                    <TodoItem key={todo.id} item={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo}/>
                    )
    })}
                
            </div>
        )
    }
}

export default Todos
