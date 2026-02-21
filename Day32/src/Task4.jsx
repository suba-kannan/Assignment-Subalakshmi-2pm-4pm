function User({ name, age }) {
  return (
    <p>
      Name: {name} | Age: {age}
    </p>
  );
}

export default function Task4() {
  return (
    <div>
      <h2>Task 4</h2>
      <User name="Suba" age={22} />
    </div>
  );
}
