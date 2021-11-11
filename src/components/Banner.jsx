import styled from "styled-components";
import banner from "../assets/images/banner.jpg";
const BannerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  padding: 0px 40px 40px 40px;
`;

const BannerContent = styled.div`
  max-width: 980px;
  img {
    width: 100%;
  }
`;

const Banner = () => (
  <BannerContainer>
    <BannerContent>
      <img src={banner} alt="banner" />
    </BannerContent>
  </BannerContainer>
);

export default Banner;
