import React, { Component } from 'react'

export class Waiting extends Component {
    render() {
        return (
            < div className="loading">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
   </div>
        )
    }
}

export default Waiting
