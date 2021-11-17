import styled from "styled-components";

const PaymentTotalDetail = styled.div`
    width: 60%;
    box-sizing: border-box;
    padding: 0 40px 0 0;
`;
const Discount = styled.div`
    width: 100%;
    box-sizing: border-box;
    margin: 0 0 40px 0;
`;
const DiscountBanner = styled.div`
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
const DiscountInput = styled.div`
    display: flex;
    width: 100%;
`;
const DiscountCode = styled.div`
    height: 50px;
    width: 70%;
    background-color: #fff;
    border-style: solid;
    border-color: #000;
    border-width: 1px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    padding: 10px;
`;
const DiscountCodeInput = styled.input`
    color: #000;
    font-family: SourceSansPro;
    font-size: 22px;
    font-weight: 600;
    outline: none;
    width: 100%;
    text-transform: uppercase;
    border-style: none;
`;
const DiscountCodeBtn = styled.div`
    height: 50px;
    width: 30%;
    box-sizing: border-box;
    margin: 0 0 0 20px;
    background-color: #d32521;
    color: #fff;
    text-align: left;
    font-family: SourceSansPro;
    font-size: 22px;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default () => {
    return (
        <PaymentTotalDetail>
            <Discount>
                <DiscountBanner>
                    <span>KHUYẾN MÃI</span>
                </DiscountBanner>
                <DiscountInput>
                    <DiscountCode>
                        <DiscountCodeInput></DiscountCodeInput>
                    </DiscountCode>
                    <DiscountCodeBtn>NHẬP MÃ</DiscountCodeBtn>
                </DiscountInput>
            </Discount>
        </PaymentTotalDetail>
    );
};
