import React,{useState} from 'react'
import CreateStudents from './components/createStudents/CreateStudents.jsx'
import ShowStudents from './components/showStudents/ShowStudents.jsx'
import './App.css';

function App() {
  const [datas,setDatas] = useState([

  ])

  return (
    <div className="App">
      <center>
      <ShowStudents datas = {datas} setDatas = {setDatas} />
      <CreateStudents datas={datas} setDatas = {setDatas} />
      </center>
    </div>
  );
}

export default App;
