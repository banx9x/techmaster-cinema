import styled from "styled-components";
import BookingBanner from "../booking_seat/BookingBanner";
import BgScreen from "../../assets/images/bg-screen.png";
import Order from "../booking_seat/Order";
import ComboWrap from "./ComboWrap";

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
const ComboBanner = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: SourceSansPro;
    font-size: 22px;
    font-weight: 600;
    color: #000;
    box-sizing: border-box;
    margin-top: 60px;
`;
export default () => {
    return (
        <Content>
            <ContentContainer>
                <BookingBanner></BookingBanner>
                <Screen>
                    <img src={BgScreen}></img>
                </Screen>
                <ComboBanner>COMBO BỎNG NƯỚC</ComboBanner>
                <ComboWrap></ComboWrap>
                <Order linkBack="booking-seat" linkForward="payment" show="hidden"></Order>
            </ContentContainer>
        </Content>
    );
};
