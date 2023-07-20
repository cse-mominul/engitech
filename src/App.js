import logo from "./logo.svg";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import routes from "./PublicRoutes/PublicRoutes";

function App() {
  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}

export default App;
