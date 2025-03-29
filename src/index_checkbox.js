import React, { createContext } from "react";
import Checkbox from "./Checkbox";

// Warning: ReactDOM.render is no longer supported in React 18.
// Use createRoot instead. Until you switch to the new API, 
// your app will behave as if it's running React 17.
const container = document.getElementById("root");
const root = createRoot(container);

render(
    <Checkbox />,
    document.getElementById("root")
)