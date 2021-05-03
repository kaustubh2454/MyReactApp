import React from 'react';
import Button from 'react-bootstrap/Button'
import { BsFillPlusCircleFill } from 'react-icons/bs'

const AddButton = () =>
(
    <div style = {{ float : "left"}}>
        <Button variant="danger" >

            <BsFillPlusCircleFill />
            <span>{' '}Add Todo</span>

        </Button>
    </div>


);

export default AddButton


