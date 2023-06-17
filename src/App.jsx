import { useState } from "react";
// Write your Color component here

const Color = ({ color, setSelectedColor }) => {
  return <div className={color} onClick={() => setSelectedColor(color)}></div>;
};

const App = () => {
  const [selectedColor, setSelectedColor] = useState("");
  return (
    <div id="container">
      <div id="navbar">
        <div>your selection is: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list">
        <Color color="green" setSelectedColor={setSelectedColor} />
        <Color color="blue" setSelectedColor={setSelectedColor} />
        <Color color="violet" setSelectedColor={setSelectedColor} />
        <Color color="red" setSelectedColor={setSelectedColor} />
        <Color color="white" setSelectedColor={setSelectedColor} />
        <Color color="yellow" setSelectedColor={setSelectedColor} />
        <Color color="black" setSelectedColor={setSelectedColor} />
        <Color color="orange" setSelectedColor={setSelectedColor} />
      </div>
    </div>
  );
};

export default App;
