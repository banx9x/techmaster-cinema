import styled from "styled-components";
import banner from "../assets/images/banner.jpg";
const BannerWrap = styled.div`
  padding-bottom: 40px;
`;
const Banner = () => (
  <BannerWrap>
    <img src={banner} alt="banner" />
  </BannerWrap>
);

export default Banner;
