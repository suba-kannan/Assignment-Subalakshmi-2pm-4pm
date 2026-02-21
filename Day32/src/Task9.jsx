function Button({ text }) {
  return <button style={{ margin: "5px" }}>{text}</button>;
}

export default function Task9() {
  return (
    <div>
      <h2>Task 9</h2>
      <Button text="Login" />
      <Button text="Register" />
      <Button text="Logout" />
    </div>
  );
}
