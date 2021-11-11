import FilmLocationInfo from "../../components/FilmLocationInfo";
import { films } from "../../components/filmTabs/ShowingFilms";
import SelectCinemList from "../../components/SelectCinemaList";
import { AreaTitle, FilmBooking, FilmContainer, FilmDateTabs, SelectArea } from "../film-location/FilmLocation";
export default () => {
  return (
    <FilmContainer>
      <FilmLocationInfo film={films[1]} />
      <FilmBooking>
        <FilmDateTabs />
        <SelectArea>
          <AreaTitle>Chọn khu vực</AreaTitle>
        </SelectArea>
        <SelectCinemList/>
      </FilmBooking>
    </FilmContainer>
  );
};
