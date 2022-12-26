import React, { useState } from "react";

function FormComp({boxColor}, {setBoxColor}) {
  const [color, setColor] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setBoxColor([...boxColor, color]);
  };
  return (
    <div>
      <form onSubmit={handleSubmit} style={{ margin: "100 px" }}>
        <div>
          <label htmlFor="Color">Color</label>
          <input
            type="text"
            name="Color"
            onChange={(e) => setColor(e.target.value)}
          />
        </div>
        <button onSubmit={handleSubmit}>Add</button>
      </form>
    </div>
  );
}

export default FormComp;
