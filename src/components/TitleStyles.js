import styled from 'styled-components';

export const LogoImage = styled.img`
    width: 46px; 
    height: 46px;
    border-radius: 50%;
    margin-left: 20px;
  @media (max-width: 630px) {
    width: 39px;
    height: 39px;
  }
`;
export const Contect = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 38px;
  font-weight: 400;
  line-height: 55.2px;
  border-bottom:  ${props => !props.hideLogoOnMobile && `4px solid;`};
  @media (max-width: 630px) {
    font-size: 28px;
    line-height: 32px;
    margin: 0 32px 0 32px;
      ${props => props.hideLogoOnMobile && `
            ${LogoImage} {
                display: none;
            }
            
      `}
  }
`;

