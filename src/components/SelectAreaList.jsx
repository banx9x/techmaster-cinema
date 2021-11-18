import { Link } from "react-router-dom";
import styled from "styled-components";
import next from "../assets/images/next.png";
import routes from "../routers/routes";

const SelectChoice = styled(Link)`
    margin-bottom: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 45px;
    width: 100%;
    background-color: #fff;
    border: 1px solid #8c8c8d;
    border-radius: 10px;
    padding: 0 20px;
    .select-choice {
        &__title {
            font: 400 18px SourceSansPro;
        }
        &__icon {
            width: 10px;
            img {
                width: 100%;
            }
        }
    }
`;
const SelectAreaList = () => (
    <>
        <SelectChoice to={routes.filmCinema}>
            <div className="select-choice__title">Hà Nội</div>
            <div className="select-choice__icon">
                <img src={next} alt="next-icon" />
            </div>
        </SelectChoice>

        <SelectChoice to={routes.filmCinema}>
            <div className="select-choice__title">TP Hồ Chí Minh</div>
            <div className="select-choice__icon">
                <img src={next} alt="next-icon" />
            </div>
        </SelectChoice>

        <SelectChoice to={routes.filmCinema}>
            <div className="select-choice__title">Đà Nẵng</div>
            <div className="select-choice__icon">
                <img src={next} alt="next-icon" />
            </div>
        </SelectChoice>

        <SelectChoice to={routes.filmCinema}>
            <div className="select-choice__title">Hà Nội</div>
            <div className="select-choice__icon">
                <img src={next} alt="next-icon" />
            </div>
        </SelectChoice>

        <SelectChoice to={routes.filmCinema}>
            <div className="select-choice__title">Đà Nẵng</div>
            <div className="select-choice__icon">
                <img src={next} alt="next-icon" />
            </div>
        </SelectChoice>
    </>
);
export default SelectAreaList;
