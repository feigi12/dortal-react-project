import styled from 'styled-components';
import backgroundImage from '../assets/images/second_screen_bg.jpg';

export const BackgroundDiv = styled.div`
    background-image: url(${backgroundImage});
    background-size: cover;
    position: absolute;
    height: 100vh;
    width: 100%;
  @media (max-width: 630px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-attachment: fixed;
    z-index: -1; 
  }
`;
export const ContentContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: 20px;
  position: relative;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 10px 50px 0px 50px;

  @media (max-width: 630px) {
    overflow-y: auto;
    padding: 40px 0 0 0;
  }

  @media (min-width: 769px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const DualButton = styled.div`
    display: flex;
    width: fit-content;
    border-radius: 35px;
    overflow: hidden;
    background:#FFFFFF;
    margin-bottom: 8px;
`;

export const ButtonInput = styled.input`
    display: none;
`;

export const ButtonPart = styled.label`
  width: 400px;
  height: 53px;
  font-size:20px;
  background-color: #FFFFFF;
  color: #5F5F5F;
  cursor: pointer;
  text-align: center;
  transition: background-color 0.3s;

    ${ButtonInput}:checked + & {
        background-color: #FF7728;
        color: white;
        border-radius: 35px;
    }
  @media (max-width: 630px) {
    width: 165px;
    height: 35px;
    font-size: 16px;
  }
`;

export const Button = styled.button`
  width: 250px;
  height: 50px;
  border-radius: 35px;
  font-size: 20px;
  background-color: #009C41;
  color: white;
  cursor: pointer;
  &:before {
    content: 'הצעה חדשה';
  }
  @media (max-width: 630px) { 
    border: 2px solid #009C41;
    border-radius: 50%; 
    width: 40px; 
    height: 40px; 
    padding: 0;
    img {
      display: none;
    }
    &:before {
      content: '+';
      font-size: 30px;
    }
`;
export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60%;
  margin-bottom: 15px;
  padding-bottom: 20px;
  border-bottom:  ${props => props.isMobile && `3px solid white`};

`;

export const WhiteBar = styled.div`
  width: 329px;
  height: 3px;
  color: white;
  gap: 0px;
  border-radius: 2px 0px 0px 0px;
`;
