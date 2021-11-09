import { useEffect, useState } from "react";
import { Card } from "../Card/index";
function MenuContainer({ students, isButton }) {
  const [wizards, setWizards] = useState([]);

  function randomNumber(arrayLength) {
    let number = Math.floor(Math.random() * arrayLength);
    return number;
  }

  function randoWizard() {
    const tribruxo = [];
    const wizardOne = students.filter(students => {
      return students.house === "Gryffindor";
    });

    const wizardTwo = students.filter(students => {
      return students.house === "Hufflepuff";
    });

    const wizardThree = students.filter(students => {
      return students.house === "Slytherin" || students.house === "Ravenclaw";
    });

    tribruxo.push(
      wizardOne[randomNumber(wizardOne.length)],
      wizardTwo[randomNumber(wizardTwo.length)],
      wizardThree[randomNumber(wizardThree.length)]
    );
    console.log(tribruxo);
    setWizards(tribruxo);
  }

  useEffect(() => {
    randoWizard();
  }, [isButton]);
  console.log(wizards);
  return (
    <>
      {wizards.map((item, index) => {
        return <Card key={index} students={item}></Card>;
      })}
    </>
  );
}
export { MenuContainer };
