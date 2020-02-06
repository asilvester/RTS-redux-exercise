// http://hn.algolia.com/api/v1/search?query=

import React, { Component } from 'react';
// AddNinja.JS

class Searchbar extends Component {
    state = {
        name: null,
        age: null,
        belt: null,
    }

    

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.props)
        // console.log(this.state)
        // this.props.addNinja(this.state);
        // this.props.testfunction('hello')
    }

    render() {
        return(
            <div>
                <p>hello from search bar component</p>

                <form onSubmit={this.handleSubmit}>                  
                    <label htmlFor='name'>Name:</label>
                    <input type='text' id='name' onChange={this.handleChange}></input>                   
                     <label htmlFor='age'>age:</label>
                    <input type='text' id='age' onChange={this.handleChange}></input>                    
                    <label htmlFor='belt'>belt:</label>
                    <input type='text' id='belt' onChange={this.handleChange}></input>    
                    <button >Submit</button>                
                </form>


            </div>

        )
    }
}



export default Searchbar;
