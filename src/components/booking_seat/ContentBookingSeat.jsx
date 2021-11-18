import styled from "styled-components";
import BookingBanner from "./BookingBanner";
import BgScreen from "../../assets/images/bg-screen.png";
import SeatLayout from "./SeatLayout";
import SeatNote from "./SeatNote";
import Order from "./Order";

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
    width: 980px;
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
    return (
        <Content>
            <ContentContainer>
                <BookingBanner></BookingBanner>
                <Screen>
                    <img src={BgScreen}></img>
                </Screen>
                <SeatLayout></SeatLayout>
                <SeatNote></SeatNote>
                <Order
                    linkBack="film-localtion/1"
                    linkForward="booking-combo"
                    show="hidden"
                ></Order>
            </ContentContainer>
        </Content>
    );
};
