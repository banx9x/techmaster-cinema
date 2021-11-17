import styled from "styled-components";
import PaymentTotal from "./PaymentTotal";

const PaymentContent = styled.div`
    box-sizing: border-box;
    padding: 40px 0px 200px 0px;
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    background-color: #f0f0f0;
`;
const PaymentWrap = styled.div`
    width: 980px;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const PaymentBanner = styled.div`
    width: 100%;
`;
const PaymentBannerTitle = styled.div`
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

export default () => {
    return (
        <PaymentContent>
            <PaymentWrap>
                <PaymentBanner>
                    <PaymentBannerTitle>
                        <span>THANH TOÁN</span>
                    </PaymentBannerTitle>
                </PaymentBanner>
                <PaymentTotal></PaymentTotal>
            </PaymentWrap>
        </PaymentContent>
    );
};
