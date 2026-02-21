function Student(props) {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Course: {props.course}</p>
    </div>
  );
}

export default function Task5() {
  return (
    <div>
      <h2>Task 5</h2>
      <Student name="Suba" course="React" />
    </div>
  );
}
