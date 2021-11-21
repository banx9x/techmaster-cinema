import styled from "styled-components";
import { useState } from "react";
import imgPlus from "../../assets/images/plus.png";
import imgMinus from "../../assets/images/minus-sign.png";

const ComboNav = styled.div`
    display: flex;
    box-sizing: border-box;
    margin-top: 20px;
    #plus {
        border-width: 1px;
        border-radius: 5px 0px 0px 5px;
    }
    #minus {
        border-width: 1px 1px 1px 0px;
        border-radius: 0px 5px 5px 0px;
    }
`;
const ComboNavNumber = styled.div`
    width: 30px;
    height: 30px;
    background-color: #fff;
    border-style: solid;
    border-color: #5e5b5b;
    border-width: 1px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    margin-right: 20px;
    span {
        font-family: SourceSansPro;
        font-size: 18px;
        font-weight: 400;
        color: #000;
    }
`;
const ComboNavStyle = styled.div`
    width: 30px;
    height: 30px;
    background-color: #fff;
    border-style: solid;
    border-color: #5e5b5b;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    cursor: pointer;
`;
const CountItem = () => {
    const [countItem, setCountItem] = useState(0);
    const upCount = () => setCountItem(countItem + 1);
    const downCount = () => setCountItem(countItem - 1);

    return (
        <ComboNav>
            <ComboNavNumber>
                <span>{countItem}</span>
            </ComboNavNumber>
            <ComboNavStyle id="plus" onClick={upCount}>
                <img src={imgPlus} style={{ width: "10px" }} />
            </ComboNavStyle>
            <ComboNavStyle id="minus" onClick={downCount}>
                <img src={imgMinus} style={{ width: "10px" }} />
            </ComboNavStyle>
        </ComboNav>
    );
};

export default CountItem;
