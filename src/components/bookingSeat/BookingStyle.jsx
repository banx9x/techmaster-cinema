import styled from "styled-components";

const Content = styled.div`
  box-sizing: border-box;
  padding: 40px 0px 200px 0px;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
`;
const ContentContainer = styled.div`
  width: 980px;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const BookingBanner = styled.div`
  width: 100%;
`;
const BookingBannerTitle = styled.div`
  width: 100%;
  background-color: #d32521;
  font-family: SourceSansPro;
  font-size: 22px;
  font-weight: 600;
  text-transform: uppercase;
  color: #fff;
  height: 50px;
  justify-content: center;
  align-items: center;
  display: flex;
`;
const BookingBannerDetail = styled.div`
  width: 100%;
  background-color: #d6d4d4;
  font-family: SourceSansPro;
  font-size: 22px;
  font-weight: 600;
  color: #000;
  height: 50px;
  box-sizing: border-box;
  padding: 20px 20px 10px 40px;
  height: 100%;
  div {
    padding: 0px 0px 20px 0px;
  }
`;
const Screen = styled.div`
  width: 90%;
  box-sizing: border-box;
  margin: 60px 0px 40px 0px;
  img {
    width: 100%;
  }
`;
const SeatNote = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  margin-top: 50px;
  .col {
    width: 50%;
    .seat_type {
      width: 100%;
      display: flex;
      align-items: center;
      span {
        font-family: SourceSansPro;
        font-size: 18px;
        font-weight: 600;
        color: #000;
        box-sizing: border-box;
        margin-left: 10px;
      }
    }
    .seat_icon {
      width: 30px;
      height: 30px;
      margin: 5px;
      box-sizing: border-box;
      border-style: solid;
      border-width: 2px;
    }
    #normal {
      border-color: #03d457;
    }
    #vip {
      border-color: #d32521;
    }
    #booked {
      background-color: #c4c4c4;
      border-color: #c4c4c4;
      color: #fff;
    }
    #checked {
      background-color: #d32521;
      border-color: #d32521;
      color: #fff;
    }
  }
`;
const Order = styled.div`
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 10px;
  height: 240px;
  width: 100%;
  box-sizing: border-box;
  margin: 60px 0px 0px 0px;
  border-radius: 10px;
  .film_info {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .film_img {
      width: 40%;
      img {
        height: 200px;
        width: auto;
      }
    }
    .film_text {
      width: 60%;
      height: 100%;
      font-family: SourceSansPro;
      font-size: 20px;
      font-weight: 600;
      color: #000;
      display: flex;
      box-sizing: border-box;
      padding-left: 20px;
      div {
        margin-bottom: 10px;
        box-sizing: border-box;
      }
    }
  }
  .location_info {
    height: 100%;
    box-sizing: border-box;
    padding: 0 0 0 20px;
  }
  tbody {
    vertical-align: top;
  }
  tr {
    box-sizing: border-box;
    margin-bottom: 10px;
    padding-bottom: 10px;
    justify-content: flex-start;
    align-items: flex-start;
  }
  .category {
    font-family: SourceSansPro;
    font-size: 20px;
    font-weight: 400;
    text-align: left;
    color: #5e5b5b;
    box-sizing: border-box;
    margin-bottom: 10px;
  }
  .category_info {
    font-family: SourceSansPro;
    font-size: 20px;
    font-weight: 600;
    text-align: left;
    box-sizing: border-box;
    padding: 0 0 0px 20px;
    margin-bottom: 10px;
  }
  .price_info {
    height: 100%;
    box-sizing: border-box;
    padding: 0 0 0 20px;
  }
  .nav_back {
    .nav_btn {
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
    }
  }
`;
const NavBack = styled.div`
  width: 7%;
  .nav_btn {
    height: 40px;
    width: 40px;
    background-color: #8a8a8a;
    box-sizing: border-box;
    padding: 10px;
    border-radius: 10px;
    img {
      width: 100%;
      transform: rotate(180deg);
    }
  }
`;

export {
  Content,
  ContentContainer,
  BookingBanner,
  BookingBannerTitle,
  BookingBannerDetail,
  Screen,
  SeatNote,
  Order,
  NavBack,
};
