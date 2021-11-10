import background from "../../assets/img/bg-screen.png";
import filmPoster1 from "../../assets/img/poster 1.jpg";
import arrowNav from "../../assets/img/arrow.png";

import {
  Content,
  ContentContainer,
  BookingBanner,
  BookingBannerTitle,
  BookingBannerDetail,
  Screen,
  SeatNote,
  Order,
} from "../../components/bookingSeat/BookingStyle";

export default () => {
  return (
    <Content>
      <ContentContainer>
        <BookingBanner>
          <BookingBannerTitle>
            <span>ĐẶT VÉ ONLINE</span>
          </BookingBannerTitle>
          <BookingBannerDetail>
            <div>Vinema Thanh Xuân</div>
            <div>Phòng chiếu 2, 16/10/2021, 19:00 - 21:08</div>
          </BookingBannerDetail>
        </BookingBanner>
        <Screen>
          <img src={background} alt="bg-screen" />
        </Screen>
        <div className="seat_layout" id="seat_layout"></div>
        <SeatNote>
          <div className="col">
            <div className="seat_type">
              <div className="seat_icon" id="vip"></div>
              <span>Vip</span>
            </div>
            <div className="seat_type">
              <div className="seat_icon" id="normal"></div>
              <span>Thường</span>
            </div>
          </div>
          <div className="col">
            <div className="seat_type">
              <div className="seat_icon" id="booked"></div>
              <span>Đã được đặt</span>
            </div>
            <div className="seat_type">
              <div className="seat_icon" id="checked"></div>
              <span>Đang chọn</span>
            </div>
          </div>
        </SeatNote>
        <Order>
          <div className="nav_back" style={{ width: "7%" }}>
            <a href="../film_cinema/index.html">
              <div className="nav_btn">
                <img src={arrowNav} />
              </div>
            </a>
          </div>
          <div className="film_info" style={{ width: "35%" }}>
            <div className="film_img">
              <img src={filmPoster1} />
            </div>
            <div className="film_text">
              <div>The Conjuring: Ma Xui Quỷ Khiến</div>
              <div>2D</div>
              <div>C16</div>
            </div>
          </div>
          <div className="location_info" style={{ width: "25%" }}>
            <table>
              <tbody>
                <tr>
                  <th className="category">Rạp:</th>
                  <th className="category_info">Vinema Thanh Xuân</th>
                </tr>
                <tr>
                  <th className="category">Suất chiếu:</th>
                  <th className="category_info">
                    19:00 - 21:08 <br /> 16/10/2021
                  </th>
                </tr>
                <tr>
                  <th className="category">Phòng chiếu:</th>
                  <th className="category_info">Phòng 2</th>
                </tr>
                <tr>
                  <th className="category">Vé:</th>
                  <th className="category_info">F8, F12, F9</th>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="price_info" style={{ width: "26%" }}>
            <table>
              <tbody>
                <tr>
                  <th className="category">Giá vé:</th>
                  <th className="category_info">120.000 VNĐ</th>
                </tr>
                <tr>
                  <th className="category">Combo:</th>
                  <th className="category_info">0</th>
                </tr>
                <tr>
                  <th className="category">Tổng</th>
                  <th
                    className="category_info"
                    style={{ fontSize: "24px", color: "#d32521" }}
                  >
                    {" "}
                    120.000 VNĐ
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="nav_forward" style={{ width: "7%" }}>
            <a href="../booking_combo/index.html">
              <div className="nav_btn">
                <img src={arrowNav} style={{ width: "100%" }} />
              </div>
            </a>
          </div>
        </Order>
      </ContentContainer>
    </Content>
  );
};
