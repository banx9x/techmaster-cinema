import { ShowingFilmsContext } from "./filmTabs/ShowingFilms";
import FilmItem from "./FilmItem";
import styled from "styled-components";

const Films = styled.div`
  width: 1060px;
  padding: 0 0 20px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;

const FilmList = () => (
  <Films>
    <ShowingFilmsContext.Consumer>
      {(value) =>
        value.films.map((film) => <FilmItem key={film.id} film={film} />)
      }
    </ShowingFilmsContext.Consumer>
  </Films>
);

export default FilmList;
