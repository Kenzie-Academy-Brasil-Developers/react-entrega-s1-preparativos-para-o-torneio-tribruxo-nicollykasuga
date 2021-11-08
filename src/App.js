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
        {!!students.length && (
          <MenuContainer
            students={students}
            isButton={isButton}
            setIsButton={setIsButton}
          />
        )}
      </header>
    </div>
  );
}

export default App;
