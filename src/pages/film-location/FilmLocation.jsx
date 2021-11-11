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

const FilmContainer = styled.div`
  display: flex;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 200px;
`;
const FilmBooking = styled.div`
  width: 70%;
  box-sizing: border-box;
  padding: 0 80px;
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
  console.log(film)
  return (
    <FilmContainer>
      <FilmLocationInfo film={film} />
      <FilmBooking>
        <FilmDateTabs />
        <SelectArea>
          <AreaTitle>Chọn khu vực</AreaTitle>
        </SelectArea>
        <SelectAreaList />
      </FilmBooking>
    </FilmContainer>
  );
};

export  {FilmContainer, FilmBooking, FilmDateTabs, SelectArea, AreaTitle, FilmLocation};
