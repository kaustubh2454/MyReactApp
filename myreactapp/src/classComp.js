import React, { Component } from 'react';

class classComp extends Component {

    constructor(props) {
        super(props)

        this.state = {
            msg: "Default msg from state!!",
            count : 0
        }
    }

    changeMsg(){

        this.setState( { msg : "Value of state changed.", count : this.state.count + 1 }, () => console.log("Value changed"))
    }

    render() {
        return (
            <div>
                <p> {this.state.msg} <span> {this.state.count }</span> </p>
                <button onClick = {() => this.changeMsg()}>changeMsg</button>
            </div>
        )
    }
}


export default classComp