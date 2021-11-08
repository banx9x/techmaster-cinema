import Home from "../pages/home/Home";
import Location from "../pages/location/Location";
import Showtimes from "../pages/showtimes/Showtimes";
import Events from "../pages/events/Events";
import Tickets from "../pages/tickets/Tickets"
import ShowCinema from "../pages/showcinema/ShowCinema";
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
        path: routes.showtimes,
        component: Showtimes,
    },
    {
        path: routes.events,
        component: Events,
    },
    {
        path: routes.tickets,
        component: Tickets,
    },
    {
        path: routes.showCinema,
        component: ShowCinema,
    }
];

export default routeConfig;
