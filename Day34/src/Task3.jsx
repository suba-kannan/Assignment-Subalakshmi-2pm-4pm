function Task3() {
  const cities = ["Chennai", "Delhi", "Mumbai", "Bangalore", "Hyderabad"];

  return (
    <div>
      <h2>3. City List with Keys</h2>
      <ul>
        {cities.map((city, index) => (
          <li key={index}>{city}</li>
        ))}
      </ul>
    </div>
  );
}

export default Task3;
