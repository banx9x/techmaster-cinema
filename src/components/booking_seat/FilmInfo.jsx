import styled from "styled-components";
import filmImg from "../../assets/images/poster 1.jpg";

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
        object-fit: cover;
        width: 100%;
        height: 100%;
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
    margin-bottom: auto;
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
