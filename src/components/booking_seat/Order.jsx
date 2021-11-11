import styled from "styled-components";
import NavBack from "./NavBack";
import FilmInfo from "./FilmInfo";
import LocaltionInfo from "./LocaltionInfo";

const Order = styled.div`
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 10px;
    height: 240px;
    width: 100%;
    box-sizing: border-box;
    margin: 60px 0px 0px 0px;
    border-radius: 10px;
`;
export default () => {
    return (
        <Order>
            <NavBack></NavBack>
            <FilmInfo></FilmInfo>
            <LocaltionInfo></LocaltionInfo>
        </Order>
    );
};