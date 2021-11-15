import Home from "../pages/home/Home";
import Location from "../pages/location/Location";
import Showtimes from "../pages/showtimes/Showtimes";
import Events from "../pages/events/Events";
import Tickets from "../pages/tickets/Tickets";
import ShowCinema from "../pages/showcinema/ShowCinema";
import routes from "./routes";
import FilmLocation from "../pages/filmLocation/FilmLocation";
import Policy from "../pages/policy/Policy";
import CineplexeList from "../pages/cineplexeLists/CineplexeList";
import AdvertisingContact from "../pages/advertisingContact/AdvertisingContact";
import FilmCinema from "../pages/filmCinema/FilmCinema";
import BookingSeat from "../pages/booking_seat/BookingSeat";

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
    },
    {
        path: routes.filmLocation,
        component: FilmLocation,
    },
    {
        path: routes.policy,
        component: Policy,
    },
    {
        path: routes.cineplexelList,
        component: CineplexeList,
    },
    {
        path: routes.advertisingContact,
        component: AdvertisingContact,
    },
    {
        path: routes.filmCinema,
        component: FilmCinema,
    },
    {
        path: routes.bookingSeat,
        component: BookingSeat,
    },
];

export default routeConfig;
