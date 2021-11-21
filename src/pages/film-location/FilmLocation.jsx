import { useParams } from "react-router";
import styled from "styled-components";
import { films } from "../../components/filmTabs/ShowingFilms";
import FilmLocationInfo from "../../components/FilmLocationInfo";
import {
  DateIcon,
  DateText,
  FilmDateTabs,
} from "../../components/FilmDateTabs";
import { SelectAreaList } from "../../components/SelectAreaList";
import { Col, Container, Row } from "react-bootstrap";

const FilmContainer = styled.div`
  display: flex;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 200px;
`;

const FilmRow = styled(Row)`
  --bs-gutter-x: 80px;
  --bs-gutter-y: 80px;
`
const FilmBooking = styled.div`
  .nav {
    border: 0;
    .nav-link {
      border: 0;
      &.active {
        background-color: unset;
        ${DateIcon} {
          background-color: #d32521;
          color: #fff;
        }
        ${DateText} {
          color: #d32521;
        }
      }
    }
  }
`;

const SelectArea = styled.div`
  padding: 30px 0px;
`;

const AreaTitle = styled.div`
  font: 600 20px SourceSansPro;
  margin-right: 30px;
`;

const FilmLocation = () => {
  const filmId = useParams();
  const film = films.find((f) => f.id == filmId.id);
  
  const Content = styled.div`
    padding: 40px 0px;
  `
  return (
   <Content>
      <Container>
      <FilmRow>
        <Col xs={12} lg={3}>
          <FilmLocationInfo film={film} />
        </Col>
        <Col xs={12} lg={9}>
          <FilmBooking>
            <FilmDateTabs />
            <SelectArea>
              <AreaTitle>Chọn khu vực</AreaTitle>
            </SelectArea>
            <SelectAreaList />
          </FilmBooking>
        </Col>
      </FilmRow>
    </Container>
   </Content>
  );
};

export {
  FilmContainer,
  FilmBooking,
  FilmDateTabs,
  SelectArea,
  AreaTitle,
  FilmLocation,
};
