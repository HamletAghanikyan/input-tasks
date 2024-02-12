import React, { useState } from "react";
function Task3() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  return (
    <>
      <div>
        <span>Clicks {count}</span>
        <button onClick={increment}>+</button>
      </div>
    </>
  );
}
export default Task3;