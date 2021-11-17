import { Tabs, Tab } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import routes from "../routers/routes";

const FilmTypeTabs = styled(Tabs)`
  padding-top: 30px;
  .nav-item button.nav-link {
    font: 600 18px SourceSansPro;
    color: #000;
    text-transform: uppercase;
    background-color: unset;
    border-radius: 5px;
    &.active {
      color: #fff;
      background-color: #d32521;
    }
  }
`;

const FilmTime = styled(Link)`
  background-color: #afafaf;
  font: 600 15px SourceSansPro;
  color: #000;
  text-transform: uppercase;
  margin-right: 20px;
  border-radius: 5px;
  padding: 6px 8px;
`;

const FilmTimeList = styled.div`
  display: flex;
  align-items: center;
`;
const CinemaList = styled.div`
  padding-top: 20px;
`
const Cinema = styled.div`
  margin-bottom: 40px;
`;
const CinemaTitle = styled.h3`
  font: 400 18px SourceSansPro;
`;
export default () => {
  return (
    <FilmTypeTabs
      defaultActiveKey="2d"
      id="uncontrolled-tab-example"
      className="date-list"
    >
      <Tab eventKey="2d" title="2D">
        <CinemaList>
        <Cinema>
          <CinemaTitle>Vincom Trần Duy Hưng</CinemaTitle>
          <FilmTimeList>
            <FilmTime to={routes.bookingSeat}>15:30</FilmTime>
            <FilmTime to={routes.bookingSeat}>18:30</FilmTime>
          </FilmTimeList>
        </Cinema>
        </CinemaList>
      </Tab>
      <Tab eventKey="3d" title="3D">
        <CinemaList>
          <Cinema>
            <CinemaTitle>Vincom Bà Triệu</CinemaTitle>
            <FilmTimeList>
              <FilmTime to={routes.bookingSeat}>16:15</FilmTime>
              <FilmTime to={routes.bookingSeat}>18:45</FilmTime>
              <FilmTime to={routes.bookingSeat}>22:30</FilmTime>
            </FilmTimeList>
          </Cinema>

          <Cinema>
            <CinemaTitle>Vincom Trần Duy Hưng</CinemaTitle>
            <FilmTimeList>
              <FilmTime to={routes.bookingSeat}>15:30</FilmTime>
              <FilmTime to={routes.bookingSeat}>18:30</FilmTime>
            </FilmTimeList>
          </Cinema>
        </CinemaList>
      </Tab>
    </FilmTypeTabs>
  );
};
