import React from "react";
import ColorList from "./ColorList.js";
import AddColorForm from "./AddColorForm.js";

export default function App() {
  const [colors, setColors] = useState(colorData);

  return (
    <>
      <AddColorForm />
      <ColorList />
    </>
  );
}