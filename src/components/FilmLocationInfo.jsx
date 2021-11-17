import styled from "styled-components";
import youtube from "../assets/images/youtube.png";

const dFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;


const FilmTitle = styled.div`
  font: 600 25px SourceSansPro;
  color: #d32521;
  width: 100%;
  padding: 0 0 10px 0;
  margin: 0;
`;

const FilmText = styled.div`
  font: 400 20px/2rem SourceSansPro;
  color: #5e5b5b;
  width: 100%;
  text-align: left;
  box-sizing: border-box;
  margin-top: 20px;
`;
const FilmImg = styled.div`
  width: 100%;
  padding-bottom: 20px;
  position: relative;
  img {
    width: 100%;
    border-radius: 20px;
  }
`;

const FilmBtn = styled(dFlex)`
  height: 25px;
  width: 50px;
  background-color: #e5af0a;
  border-radius: 5px;
  position: absolute;
  left: 20px;
  top: 20px;
  color: #fff;
  font: 600 18px SourceSansPro;
`;

const Category = styled.tr`
  .category {
    &__title {
      font: 600 22px SourceSansPro;
      text-align: left;
    }
    &__info {
      font:400 22px SourceSansPro
      text-align: left;
      box-sizing: border-box;
      padding: 0 0 0px 30px;
      color: #5e5b5b;
    }
  }
`;

const Trailer = styled(dFlex)`
  width: 200px;
  height: 55px;
  border-radius: 10px;
  border: 1px solid #000;
  box-sizing: border-box;
  margin-top: 20px;
  .icon {
    width: 18%;
    img {
      width: 100%;
    }
  }
  .click {
    margin-left: 20px;
    font: 600 22px SourceSansPro;
    color: #000;
  }
`;
const FilmLocationInfo = (props) => (
  <>
    <FilmImg>
      <FilmBtn style={{ backgroundColor: props.film.buttonColor }}>C16</FilmBtn>
      <img src={props.film.img} />
    </FilmImg>
    <FilmTitle>{props.film.title}</FilmTitle>
    <table>
      <tbody>
        <Category>
          <th className="category__title">Thời lượng</th>
          <th className="category__info">{props.film.time}</th>
        </Category>
        <Category className="category">
          <th className="category__title">Thể loại</th>
          <th className="category__info">{props.film.genre}</th>
        </Category>
      </tbody>
    </table>
    <Trailer>
      <div className="icon">
        <img src={youtube} />
      </div>
      <div className="click"> Xem trailer </div>
    </Trailer>
    <FilmText>{props.film.summary}</FilmText>
  </>
);
export default FilmLocationInfo;
