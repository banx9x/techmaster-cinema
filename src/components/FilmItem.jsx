import { Link } from "react-router-dom";
import styled from "styled-components";
import routes from "../routers/routes";
import BookBtn from "../components/BookBtn";

const Film = styled.div`
  width: 33.33%;
  box-sizing: border-box;
  padding: 20px 40px 60px 30px;
`;

const FilmBtn = styled.div`
  height: 25px;
  width: 50px;
  background-color: #e5af0a;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 20px;
  top: 20px;
  color: #fff;
  font: 600 18px SourceSansPro;
`;

const FilmTitle = styled.div`
  font: 600 25px SourceSansPro;
  color: #d32521;
  width: 100%;
  padding: 0 0 10px 0;
  margin: 0;
`;

const FilmTime = styled.p`
  font: 400 20px SourceSansPro;
  color: #5e5b5b;
  width: 100%;
  padding: 0 0 20px 0;
  margin: 0;
`;

const FilmImgWrap = styled.div`
  width: 100%;
  padding-bottom: 20px;
  position: relative;
  img {
    width: 100%;
    border-radius: 20px;
  }
`
const FilmItem = (props) => (
  <Film className="film">
    <Link to={`/film-location/${props.film.id}`}>
      <FilmImgWrap>
        <FilmBtn style={{ backgroundColor: props.film.buttonColor }}>
          {props.film.button}
        </FilmBtn>
        <img src={props.film.img} />
      </FilmImgWrap>
      <FilmTitle>{props.film.title}</FilmTitle>
      <FilmTime> {props.film.time}</FilmTime>
      <BookBtn />
    </Link>
  </Film>
);
export default FilmItem;
