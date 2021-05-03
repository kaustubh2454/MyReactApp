import React, { Component} from 'react'


// Arrow function component
// const Greet = () => <h1> hello from arrow function </h1>

//Nomal function class componnet
// function Greet(){
//     return <h1> hello world!</h1>
// }


class Greeting extends Component {

    render() {
        return <h1> Greeting from class components !</h1>
    }

}

export default Greeting;