function Task4() {
  const isAdmin = true;

  return (
    <div>
      <h2>4. && Operator</h2>
      {isAdmin && <p>Welcome Admin!</p>}
    </div>
  );
}

export default Task4;
