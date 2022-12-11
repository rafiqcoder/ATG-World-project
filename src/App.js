import {
  RouterProvider
} from "react-router-dom";
import './App.css';
import Router from "./Route/Router";

function App() {


  return (
    <RouterProvider router={Router} />
  );
}

export default App;
