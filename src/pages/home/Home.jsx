import styled from "styled-components";
import Banner from "../../components/Banner";
import FilmTabsNav from "../../components/filmTabs/FilmTabs";
import { Col, Container, Row } from "react-bootstrap";

const Content = styled.div`
  padding: 40px 0px;
`;
const Home = () => (
  <Content>
    <Container>
      <Row className="justify-content-center">
        <Col lg={9} xs={12}>
          <>
            <Banner />
            <FilmTabsNav />
          </>
        </Col>
      </Row>
    </Container>
  </Content>
);

export default Home;
