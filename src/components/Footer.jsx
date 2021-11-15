import { Link } from "react-router-dom";
import routes from "../routers/routes";
import logo from "../assets/images/logo.jpg";
import social from "../assets/images/social.png";
import styled from "styled-components";

const FooterWrap = styled.div`
  padding: 40px 0px 40px 0px;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

const FooterSocial = styled.div`
  width: 50%;
  img {
    width: 200px;
  }
  .logo-img {
    padding-bottom: 40px;
    display: block;
  }
`;
const FooterCol = styled.div`
  width: 25%;
  a {
    display: block;
    font: 600 22px SourceSansPro;
    color: #000;
    text-transform: uppercase;
    padding: 0px 0px 20px 20px;
  }
`;

const FooterContainer = styled.div`
  width: 980px;
  padding: 0;
  margin: 0;
  display: flex;
`;

const Footer = () => (
  <FooterWrap>
    <FooterContainer>
      <FooterSocial>
        <Link to="/" className="logo-img">
          <img src={logo} />
        </Link>
        <div className="social-img">
          <img src={social} />
        </div>
      </FooterSocial>
      <FooterCol>
        <Link to={routes.showtimes}>Lịch chiếu theo phim</Link>
        <Link to={routes.showCinema}>Lịch chiếu theo rạp</Link>
        <Link to={routes.tickets}>Vé của tôi</Link>
        <Link to={routes.events}>Sự kiện</Link>
      </FooterCol>
      <FooterCol>
        <Link to={routes.policy}>Chính sách</Link>
        <Link to={routes.cineplexelList}>Danh sách cụm rạp</Link>
        <Link to={routes.advertisingContact}>Liên hệ quảng cáo</Link>
      </FooterCol>
    </FooterContainer>
  </FooterWrap>
);
export default Footer;