
import './App.css';
import  Person from "./components/Person" ;
import Waiting from "./components/Waiting";
import React, { Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap'


export class App extends Component {
  constructor(props) {
    console.log('App constructor')
    super(props)
    this.state={ 
      show:false,
    }
    }
    tgl=()=> {
      this.setState( {show:!this.state.show})
    }
    componentDidMount(){
      console.log('App componentDidMount() ');
    }
    componentDidUpdate(){
      console.log('App componentDidUpdat');
    }
  render() {
    console.log('App render()')
    return (
      <div className="App">
        <Button onClick={ this.tgl}> { this.state.show? ' click to hide ' : 'click to show' }</Button>
        {this.state.show?<Person/> : < Waiting/>}

 </div>
       
      
    
    );
  }
}

export default App



