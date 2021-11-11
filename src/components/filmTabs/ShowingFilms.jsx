import { createContext, useState } from "react";
export const ShowingFilmsContext = createContext();
import poster1 from "../../assets/images/poster 1.jpg";
import poster2 from "../../assets/images/poster 2.jpg";
import poster3 from "../../assets/images/poster 3.jpg";
import poster4 from "../../assets/images/poster 4.jpg";
import poster5 from "../../assets/images/poster 5.jpg";
import poster6 from "../../assets/images/poster 6.jpg";
import FilmList from "../FilmList";

const films = [
  {
    id: 1,
    title: " Thám tử Conan: Viên đạ...",
    time: "120 phút",
    button: "C13",
    buttonColor: "#e5af0a",
    genre: "Kinh dị",
    img: poster1,
    summary:
      'Phần phim đen tối và đáng sợ nhất của vũ trụ kinh dị The Conjuring, dựa trên "Vụ án kẻ sát nhân quỷ nhập" gây rúng động nước Mỹ.',
  },
  {
    id: 2,
    title: " Thám tử Conan: Viên đạ...",
    time: "120 phút",
    button: "C16",
    buttonColor: "#d32521",
    genre: "Kinh dị",
    img: poster2,
    summary:
      'Phần phim đen tối và đáng sợ nhất của vũ trụ kinh dị The Conjuring, dựa trên "Vụ án kẻ sát nhân quỷ nhập" gây rúng động nước Mỹ.',
  },
  {
    id: 3,
    title: " Thám tử Conan: Viên đạ...",
    time: "120 phút",
    button: "C16",
    buttonColor: "#d32521",
    genre: "Kinh dị",
    img: poster3,
    summary:
      'Phần phim đen tối và đáng sợ nhất của vũ trụ kinh dị The Conjuring, dựa trên "Vụ án kẻ sát nhân quỷ nhập" gây rúng động nước Mỹ.',
  },
  {
    id: 4,
    title: " Thám tử Conan: Viên đạ...",
    time: "120 phút",
    button: "C13",
    buttonColor: "#e5af0a",
    genre: "Kinh dị",
    img: poster4,
    summary:
      'Phần phim đen tối và đáng sợ nhất của vũ trụ kinh dị The Conjuring, dựa trên "Vụ án kẻ sát nhân quỷ nhập" gây rúng động nước Mỹ.',
  },
  {
    id: 5,
    title: " Thám tử Conan: Viên đạ...",
    time: "120 phút",
    button: "C16",
    buttonColor: "#d32521",
    genre: "Kinh dị",
    img: poster5,
    summary:
      'Phần phim đen tối và đáng sợ nhất của vũ trụ kinh dị The Conjuring, dựa trên "Vụ án kẻ sát nhân quỷ nhập" gây rúng động nước Mỹ.',
  },
  {
    id: 6,
    title: " Thám tử Conan: Viên đạ...",
    time: "120 phút",
    button: "C16",
    buttonColor: "#d32521",
    genre: "Kinh dị",
    img: poster6,
    summary:
      'Phần phim đen tối và đáng sợ nhất của vũ trụ kinh dị The Conjuring, dựa trên "Vụ án kẻ sát nhân quỷ nhập" gây rúng động nước Mỹ.',
  },
];

const ShowingFilms = () => {
  return (
    <ShowingFilmsContext.Provider
      value={{
        films,
      }}
    >
      <FilmList />
    </ShowingFilmsContext.Provider>
  );
};

export { films, ShowingFilms };
