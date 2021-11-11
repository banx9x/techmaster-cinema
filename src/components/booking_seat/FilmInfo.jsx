import styled from "styled-components";
import filmImg from "../../assets/img/poster 1.jpg";

const FilmInfo = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35%;
`;
const FilmImg = styled.div`
    width: 40%;
    img {
        height: 200px;
        width: auto;
    }
`;
const FilmText = styled.div`
    width: 60%;
    height: 100%;
    font-family: SourceSansPro;
    font-size: 20px;
    font-weight: 600;
    color: #000;
    display: flex;
    box-sizing: border-box;
    padding-left: 20px;
    div {
        margin-bottom: 10px;
        box-sizing: border-box;
    }
`;

export default () => {
    return (
        <FilmInfo>
            <FilmImg>
                <img src={filmImg} />
            </FilmImg>
            <FilmText>
                <div>The Conjuring: Ma Xui Quỷ Khiến</div>
                <div>2D</div>
                <div>C16</div>
            </FilmText>
        </FilmInfo>
    );
};
