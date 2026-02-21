function Task2() {
  const cities = ["Chennai", "Delhi", "Mumbai", "Bangalore", "Hyderabad"];

  return (
    <div>
      <h2>2. City List</h2>
      <ul>
        {cities.map((city) => (
          <li>{city}</li>
        ))}
      </ul>
    </div>
  );
}

export default Task2;
