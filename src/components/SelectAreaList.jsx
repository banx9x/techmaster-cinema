import { Card } from "react-bootstrap";
import { BiChevronRight } from "react-icons/bi";
import { Link } from "react-router-dom";
import styled from "styled-components";
import routes from "../routers/routes";

const Select = styled(Card)`
  margin-bottom: 30px;
  background: unset;
  border: 0;
`;
const SelectHeader = styled.div`
  padding: 8px 20px;
  background-color: #fff;
  border: 1px solid #8c8c8d;
  border-radius: 10px !important;
  a {
    font: 400 18px SourceSansPro;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
  }

  svg {
    font-size: 28px;
  }
`;

const SelectAreaList = () => {
  return (
    <>
      <Select>
        <SelectHeader to={routes.filmCinema}>
          <Link to={routes.filmCinema}>
            Hà Nội
            <BiChevronRight />
          </Link>
        </SelectHeader>
      </Select>

      <Select>
        <SelectHeader to={routes.filmCinema}>
          <Link to={routes.filmCinema}>
            Thành Phố Hồ Chí Minh
            <BiChevronRight />
          </Link>
        </SelectHeader>
      </Select>

      <Select>
        <SelectHeader to={routes.filmCinema}>
          <Link to={routes.filmCinema}>
            Đà Nẵng
            <BiChevronRight />
          </Link>
        </SelectHeader>
      </Select>

      <Select>
        <SelectHeader to={routes.filmCinema}>
          Hà Nội
          <BiChevronRight />
        </SelectHeader>
      </Select>
    </>
  );
};
export { SelectHeader, Select, SelectAreaList };
