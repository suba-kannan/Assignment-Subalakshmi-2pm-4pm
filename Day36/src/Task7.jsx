import { useEffect, useState } from "react";

function Task7() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const mockData = ["Item 1", "Item 2", "Item 3"];
    setData(mockData);
  }, []);

  return (
    <div>
      <h2>7. Fetch Mock Data</h2>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Task7;
