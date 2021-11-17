import styled from "styled-components";
import PaymentTotalDetail from "./PaymentTotalDetail";

const PaymentTotalWrap = styled.div`
    width: 100%;
    display: flex;
    box-sizing: border-box;
    margin: 60px 0px;
`;
export default () => {
    return (
        <PaymentTotalWrap>
            <PaymentTotalDetail></PaymentTotalDetail>
        </PaymentTotalWrap>
    );
};
