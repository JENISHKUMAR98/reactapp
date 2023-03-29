import React , {Component} from 'react'

class Welcome1 extends Component {
    render(){
        const { name, heroName} = this.props
       // const {state1, state2} =this.state
        return<h1>Class Component {name}</h1>
    }
}

export default Welcome1

// Destructuring props and state