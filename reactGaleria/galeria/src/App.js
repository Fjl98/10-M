import React from "react";
import { Component } from "react";
import PhotoContextProvider from "./context/PhotoContext";
import Header from "./Components/Header";
import Item from "./Components/item";
import Search from "./Components/search";
import NotFound from "./Components/NotFound";
import { Router } from "express";
import {HashRouter, Routes, Switch, Navigate} from "react-router-dom"

class App extends Component{
  handleSubmit = (e,history,searchInput) => {
    e.preventDefault();
e.currentTarget.reset();
    let url=`/search/${searchInput}`;
    history.push(url);
  }
  render(){
    return(<PhotoContextProvider>
      <HashRouter basename="SnapScout">
        <div>
        <Routes
              render={props => (
                <Header
                  handleSubmit={this.handleSubmit}
                  history={props.history}
                />
              )}
            />
<Switch>
          <Routes exact path="/" render={()=><Navigate to="/mountain"></Navigate>}>
          </Routes>

          <Routes  path="/mountain" render={()=><Item searchTerm="mountain"></Item>}>
          </Routes>
          <Routes  path="/bird" render={()=><Item searchTerm="bird"></Item>}>
          </Routes>
          <Routes  path="/beach" render={()=><Item searchTerm="beach"></Item>}>
          </Routes>
          <Routes  path="/food" render={()=><Item searchTerm="food"></Item>}>
          </Routes>
            
            <Routes Component={NotFound}></Routes>
          </Switch>
        </div>
      </HashRouter>
    </PhotoContextProvider>)
  }
}
export default App;
