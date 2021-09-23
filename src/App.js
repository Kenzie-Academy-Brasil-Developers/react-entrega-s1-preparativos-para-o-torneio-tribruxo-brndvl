import { Students } from './components/Students';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [studentsList, setStudentsList] = useState([])

  const [choiceStudents, setChoiceStudents] = useState([])

  const randonFunc = () => {}

  const randomChoice = () => {

    const randomWitch1 = studentsList[Math.floor((Math.random() * studentsList.length))]

    const newArr = studentsList.filter((item) => item.house !== randomWitch1.house)
    const randomWitch2 = newArr[Math.floor((Math.random() * newArr.length))]

    const newArr2 = studentsList.filter((item) => item.house !== randomWitch2.house && item.house !== randomWitch1.house)
    const randomWitch3 = newArr2[Math.floor((Math.random() * newArr2.length))]

    setChoiceStudents([randomWitch1, randomWitch2, randomWitch3])
  }

  useEffect(() => {
    fetch("http://hp-api.herokuapp.com/api/characters/students")
    .then((response) => response.json())
    .then((response) => setStudentsList(response))
    .catch((err) => console.log(err))
  }, [])

  console.log(studentsList)


  return (
    <div className="App">

      <div className="App-header">
      <Students choiceStudents={choiceStudents}/>
      </div>
      <div className="div-button">
      <button onClick={randomChoice}>Sortear Bruxos</button>

      </div>

    </div>
  );
}

export default App;
