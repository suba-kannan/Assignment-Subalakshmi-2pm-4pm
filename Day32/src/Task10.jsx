function Child() {
  return <p>I am Child Component</p>;
}

function Parent() {
  return (
    <div>
      <h3>I am Parent Component</h3>
      <Child />
    </div>
  );
}

export default function Task10() {
  return (
    <div>
      <h2>Task 10</h2>
      <Parent />
    </div>
  );
}
