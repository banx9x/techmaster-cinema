import styled from "styled-components";
import CountItem from "./ComboNav";

const ComboText = styled.div`
    width: 75%;
    padding-left: 20px;
    box-sizing: border-box;
`;
const ComboName = styled.div`
    font-family: SourceSansPro;
    font-size: 20px;
    font-weight: 600;
    color: #000;
    text-transform: uppercase;
`;
const ComboDetail = styled.div`
    font-family: SourceSansPro;
    font-size: 18px;
    font-weight: 400;
    color: #5e5b5b;
    box-sizing: border-box;
    margin-top: 10px;
`;

export default (props) => {
    return (
        <ComboText>
            <ComboName>{props.name}</ComboName>
            <ComboDetail>{props.detail}</ComboDetail>
            <CountItem></CountItem>
        </ComboText>
    );
};
