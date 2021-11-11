import ShowingFilms from "./ShowingFilms";
import { Tabs, Tab, Button } from "react-bootstrap";
import ComingFilms from "./ComingFilms";
import EarlyFilms from "./EarlyFilms";
import styled from "styled-components";
const FilmTabsWrap = styled.div`
  text-align: center;
  width: 100%;
`;

const FilmTabs = styled(Tabs)`
  width: 700px;
  box-sizing: border-box;
  padding: 0 0 20px 0;
  border-style: solid;
  border-width: 0 0 1px 0;
  border-color: #7d7d7d;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  .nav-item button.nav-link {
    font: 600 18px SourceSansPro;
    box-sizing: border-box;
    padding: 0 50px;
    color: #000;
    text-transform: uppercase;
    background-color: unset;
    border: 0;
    &.active{
        color: #d32521;
    }
  }
`;

const FilmTabsNav = () => (
  <FilmTabsWrap>
    <FilmTabs
      defaultActiveKey="showing"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="coming" title="Sắp chiếu">
        <ComingFilms />
      </Tab>
      <Tab eventKey="showing" title="Đang chiếu">
        <ShowingFilms />
      </Tab>
      <Tab eventKey="earlyShowing" title="Suất chiếu sớm">
        <EarlyFilms />
      </Tab>
    </FilmTabs>
  </FilmTabsWrap>
);
export default FilmTabsNav;
