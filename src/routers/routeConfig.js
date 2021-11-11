import Home from "../pages/home/Home";
import Location from "../pages/location/Location";
import Booking from "../pages/booking_seat/BookingSeat";

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
        path: routes.booking,
        component: Booking,
    },
];

export default routeConfig;
