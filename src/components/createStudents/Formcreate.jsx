import React from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Form from 'react-bootstrap/Form'


const Formcreate = ({label,type,value,set}) =>{
    
    return(
        <div className="Formcreate">
                <FloatingLabel
                controlId="floatingInput"
                label={label}
                className="mb-3"
                >
                    <Form.Control type={type} placeholder = {label} value = {value} onChange={(e)=>{set(e.target.value)}}/>
                </FloatingLabel>
        </div>
    )
}

export default Formcreate