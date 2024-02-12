import React, { useState } from "react";

function Task2() {
  const [hideText, setHideText] = useState(false);

  return (
    <div>
      {hideText ? null: <p>Lorem ipsum dolor sit amet.</p> }
      <button onClick={() => setHideText(!hideText)}>Click me</button>
      
    </div>
  );
}

export default Task2;
