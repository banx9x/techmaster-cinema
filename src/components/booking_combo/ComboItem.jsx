import styled from "styled-components";
import ComboItemImg from "./ComboItemImg";
import ComboItemDetail from "./ComboItemDetail";
import ImgCombo1 from "../../assets/images/combo1.png";
import ImgCombo2 from "../../assets/images/combo2.png";
import ImgCombo3 from "../../assets/images/combo3.png";
const ComboInfo = styled.div`
    width: 50%;
    box-sizing: border-box;
    padding: 20px;
    border-style: solid;
    border-color: #5e5b5b;
    border-width: 0 0 1px 0px;
    display: flex;
`;
const ItemData = [
    {
        id: 0,
        imgSrc: ImgCombo1,
        itemName: "SINGLE COMBO 1 - 259.000 VNĐ",
        itemDetail: "1 bỏng + 1 nước",
    },
    {
        id: 1,
        imgSrc: ImgCombo2,
        itemName: "SINGLE COMBO 1 - 259.000 VNĐ",
        itemDetail: "1 bỏng + 1 nước",
    },
    {
        id: 2,
        imgSrc: ImgCombo3,
        itemName: "SINGLE COMBO 1 - 259.000 VNĐ",
        itemDetail: "1 bỏng + 1 nước",
    },
    {
        id: 3,
        imgSrc: ImgCombo1,
        itemName: "SINGLE COMBO 1 - 259.000 VNĐ",
        itemDetail: "1 bỏng + 1 nước",
    },
    {
        id: 4,
        imgSrc: ImgCombo2,
        itemName: "SINGLE COMBO 1 - 259.000 VNĐ",
        itemDetail: "1 bỏng + 1 nước",
    },
    {
        id: 5,
        imgSrc: ImgCombo3,
        itemName: "SINGLE COMBO 1 - 259.000 VNĐ",
        itemDetail: "1 bỏng + 1 nước",
    },
];
export default () => {
    return (
        <ComboInfo>
            <ComboImg></ComboImg>
        </ComboInfo>
    );
};
