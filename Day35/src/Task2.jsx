import { useState } from "react";

function Task2() {
  const [form, setForm] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>2. Multiple Inputs</h2>
      <input name="name" onChange={handleChange} placeholder="Name" />
      <input name="email" onChange={handleChange} placeholder="Email" />
      <p>
        {form.name} - {form.email}
      </p>
    </div>
  );
}

export default Task2;
