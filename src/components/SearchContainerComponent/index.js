import React, { Component } from "react";
import axios from "axios";
import Search from "./SearchComponent"

export default class SearchContainer extends Component {
    state = {
        query: "",
        results: []
      }
  
      handleSubmit = (e) => {
        e.preventDefault();

        axios.get(`http://api.giphy.com/v1/gifs/search?q=${this.state.query}&api_key=U5t90p3Q5afvhwjlsBd0VC3vMBJwkXaT&limit=20 `).then(
            ({data}) => {
                this.setState({results:data.data});
            }
        );

  
      }
  
      handleChange = (e) => {
        let {name,value} = e.target;
        this.setState({[name]: value});
        // Brackets allow you to pass variables as keys.  
      }
  
      render() {
        let {query,results} = this.state;
        return(
            <main>
                <div className="header">
                    <h1>Giphy Search</h1>
                    <form onSubmit={this.handleSubmit}>
                    <input type="text" name="query" value={query} onChange={this.handleChange}></input>
                    <input type="submit" value="Search"></input>
                    </form>
                    
                </div>
                <Search results={results} />
          </main>
        );
      };


}