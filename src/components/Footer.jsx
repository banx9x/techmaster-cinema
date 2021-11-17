import { Link } from "react-router-dom";
import routes from "../routers/routes";
import logo from "../assets/images/logo.jpg";
import styled from "styled-components";
import { Col, Container, Row } from "react-bootstrap";
import youtube from "../assets/images/icons8-youtube.svg"
import facebook from "../assets/images/icons8-facebook-f.svg"
import twitter from "../assets/images/icons8-twitter.svg"
import instagram from "../assets/images/icons8-instagram.svg"
const FooterWrap = styled.div`
  padding: 40px 0px 40px 0px;
  background-color: #fff;
  img {
    width: 200px;
  }
`;
const FooterRow = styled(Row)`
  --bs-gutter-y: 30px;
`
const FooterLogo = styled(Link)`
  padding-bottom: 40px;
  display: block;
`;

const FooterLink = styled(Link)`
  display: block;
  font: 600 22px SourceSansPro;
  color: #000;
  text-transform: uppercase;
  padding: 0px 0px 20px 20px;
`;

const SocialList = styled.div`
  display: flex;
  img{
    width: 40px;
  }
`
const Footer = () => (
  <FooterWrap>
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} lg={9}>
          <FooterRow>
            <Col xs={12} lg={4}>
              <FooterLogo to="/" className="logo-img">
                <img src={logo} />
              </FooterLogo>
              <SocialList>
                <a target="_blank" href='https://www.facebook.com/'>
                <img src={facebook} alt="facebook" />
                </a>
                <a target="_blank" href='https://www.instagram.com/'>
                <img src={instagram} alt="instagram" />
                </a>
                <a target="_blank" href='https://www.twitter.com/'>
                <img src={twitter} alt="twitter" />
                </a>
                <a target="_blank" href='https://www.youtube.com/'>
                <img src={youtube} alt="youtube" />
                </a>
              </SocialList>
            </Col>

            <Col xs={12} lg={4}>
              <FooterLink to={routes.policy}>Chính sách</FooterLink>
              <FooterLink to={routes.cineplexelList}>
                Danh sách cụm rạp
              </FooterLink>
              <FooterLink to={routes.advertisingContact}>
                Liên hệ quảng cáo
              </FooterLink>
            </Col>

            <Col xs={12} lg={4}>
              <FooterLink to={routes.showtimes}>
                Lịch chiếu theo phim
              </FooterLink>
              <FooterLink to={routes.showCinema}>
                Lịch chiếu theo rạp
              </FooterLink>
              <FooterLink to={routes.tickets}>Vé của tôi</FooterLink>
              <FooterLink to={routes.events}>Sự kiện</FooterLink>
            </Col>
          </FooterRow>
        </Col>
      </Row>
    </Container>
  </FooterWrap>
);
export default Footer;
