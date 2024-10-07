import './App.css';
import { RouterProvider } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import router from "./Router/router";

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
