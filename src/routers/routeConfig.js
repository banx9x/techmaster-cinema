import Home from "../pages/home/Home";
import Location from "../pages/location/Location";
import BookingSeat from "../pages/bookingSeat/BookingSeat";

import routes from "./routes";

const routeConfig = [
  {
    path: routes.home,
    component: Home,
  },
  {
    path: routes.cinemaLocation,
    component: Location,
  },
  {
    path: routes.bookingSeat,
    component: BookingSeat,
  },
];

export default routeConfig;
