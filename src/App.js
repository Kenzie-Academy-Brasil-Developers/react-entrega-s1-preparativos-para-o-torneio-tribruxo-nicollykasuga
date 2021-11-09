import { MenuContainer } from "./components/MenuContainer/index";
import { Button } from "./components/Button/index";
import { useEffect } from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const [students, setStudents] = useState([]);
  const [isButton, setIsButton] = useState(true);
  useEffect(() => {
    fetch("https://hp-api.herokuapp.com/api/characters/students")
      .then(response => response.json())
      .then(response => setStudents(response))
      .catch(err => console.log(err));
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="Title">Torneio Tribruxo</h1>
        {!!students.length && (
          <div>
            <MenuContainer students={students} isButton={isButton} />
            <Button setIsButton={setIsButton} isButton={isButton}></Button>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
