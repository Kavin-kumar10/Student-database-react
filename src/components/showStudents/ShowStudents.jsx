import React from 'react'


const ShowStudents = ({datas,setDatas}) =>{
    const pass = {
        color:"green",
        fontSize:"30px",
        fontWeight:"bolder"
    }
    const fail = {
        color:"red",
        fontSize:"30px",
        fontWeight:"bolder"
    }
    
    return(
    <div className="ShowStudents">
        <h1 id='head-show'>Student Status Database</h1>
        <table>
            <tr>
                <th>Id</th>
                <th>Student Name</th>
                <th>Class</th>
                <th>Roll Number</th>
                <th>Age of Student</th>
                <th>Exam Status</th>
            </tr>
        
        {
        datas.map((data,index)=>{
            return(
                    <tr>
                        <td>{index+1}</td>
                        <td>{data.studentName}</td>
                        <td>{data.Class}</td>
                        <td>{data.roll}</td>
                        <td>{data.age}</td>
                        <td style={(data.status == "Pass")?pass:fail}>{data.status}</td>
                    </tr>
            )}
        )}
        </table>
    </div>
    )
}

export default ShowStudents