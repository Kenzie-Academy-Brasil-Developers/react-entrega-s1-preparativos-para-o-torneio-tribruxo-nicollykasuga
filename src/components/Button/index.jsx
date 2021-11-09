import "./style.css";
function Button({ setIsButton, isButton }) {
  function HandleButton() {
    setIsButton(!isButton);
  }
  return (
    <>
      <button className="button" onClick={HandleButton}>
        Random
      </button>
    </>
  );
}

export { Button };
