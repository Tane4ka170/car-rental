import styled from "styled-components";
import backgroundImage from "../../images/backgroundImage.jpg";

export const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  text-align: center;
  background: url(${backgroundImage}) no-repeat center center fixed;
  background-size: cover;
  height: 600px;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: inherit;
    filter: blur(8px);
  }

  h1 {
    position: relative;
    z-index: 1;
    padding: 50px 20px;
    color: #cabeb8;
    font-size: 36px;
    line-height: 1.5;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  }
`;

// Services section
export const ServicesSection = styled.section`
  padding: 40px 0;
  background-color: #909597;
`;

export const ServicesContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const ServicesHeading = styled.h2`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 30px;
  color: #755546;
`;

export const ServicesList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
`;

export const ServiceItem = styled.div`
  background-color: #100d0b
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;

  div {
    margin-bottom: 20px;
  }

  svg {
    width: 50px;
    height: 50px;
    fill: #515552;
  }

  p {
    font-size: 14px;
    color: #100d0b;
  }
`;
// Rental Section;
export const RentalSection = styled.section`
  padding: 40px 20px;
  background-color: #7c8088;
`;
export const RentalHeading = styled.h2`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 30px;
  color: #bb3843;
`;

export const RentalText = styled.p`
  font-size: 16px;
  line-height: 1.5;
  color: #452613;
  margin-bottom: 20px;
`;

export const RentalList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    display: flex;
    align-items: center;
    font-size: 16px;
    line-height: 1.5;
    color: #404145;
    margin-bottom: 10px;

    div {
      margin-right: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 24px;
      height: 24px;
      border: 2px solid #cabeb8;
      border-radius: 50%;
    }

    svg {
      width: 18px;
      height: 18px;
      fill: #909597;
    }
  }
`;

export const RentalBenefits = styled.div`
  background-color: #755546;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  h3 {
    font-size: 24px;
    margin-bottom: 20px;
    color: #100d0b;
    text-align: center;
  }

  p {
    font-size: 16px;
    line-height: 1.5;
    color: #cabeb8;
    margin-bottom: 20px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      font-size: 16px;
      line-height: 1.5;
      color: #452613;
      margin-bottom: 15px;
      display: flex;
      align-items: center;

      div {
        margin-right: 10px;
        color: #515552;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 24px;
        height: 24px;
        background-color: #7c8088;
        border-radius: 50%;
      }

      svg {
        width: 18px;
        height: 18px;
        fill: #bb3843;
      }
    }
  }
`;

export const AdditionalFeaturesSection = styled.div`
  padding: 20px;
  background-color: #404145;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  h3 {
    font-size: 1.5em;
    color: #cabeb8;
    text-align: center;
    margin-bottom: 20px;
  }

  p {
    margin-bottom: 15px;
    color: #909597;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;

    li {
      margin-bottom: 10px;
      display: flex;
      align-items: center;
      color: #100d0b;

      div {
        margin-right: 10px;
        color: #755546;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 24px;
        height: 24px;
        background-color: #515552;
        border-radius: 50%;
      }

      svg {
        fill: #7c8088;
      }
    }
  }
`;

export const BusinessDurationSection = styled.div`
  padding: 20px;
  background-color: #cabeb8;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  h3 {
    font-size: 1.5em;
    color: #bb3843;
    margin-bottom: 20px;
    text-align: center;
  }

  p {
    margin-bottom: 15px;
    color: #452613;
  }
`;
