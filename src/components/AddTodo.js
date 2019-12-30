import React, { Component } from 'react'

class AddTodo extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            title:''
        }
    }

    onChange=(e)=>
    {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    onSubmit=(e)=>
    {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title:''});
    }
    render() {
        return (
            <div>
                <form style={{display:'flex'}} onSubmit={this.onSubmit}>
                    <input type="text" name="title" placeholder="Type the item..."style={{flex:10}} onChange={this.onChange} value={this.state.title}/>
                    <input type="submit" value="Add Item"  className="btn" style={{flex:2}} />
                </form>
            </div>
        )
    }
}

export default AddTodo
