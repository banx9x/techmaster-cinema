import { Link, Route, Switch } from "react-router-dom";
import "./header.css"
import routes from "../../routers/routes";

import logo from "../../assets/images/logo.jpg";

const Header = () => {
    return (
        <div className="header_container">
            <div className="logo">
                <Link to={routes.home}>
                    <img src={logo} alt="logo" />
                </Link>
            </div>

            <div className="nav">
                <ul className="menu">
                    <li className="menu__item">
                        <Link to={routes.showtimes}>Lịch chiếu theo phim</Link>
                    </li>
                    <li className="menu__item">
                        <Link to={routes.showCinema}>Lịch chiếu theo rạp</Link>
                    </li>
                    <li className="menu__item">
                        <Link to={routes.events}>Sự kiện</Link>
                    </li>
                    <li className="menu__item">
                        <Link to={routes.tickets}>Vé của bạn</Link>
                    </li>
                </ul>
            </div>

            <div className="sign_in">
                <a href="">
                    <div className="sign_in_btn">
                        <span> Đăng nhập </span>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default Header;
