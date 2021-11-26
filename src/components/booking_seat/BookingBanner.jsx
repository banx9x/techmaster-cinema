import styled from "styled-components";
import { Container } from "react-bootstrap";

const BookingBanner = styled.div`
    width: 100%;
`;
const BookingBannerTitle = styled.div`
    width: 100%;
    background-color: #d32521;
    font-family: SourceSansPro;
    font-size: 22px;
    font-weight: 600;
    text-transform: uppercase;
    color: #fff;
    height: 50px;
    justify-content: center;
    align-items: center;
    display: flex;
`;
const BookingBannerDetail = styled.div`
    width: 100%;
    background-color: #d6d4d4;
    font-family: SourceSansPro;
    font-size: 22px;
    font-weight: 600;
    color: #000;
    height: 50px;
    box-sizing: border-box;
    padding: 20px 20px 10px 40px;
    height: 100%;
    div {
        padding: 0px 0px 20px 0px;
    }
`;
export default () => {
    return (
        <Container>
            <BookingBanner>
                <BookingBannerTitle>
                    <span>ĐẶT VÉ ONLINE</span>
                </BookingBannerTitle>
                <BookingBannerDetail>
                    <div>Vinema Thanh Xuân</div>
                    <div>Phòng chiếu 2, 16/10/2021, 19:00 - 21:08</div>
                </BookingBannerDetail>
            </BookingBanner>
        </Container>
    );
};
