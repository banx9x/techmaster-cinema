import styled from "styled-components";
import PaymentSumDetail from "./PaymentSumDetail";

const PaymentSum = styled.div`
    width: 40%;
    box-sizing: border-box;
`;
const SumBanner = styled.div`
    background-color: #8a8a8a;
    color: #fff;
    text-align: left;
    font-family: SourceSansPro;
    font-size: 22px;
    font-weight: 600;
    box-sizing: border-box;
    margin: 0 0 20px 0;
    padding: 10px;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
`;
export default () => {
    return (
        <PaymentSum>
            <SumBanner>
                <span>TỔNG CỘNG</span>
            </SumBanner>
            <PaymentSumDetail></PaymentSumDetail>
        </PaymentSum>
    );
};
