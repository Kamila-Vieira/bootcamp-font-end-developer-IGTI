import React, { useState, useEffect } from "react";
//import ProjetoBase from "./components/ProjetoBase/ProjetoBase";
import { formatedDate } from "./helpers/formatDateAndTime";

export default function App() {
  const [clickArray, setClickArray] = useState([]);
  useEffect(() => {
    document.title = clickArray.length;
  });

  const handleButtonClick = () => {
    const newClickArray = Object.assign([], clickArray);
    newClickArray.push(formatedDate());
    setClickArray(newClickArray);
  };

  return (
    <div>
      <h4>
        React com <em>Hooks</em>
      </h4>
      <button onClick={handleButtonClick}>Clique-me!</button>
      <ul>
        {clickArray.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
}
