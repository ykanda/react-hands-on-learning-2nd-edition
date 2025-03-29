import React, { createContext } from "react";
// recipe
// import { createRoot } from "react-dom/client";
// import data from "../data/recipes.json";
// import Menu from "./components/Menu";

// color
import colors from "./color-data"
import ColorProvider from "./ColorProvider";
import { render } from "react-dom";
import App from "./App.js"



// Warning: ReactDOM.render is no longer supported in React 18.
// Use createRoot instead. Until you switch to the new API, 
// your app will behave as if it's running React 17.
const container = document.getElementById("root");
const root = createRoot(container);
// root.render(<Menu recipes={data} />);


// Color
export const ColorContext = createContext();
render(
  <ColorProvider>
    <App />
  </ColorProvider>,
  document.getElementById("root")
)