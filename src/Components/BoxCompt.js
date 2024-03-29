import React from "react";

function BoxCompt(boxColor) {
  return (
    <div>
      {boxColor.map((color, index) => (
        <div
          key={index}
          style={{
            display: "inline-block",
            margin: "10px",
            height: "50px",
            width: "50px",
            backgroundColor: color,
          }}
        ></div>
      ))}
    </div>
  );
}

export default BoxCompt;
