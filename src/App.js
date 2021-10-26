import { Students } from "./components/Students";
import "./App.css";
import { useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";

function App() {
  const [studentsList, setStudentsList] = useState([]);

  const [choiceStudents, setChoiceStudents] = useState([]);

  const randomChoice = () => {
    const randomWitch1 =
      studentsList[Math.floor(Math.random() * studentsList.length)];

    const newArr = studentsList.filter(
      (item) => item.house !== randomWitch1.house
    );
    const randomWitch2 = newArr[Math.floor(Math.random() * newArr.length)];

    const newArr2 = studentsList.filter(
      (item) =>
        item.house !== randomWitch2.house && item.house !== randomWitch1.house
    );
    const randomWitch3 = newArr2[Math.floor(Math.random() * newArr2.length)];

    setChoiceStudents([randomWitch1, randomWitch2, randomWitch3]);
    toast.success(
      `Os Bruxos sorteados foram ${randomWitch1.name}, ${randomWitch2.name} e ${randomWitch3.name}!`
    );
  };

  useEffect(() => {
    fetch("https://hp-api.herokuapp.com/api/characters/students")
      .then((response) => response.json())
      .then((response) => setStudentsList(response))
      .catch((err) => console.log(err));
  }, []);

  console.log(studentsList);

  return (
    <div className="App">
      <Toaster position="bottom-left" />
      <h1>Preparativos para o Torneiro Tribruxo</h1>
      <div className="App-header">
        <Students choiceStudents={choiceStudents} />
      </div>
      <div className="div-button">
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={randomChoice}
        >
          Sortear Bruxos
        </Button>
      </div>
    </div>
  );
}

export default App;
