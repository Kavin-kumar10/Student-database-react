import React,{useState} from 'react'
import Formcreate from './Formcreate'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


const CreateStudents = ({datas,setDatas}) =>{
    const [studentName,setStudentName] = useState("");
    const [Class,setClass] = useState("");
    const [roll,setRoll] = useState("");
    const [age,setAge] = useState();
    const [status,setStatus] = useState("");


    console.log(datas)
    const handleSubmit = (e) =>{
        e.preventDefault();
        const blogs = {studentName,Class,status,roll,age};
        setDatas([...datas,blogs]);
        setClass("");
        setStudentName("");
        setRoll("")
        setAge("");
        setStatus();
    }
    return(
        <div className="CreateStudents">
                <form>
                    <h1 style={{color:"dodgerblue",padding:"25px",fontSize:"60px",textAlign : "center"}}>Create New Student Database</h1>
                    <Formcreate label="Student Name" type="text" value = {studentName} set={setStudentName}/>
                    <Formcreate label="Class" type="text" value = {Class} set = {setClass} />
                    <div className="split">
                        <Formcreate label="Roll-Number" type="text" value={roll} set = {setRoll}/>
                        <Formcreate label="Age" type="number" value={age} set = {setAge}/>
                    </div>
                    <center>
                    <Form.Select value={status}  onChange={(e)=>setStatus(e.target.value)} aria-label="Floating label select example" id='form-select'>
                        <option>Student Status</option>
                        <option value="Pass">Pass</option>
                        <option value="Fail">Fail</option>
                    </Form.Select>
                    <Button onClick={handleSubmit} style={{margin:"25px",fontSize:"25px",padding:"12px"}}>Submit Student Details</Button>

                    </center>
                </form>
        </div>
    )
}

export default CreateStudents