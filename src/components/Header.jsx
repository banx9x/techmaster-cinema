import { Link } from "react-router-dom";
import routes from "../routers/routes";
import logo from "../assets/images/logo.jpg";
import styled from "styled-components";

const HeaderWrap = styled.div`
  box-sizing: border-box;
  padding: 20px 40px 20px 40px;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1400px;
  padding: 0;
  margin: 0;
`;

const SignInBtn = styled.div`
  height: 40px;
  width: 100px;
  border: 2px solid #d32521;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    font: 600 18px SourceSansPro;
    color: #d32521;
  }
`;

const Logo = styled.h1`
  width: 30%;
  box-sizing: border-box;
  padding: 0;
  img {
    width: 150px;
  }
`;

const MenuNav = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  width: 60%;
  padding: 0 5%;
`;
const MenuItem = styled.li`
  a {
    font: 600 22px SourceSansPro;
    text-transform: uppercase;
  }
`;
const Header = () => {
  return (
    <HeaderWrap>
      <HeaderContainer>
        <Logo>
          <Link to={routes.home}>
            <img src={logo} alt="logo" />
          </Link>
        </Logo>

        <MenuNav>
          <MenuItem>
            <Link to={routes.showtimes}>Lịch chiếu theo phim</Link>
          </MenuItem>
          <MenuItem>
            <Link to={routes.showCinema}>Lịch chiếu theo rạp</Link>
          </MenuItem>
          <MenuItem>
            <Link to={routes.events}>Sự kiện</Link>
          </MenuItem>
          <MenuItem>
            <Link to={routes.tickets}>Vé của bạn</Link>
          </MenuItem>
        </MenuNav>

        <div className="sign_in">
          <a href="">
            <SignInBtn>
              <span> Đăng nhập </span>
            </SignInBtn>
          </a>
        </div>
      </HeaderContainer>
    </HeaderWrap>
  );
};

export default Header;
