import styled from 'styled-components';
import backgroundImage from '../assets/images/first_screen_bg.jpg';
import mobileBackgroundImage from '../assets/images/second_screen_bg.jpg';

export const BackgroundDiv = styled.div`
    background-image: url(${backgroundImage});
    background-size: cover;
    background-position: center;
    height: calc(100vh - 142px);  
    width: 100%;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  @media (max-width: 630px) { 
    background-image: url(${mobileBackgroundImage});
    height: calc(100vh - 85px);
  }
`;
export const StyledParagraph = styled.p`
    font-size: 24px;
    padding: 0 30px 0 30px;
    text-align: center; 
    margin: 0;
`;

export const HelloDiv = styled.div`
    background:#e5e5e5;
    padding: 20px;
    display: flex;
  @media (max-width: 630px) {
    background:none;
    color: #FF7728;
    padding: 0 75px 0 0;
  }
`;
export const Name = styled.div`
   font-weight: bold;
  padding-right: 5px;
`;
export const Input = styled.input`
  width: 250px;
  height: 50px;
  border-radius: 35px;
  margin-top: 10px;
  @media (max-width: 630px) {
    width: 100%;
  }
`;
export const Row = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 630px) {
    width: 90%;
  }
`;
export const ButtonLogin = styled.button`
  width: 250px;
  height: 50px;
  border-radius: 35px;
  font-size: 20px;
  background-color: ${(props) => props.bgColor};
  color: white;
  margin-left: 30px;
  cursor: pointer;
  &:disabled {
    background-color: #e0e0e0;
    cursor: not-allowed;
  }
  @media (max-width: 630px) {
    width: 150px;
    margin-left: 10px;
  }
`;
export const ClearButton = styled.span`
    position: absolute;
    right: 8px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    color: #999;
    font-size: 18px;
    &:hover {
        color: #555;
    }
`;