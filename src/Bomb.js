// your Bomb code here!

import React from 'react'

class Bomb extends React.Component {
    constructor(props){
        super()
        this.state = {secondsLeft : props.initialCount}
    }
        

    bombStateTracker = () => {
        if (this.state.secondsLeft === 0) {
            return "Boom!"
        } else {
            return `${this.state.secondsLeft} seconds left before I go boom!`
        }
    }

    render() {
        console.log(this.props.initialCount)
    
    return <h1>{this.bombStateTracker()}</h1>
    }
}


export default Bomb