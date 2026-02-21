import { useState, useEffect } from "react";

function Task9() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <h2>9. Window Resize</h2>
      <p>Width: {width}</p>
    </div>
  );
}

export default Task9;