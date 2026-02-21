import { useEffect } from "react";

function Task5() {
  useEffect(() => {
    console.log("First effect");
  }, []);

  useEffect(() => {
    console.log("Second effect");
  }, []);

  return <h2>5. Check Console for Order</h2>;
}

export default Task5;
