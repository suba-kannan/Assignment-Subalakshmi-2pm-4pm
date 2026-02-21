function ProfileCard({ name, role, email }) {
  return (
    <div style={{ border: "1px solid gray", width: "250px", padding: "10px" }}>
      <h3>{name}</h3>
      <p>{role}</p>
      <p>{email}</p>
    </div>
  );
}

export default function Task8() {
  return (
    <div>
      <h2>Task 8</h2>
      <ProfileCard
        name="Suba"
        role="Frontend Developer"
        email="suba@email.com"
      />
    </div>
  );
}
