function Task8() {
  const users = [
    { id: 1, name: "Suba", role: "Developer" },
    { id: 2, name: "Anu", role: "Designer" },
    { id: 3, name: "Raj", role: "Tester" },
  ];

  return (
    <div>
      <h2>8. User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.role}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Task8;
