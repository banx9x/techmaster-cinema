import { createContext, useState } from "react";
export const ShowingFilmsContext = createContext();
import poster1 from "../../assets/images/poster 1.jpg";
import poster2 from "../../assets/images/poster 2.jpg";
import poster3 from "../../assets/images/poster 3.jpg";
import poster4 from "../../assets/images/poster 4.jpg";
import poster5 from "../../assets/images/poster 5.jpg";
import poster6 from "../../assets/images/poster 6.jpg";
import FilmList from "./FilmList";


export default () => {
  const [films, setFilm] = useState([
    {
      id: 1,
      title: " Thám tử Conan: Viên đạ...",
      time: "120 phút",
      button: "C13",
      buttonColor: "#e5af0a",
      img: poster1,
    },
    {
      id: 2,
      title: " Thám tử Conan: Viên đạ...",
      time: "120 phút",
      button: "C16",
      buttonColor: "#d32521",
      img: poster2,
    },
    {
      id: 3,
      title: " Thám tử Conan: Viên đạ...",
      time: "120 phút",
      button: "C16",
      buttonColor: "#d32521",
      img: poster3,
    },
    {
      id: 4,
      title: " Thám tử Conan: Viên đạ...",
      time: "120 phút",
      button: "C13",
      buttonColor: "#e5af0a",
      img: poster4,
    },
    {
      id: 5,
      title: " Thám tử Conan: Viên đạ...",
      time: "120 phút",
      button: "C16",
      buttonColor: "#d32521",
      img: poster5,
    },
    {
      id: 6,
      title: " Thám tử Conan: Viên đạ...",
      time: "120 phút",
      button: "C16",
      buttonColor: "#d32521",
      img: poster6,
    },
  ]);



  return (
    <ShowingFilmsContext.Provider
      value={{
        films
      }}
    >
    <FilmList/>
    </ShowingFilmsContext.Provider>
  );
};
