import styled from "styled-components";

const ComboImg = styled.div`
    width: 25%;
    img {
        width: 100%;
    }
`;

export default (props) => {
    return (
        <ComboImg>
            <img src={props.img} />
        </ComboImg>
    );
};
