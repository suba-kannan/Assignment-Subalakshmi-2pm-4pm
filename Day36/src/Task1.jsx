import { useEffect } from "react";

function Task1() {
  useEffect(() => {
    console.log("Runs once on mount");
  }, []);

  return <h2>1. useEffect runs once (check console)</h2>;
}

export default Task1;
