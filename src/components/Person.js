import React, { Component } from 'react'
import image from '../image/images.jpg';


export class Person  extends Component {
constructor(){
    console.log('Person constructor ()');
    super()
    this.state = {
        fullName:' Imen Amara',
        prof:' web developer',
        bio:'elle travaille depuis 4 ans dans une entreprise de vente des electroménager a Sfax',
        intervall:null,
        time:0,
    }
}
componentDidMount(){
    console.log('Person componentDidMount()');
    setInterval(()=>{this.setState
     ({time:this.state.time + 1})
         } ,1000)
     }  
        
    
    

componenentDidUpdate() { 
    console.log(" Person componenentDidUpdate()")
}

componentWillUnmount(){
    console.log('person componentWillUnmount() ')
   // clearInterval(this.state.intervall)
}
    render() {
        console.log('Person render ()')
        return (
            <div className="Person">
                <h2>{this.state.time}</h2>
                <div className='box'>
                <div className='box1 '>
                    <h1>{this.state.fullName}</h1>
                    <h4>{this.state.prof}</h4>
                    <p>{this.state.bio}</p>
                 </div>   
              <img src={image} alt='her'></img>
            </div>
            </div>

        )
    }
}

export default Person 
