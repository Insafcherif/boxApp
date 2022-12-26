import React, { useState } from "react";
import FormComp from "./Components/FormComp";
import BoxCompt from "./Components/BoxCompt"

function App() {
  const [boxColor, setBoxColor] = useState([]);

  return (
    <div className="App">
      <FormComp boxColor={boxColor} setBoxColor={setBoxColor}/>
      <BoxCompt boxColor={boxColor}  />
    </div>
  );
}

export default App;
