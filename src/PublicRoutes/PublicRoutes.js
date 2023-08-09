import Aboutus from "../Pages/AboutUs/Aboutus";
import AccessControl from "../Pages/AccessControl/AccessControl";
import Bms from "../Pages/BMS/BMS";
import Datacenter from "../Pages/Datacenter/Datacenter";
import Itsystem from "../Pages/ItsystemIntegration/Itsystem";
import SmartCity from "../Pages/SmartCIty/SmartCity";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layout/Main/Main");
const { default: ErrorPage } = require("../Pages/ErrorPage/ErrorPage");
const { default: Home } = require("../Pages/Home/Home");

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/data-center-services",
        element: <Datacenter></Datacenter>,
      },
      {
        path: "/it-system-integration",
        element: <Itsystem></Itsystem>,
      },
      {
        path: "/about-us",
        element: <Aboutus></Aboutus>,
      },
      {
        path: "/access-control",
        element: <AccessControl></AccessControl>,
      },
      {
        path: "/smart-city",
        element: <SmartCity></SmartCity>,
      },
      {
        path: "/B-M-S",
        element: <Bms></Bms>,
      },
    ],
  },
]);
export default routes;
