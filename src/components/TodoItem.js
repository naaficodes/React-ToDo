import React, { Component } from 'react'

class TodoItem extends Component {
    getStyle=()=>
    {
        // if(this.props.item.completed)
        // {
        //     return (
        //         {
        //             textDecoration : 'line-through'
        //         }
        //     );
        // }
        // else{
        //     return(
        //         {
        //             textDecoration: 'none'
        //         }
        //     )
        // }

        //by using ternery operator
        return({
            backgroundColor:'#f4f4f4',
            textDecoration : this.props.item.completed?'line-through':'none',
            margin:0
        })
    }
    render() {
       
        return (
            <div>    
        <h6 style={this.getStyle()}><input type="checkbox" onChange={this.props.markComplete.bind(this,this.props.item.id)}/>{' '}{this.props.item.title}{' '}<button onClick={this.props.delTodo.bind(this,this.props.item.id)} style={{backgroundColor:'Red',color:'white',float:'right',widht:'100%'}}>X</button></h6>
            </div>
        )
    }
}

export default TodoItem
