import { ShowingFilmsContext } from "./filmTabs/ShowingFilms";
import FilmItem from "./FilmItem";
import styled from "styled-components";
import { Col, Row } from "react-bootstrap";

const Films = styled(Row)`
  padding: 0 0 20px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  --bs-gutter-y: 30px;
  --bs-gutter-x: 30px;
  @media(min-width: 992px){
    --bs-gutter-y: 60px;
  }
`;

const FilmList = () => (
  <Films>
    <ShowingFilmsContext.Consumer>
      {(value) =>
        value.films.map((film) => (
          <Col xs={12} key={film.id} md={6} lg={4}>
            <FilmItem film={film}  />
          </Col>
        ))
      }
    </ShowingFilmsContext.Consumer>
  </Films>
);

export default FilmList;
