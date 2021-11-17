import styled from "styled-components";
import { Link } from "react-router-dom";
import navImg from "../../assets/img/arrow.png";

const NavBack = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 7%;
`;
const NavBtn = styled.div`
    height: 40px;
    width: 40px;
    background-color: #8a8a8a;
    box-sizing: border-box;
    padding: 10px;
    border-radius: 10px;
    img {
        width: 100%;
        transform: rotate(180deg);
        vertical-align: baseline;
    }
`;
export default (props) => {
    return (
        <NavBack>
            <Link to={`/${props.link}`}>
                <NavBtn>
                    <img src={navImg} />
                </NavBtn>
            </Link>
        </NavBack>
    );
};
