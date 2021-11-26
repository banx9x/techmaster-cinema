import styled from "styled-components";
import NavBack from "./NavBack";
import FilmInfo from "./FilmInfo";
import LocaltionInfo from "./LocaltionInfo";
import PriceInfo from "./PriceInfo";
import NavForward from "./NavForward";
import { Container, Row, Col } from "react-bootstrap";

const Order = styled.div`
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 10px;
    width: 100%;
    box-sizing: border-box;
    margin: 60px 0px 0px 0px;
    border-radius: 10px;
`;

export default (props) => {
    return (
        <Container>
            <Order>
                <NavBack link={props.linkBack}></NavBack>
                <FilmInfo></FilmInfo>
                <LocaltionInfo></LocaltionInfo>
                <PriceInfo show={props.show}></PriceInfo>
                <NavForward link={props.linkForward} hidden={props.hidden}></NavForward>
            </Order>
        </Container>
    );
};
