import styled from "styled-components";
import { Link } from "react-router-dom";

const PaymentBtn = styled.div`
    width: 100%;
    background-color: #d32521;
    justify-content: center;
    align-items: center;
    display: flex;
    font-family: SourceSansPro;
    font-size: 22px;
    font-weight: 600;
    color: #fff;
    height: 40px;
    border-radius: 10px;
`;
const Show = styled.div``;
export default (props) => {
    return (
        <Show style={{ visibility: `${props.show}` }}>
            <Link to="/">
                <PaymentBtn>
                    <span>THANH TOÁN</span>
                </PaymentBtn>
            </Link>
        </Show>
    );
};
