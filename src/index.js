import React from "react";
import { createRoot } from "react-dom/client";
import data from "../data/recipes.json";
import Menu from "./components/Menu";

// Warning: ReactDOM.render is no longer supported in React 18.
// Use createRoot instead. Until you switch to the new API, 
// your app will behave as if it's running React 17.
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Menu recipes={data} />);