import React , {Component} from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import MyPortfolioMain from './components/MyPortfolioMain';
import Header from './components/Header';
import Projects from './components/Projects';
import TechnicalSkills from './components/TechnicalSkills'
import Experience from './components/Experience'
import Education from './components/Education'
import 'bootstrap/dist/css/bootstrap.min.css';//this is from node modules jfyi

import './App.css';



class App extends Component{
  render(){
    return(
      <Router>
      <div className="App">
         
        <Header branding ="Welcome Guest"/>
        
        <div className="container">
        <Switch>  
         <Route exact path="/">
        <MyPortfolioMain name = "Gundeep Singh"/>
        <TechnicalSkills/>
        <Education/>
        <Experience/>
        </Route> 
        <Route exact path = '/projects' component = {Projects}/>
        </Switch>
        </div>
        
      </div>
      </Router>
    )
  }
}

export default App;
