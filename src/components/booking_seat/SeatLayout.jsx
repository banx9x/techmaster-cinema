import styled from "styled-components";
import Seat from "./Seat";
import { Container } from "react-bootstrap";

const SeatLayout = styled.div`
    width: 100%;
`;
export default () => {
    return (
        <Container>
            <Seat></Seat>
        </Container>
    );
};
