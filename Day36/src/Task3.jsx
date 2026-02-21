import { useEffect } from "react";

function Task3() {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Running...");
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log("Timer cleaned");
    };
  }, []);

  return <h2>3. Timer with Cleanup (check console)</h2>;
}

export default Task3;
