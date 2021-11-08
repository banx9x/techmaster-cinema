import Home from "../pages/home/Home";
import Location from "../pages/location/Location";

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
];

export default routeConfig;
