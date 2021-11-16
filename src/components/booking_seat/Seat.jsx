import styled from "styled-components";
import { useState, useCallback } from "react";

const SeatLayoutRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    width: 100%;
`;
const Seat = styled.div`
    width: 30px;
    height: 30px;
    margin: 5px;
    box-sizing: border-box;
    border-style: solid;
    border-width: 2px;
    text-align: center;
    font-family: SourceSansPro;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-color: ${(props) => (props.normal ? "#03D457" : props.vip ? "#d32521" : "")};
`;
const seatData = [];
let defaultId = 0;

for (let i = 0; i < 9; i++) {
    const rowSeat = [];
    if (i < 4) {
        for (let j = 20; j > 0; j--) {
            let letter = String.fromCharCode(65 + i) + j;
            rowSeat.push({ id: defaultId, type: "normal", title: letter });
            defaultId++;
        }
    } else {
        for (let j = 20; j > 0; j--) {
            let letter = String.fromCharCode(65 + i) + j;
            rowSeat.push({ id: defaultId, type: "vip", title: letter });
            defaultId++;
        }
    }
    seatData.push(rowSeat);
}

const SeatItem = ({ type, title }) => {
    const [isActive, setIsActive] = useState(true);

    const handleToggle = () => {
        setIsActive(!isActive);
    };
    if (type == "normal") {
        return (
            <Seat normal onClick={handleToggle} className={`${isActive ? "" : "isChecked"}`}>
                <span>{title}</span>
            </Seat>
        );
    }
    if (type == "vip") {
        return (
            <Seat vip onClick={handleToggle} className={`${isActive ? "" : "isChecked"}`}>
                <span>{title}</span>
            </Seat>
        );
    }
    return null;
};

const SeatState = () => {
    const [seats, setSeats] = useState(seatData);

    return (
        <>
            {seats.map((s2, index) => {
                return (
                    <SeatLayoutRow key={index}>
                        {s2.map((r) => {
                            console.log(r);
                            return <SeatItem key={r.id} title={r.title} type={r.type} />;
                        })}
                    </SeatLayoutRow>
                );
            })}
        </>
    );
};

export default SeatState;
