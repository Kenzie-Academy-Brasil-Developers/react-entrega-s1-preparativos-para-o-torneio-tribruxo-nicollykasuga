function Button({ setIsButton, isButton }) {
  return (
    <>
      <button onClick={() => setIsButton(!isButton)}></button>
    </>
  );
}

export { Button };
