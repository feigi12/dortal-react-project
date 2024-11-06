import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import {selectUserWithAgent} from "../redux/selector";
import styled from "styled-components";
import agentImage from "../assets/images/agent.png";

const Container = styled.div`
  color: #009C41;
  padding: 20px 15px 20px 15px ;
  display: flex;
  align-items: center;
  @media (max-width: 630px) {
    padding-bottom: 0;
    background: white;
  }
`;
const Value = styled.div`
   font-weight: bold;
  margin-right: 5px;
`;
const LogoAgent = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 10px;
  background: #009C41;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
`;
const Row=   styled.div`
display: flex;
`
const Header = () => {
    const userWithAgent = useSelector(selectUserWithAgent);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth <= 630);
        };

        checkIfMobile();

        window.addEventListener('resize', checkIfMobile);

        return () => {
            window.removeEventListener('resize', checkIfMobile);
        };
    }, []);

    return (
        <Container>
            <LogoAgent>
                <img src={agentImage} alt='Logo'/>
            </LogoAgent>
            <div>
            <Row>
                {isMobile && 'שם סוכן'}
                <Value>{userWithAgent.insuranceAgent?.name || 'לא נמצא סוכן'}</Value>
            </Row>
                {isMobile ? <Row>
                קולקטיב
                <Value>{userWithAgent.insuranceAgent.collective}</Value>
            </Row>:<Row>
                    מספר משתמש
                    <Value>{userWithAgent.id}</Value>
                </Row>}
            </div>
        </Container>
    );
};

export default Header;
