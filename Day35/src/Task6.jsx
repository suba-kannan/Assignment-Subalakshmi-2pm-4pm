import { useState } from "react";

function Task6() {
  const [form, setForm] = useState({ email: "", password: "" });

  return (
    <div>
      <h2>6. Login Form</h2>
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />
      <p>
        {form.email} - {form.password}
      </p>
    </div>
  );
}

export default Task6;
