import styled from "styled-components";
import BookingBanner from "./BookingBanner";
import BgScreen from "../../assets/images/bg-screen.png";
import SeatLayout from "./SeatLayout";
import SeatNote from "./SeatNote";
import Order from "./Order";
import { useParams } from "react-router";
import { Container } from "react-bootstrap";

const Content = styled.div`
    box-sizing: border-box;
    padding: 40px 0px 200px 0px;
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    background-color: #f0f0f0;
`;
const ContentContainer = styled.div`
    max-width: 980px;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const Screen = styled.div`
    width: 90%;
    box-sizing: border-box;
    margin: 60px 0px 40px 0px;
    img {
        width: 100%;
    }
`;

export default () => {
    const filmId = useParams();
    return (
        <Container>
            <Content>
                <ContentContainer>
                    <BookingBanner></BookingBanner>
                    <Screen>
                        <Container>
                            <img src={BgScreen}></img>
                        </Container>
                    </Screen>
                    <SeatLayout></SeatLayout>
                    <SeatNote></SeatNote>
                    <Order
                        linkBack={`film-location/film/${filmId.id}`}
                        linkForward={`booking-combo/film/${filmId.id}`}
                        show="hidden"
                    ></Order>
                </ContentContainer>
            </Content>
        </Container>
    );
};
