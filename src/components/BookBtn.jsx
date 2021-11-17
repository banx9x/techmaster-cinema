import styled from "styled-components";

const BookButton = styled.div`
  height: 40px;
  width: 100%;
  background-color: #d32521;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font: 600 22px SourceSansPro;
  color: #fff;
  text-transform: uppercase;
  &:hover{
    color: #fff!important;
  }
 
`;
const BookBtn = () => (
  <BookButton>
    Đặt vé ngay
  </BookButton>
);

export default BookBtn;
