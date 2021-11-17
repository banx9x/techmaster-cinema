import { Link } from "react-router-dom";
import routes from "../routers/routes";
import logo from "../assets/images/logo.jpg";
import styled from "styled-components";
import { Container, Nav, Navbar } from "react-bootstrap";
import {FaUserAlt} from "react-icons/fa"
const HeaderWrap = styled.div`
  background-color: #fff;
  .logo {
    max-width: 150px;
  }
`;
const HeaderNavbar = styled(Navbar)`
  padding: 20px 0px;
`;

const SignInBtn = styled(Link)`
  padding: 6px;
  border: 2px solid #d32521;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font: 600 18px SourceSansPro;
  color: #d32521;
`;

const NavbarToggle = styled(Navbar.Toggle)`
  &:focus{
    box-shadow: none;
  }
`
const NavbarCollapse = styled(Navbar.Collapse)`
  margin-top: 40px;
  @media(min-width: 992px){
    margin-top: 0px;
  }
`

const NavLink = styled(Link)`
  font: 600 20px SourceSansPro;
  text-transform: uppercase;
  padding: 10px 0px;
  @media(min-width: 992px){
    padding: 0 13px;
  }
`;
const Header = () => {
  return (
    <HeaderWrap>
      <Container>
        <HeaderNavbar
          bg="light"
          expand="lg"
          className="justify-content-between"
        >
          <Navbar.Brand as={Link} to={routes.home} className=" order-2 order-lg-1">
            <img src={logo} alt="logo" className="logo" />
          </Navbar.Brand>
          <NavbarToggle aria-controls="basic-navbar-nav" />
          <NavbarCollapse className="order-4 order-lg-2 justify-content-center" id="basic-navbar-nav">
            <Nav>
              <NavLink to={routes.showtimes}>Lịch chiếu theo phim</NavLink>
              <NavLink to={routes.showCinema}>Lịch chiếu theo rạp</NavLink>
              <NavLink to={routes.events}>Sự kiện</NavLink>
              <NavLink to={routes.tickets}>Vé của bạn</NavLink>
            </Nav>
          </NavbarCollapse>
          <Link to={routes.home} className="order-3 d-lg-none d-block"><FaUserAlt/></Link>
          <SignInBtn to={routes.home} className="d-none d-lg-block order-3">
            Đăng nhập
          </SignInBtn>
        </HeaderNavbar>
      </Container>
    </HeaderWrap>
  );
};

export default Header;
