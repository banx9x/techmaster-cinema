import { Link } from "react-router-dom";
import styled from "styled-components";
import routes from "../../routers/routes";
import BookBtn from "../BookBtn";

const Film = styled.div`
    width: 33.33%;
    box-sizing: border-box;
    padding: 20px 40px 60px 30px; 
    .film{
        &__img{
            width: 100%;
            padding-bottom: 20px;
            position: relative;
            img{
                width: 100%;
                border-radius: 20px;
            }
        }
        &__btn{
            height: 25px;
            width: 50px;
            background-color: #E5AF0A;
            border-radius: 5px;
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            left: 20px;
            top: 20px;
            color: #fff;
            font:600 18px SourceSansPro;
            span{
                font: 600 25px SourceSansPro;
                color: #ffffff;
            }
        }
        &__title{
            font:600 25px SourceSansPro;
            font-size: 25px;
            font-weight: 600;
            color: #d32521;
            width: 100%;
            padding: 0 0 10px 0;
            margin: 0;
        }
        &__time{
            font:400 20px SourceSansPro;
            color: #5E5B5B;
            width: 100%;
            padding: 0 0 20px 0;
            margin: 0;
        }
    }
    
`;
const FilmItem = (props) => (
  <Film className="film">
    <Link to={routes.filmLocation}>
      <div className="film__img">
        <div
          className="film__btn"
          style={{ backgroundColor: props.film.buttonColor }}
        >
          {props.film.button}
        </div>
        <img src={props.film.img} />
      </div>
      <p className="film__title">{props.film.title}</p>
      <p className="film__time"> {props.film.time}</p>
      <BookBtn />
    </Link>
  </Film>
);
export default FilmItem;
