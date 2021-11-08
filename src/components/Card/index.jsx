import "./style.css";
function Card({ students }) {
  return (
    <div className="Cards">
      <div className="container" key={students.name}>
        <p>{students.name}</p>
        <p>{students.house}</p>
        <p>{students.species}</p>
      </div>
    </div>
  );
}

export { Card };
