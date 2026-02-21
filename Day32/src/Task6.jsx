function Card({ children }) {
  return (
    <div style={{ border: "1px solid black", padding: "10px" }}>{children}</div>
  );
}

export default function Task6() {
  return (
    <div>
      <h2>Task 6</h2>
      <Card>
        <h3>This is inside Card</h3>
        <p>Children props example</p>
      </Card>
    </div>
  );
}
