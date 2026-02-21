function Task6() {
  const todos = ["Learn React", "Practice JS", "Build Project"];

  return (
    <div>
      <h2>6. Todo List</h2>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default Task6;
