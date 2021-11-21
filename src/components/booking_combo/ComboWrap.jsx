import styled from "styled-components";
import ComboItem from "./ComboItem";

const ComboWrap = styled.div`
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    box-sizing: border-box;
    margin: 40px 0 20px 0;
`;

export default () => {
    return (
        <ComboWrap>
            <ComboItem></ComboItem>
        </ComboWrap>
    );
};
