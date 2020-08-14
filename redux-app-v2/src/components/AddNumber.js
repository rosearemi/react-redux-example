import React, { useState } from "react";

const AddNumber = (props) => {
  const [size, setSize] = useState(1);

  return (
    <div>
      <h1>Add Number</h1>
      <input type="button" value="+" onClick={() => props.handleAdd(size)} />
      <input
        type="text"
        value={size}
        onChange={(e) => setSize(Number(e.target.value))}
      />
    </div>
  );
};

export default AddNumber;
