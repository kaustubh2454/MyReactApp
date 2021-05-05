import React , { Component } from 'react';
import Button from 'react-bootstrap/Button'
import { BsFillPlusCircleFill } from 'react-icons/bs'



class AddButton extends Component {

    constructor(props) {
        super(props)
    
        this.state = {

             Count : 3
        }
    }

    AddTodo(){

        this.setState({Count : this.state.Count + 1 })
    }

    render(){

        return (

            <div style = {{ float : "left"}}>
            <Button variant="danger" onClick = { () => this.AddTodo() } >
    
                <BsFillPlusCircleFill />
                <span>{' '}Add Todo</span>
    
            </Button>
            <span> Todo Count : { this.state.Count }</span>
        </div>
        );
    }

}



export default AddButton


