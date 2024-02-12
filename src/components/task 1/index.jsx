import React, {useState} from "react";
function Task1() {
    const [isLarge, setIsLarge] = useState(true);
    return (
      <div>
         <p style={{ fontSize: isLarge ? '16px' : '30px' }}>
         Lorem ipsum dolor sit amet.
        </p>
        <button onClick={() => setIsLarge(!isLarge)}>
          Toggle Font Size
        </button>
      </div>

    );
  }

  export default Task1
