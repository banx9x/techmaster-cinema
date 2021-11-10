import styled from "styled-components";

const BookButton = styled.div`
  height: 40px;
  width: 100%;
  background-color: #d32521;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    font-family: SourceSansPro;
    font-size: 22px;
    font-weight: 600;
    color: #fff;
    text-transform: uppercase;
  }
`;
const BookBtn = () => (
  <BookButton>
    <span>Đặt vé ngay</span>
  </BookButton>
);

export default BookBtn;
