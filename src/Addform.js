import React from 'react';
 

class Addform extends React.Component {

    state={
        content:''
    }
    handleChange = (e) => {
       this.setState({
           content: e.target.value
       }) 
    }
    handleSubmt = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            content:''
        })
        

    }
    render(){
        return(
            <div>

            <form onSubmit={this.handleSubmt}>
                <label> Add New Todo</label> 
                <input type="text" onChange={this.handleChange} value={this.state.content} />
            </form>
            </div>

            )
    }

}

export default Addform;