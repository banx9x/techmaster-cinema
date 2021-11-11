import styled from "styled-components";
import { css } from "styled-components";

const SeatNote = styled.div`
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    margin-top: 50px;
    .col {
        width: 50%;
    }
`;

const SeatType = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    span {
        font-family: SourceSansPro;
        font-size: 18px;
        font-weight: 600;
        color: #000;
        box-sizing: border-box;
        margin-left: 10px;
    }
`;
const SeatIcon = styled.div`
    width: 30px;
    height: 30px;
    margin: 5px;
    box-sizing: border-box;
    border-style: solid;
    border-width: 2px;
    ${(props) =>
        props.normal &&
        css`
            border-color: #03d457;
        `};
    ${(props) =>
        props.normal &&
        css`
            border-color: #03d457;
        `};
    ${(props) =>
        props.booked &&
        css`
            background-color: #c4c4c4;
            border-color: #c4c4c4;
            color: #fff;
        `};
    ${(props) =>
        props.checked &&
        css`
            background-color: #d32521;
            border-color: #d32521;
            color: #fff;
        `};
`;

export default () => {
    return (
        <SeatNote>
            <div className="col">
                <SeatType>
                    <SeatIcon vip />
                    <span>Vip</span>
                </SeatType>
                <SeatType>
                    <SeatIcon normal />
                    <span>Thường</span>
                </SeatType>
            </div>
            <div className="col">
                <SeatType>
                    <SeatIcon booked />
                    <span>Đã được đặt</span>
                </SeatType>
                <SeatType>
                    <SeatIcon checked />
                    <span>Đang chọn</span>
                </SeatType>
            </div>
        </SeatNote>
    );
};
