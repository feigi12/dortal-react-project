import React from 'react';
import styled from 'styled-components';
import {useSelector} from "react-redux";
import {selectInsurance} from "../redux/agentSlice";
import Edit from "../assets/images/editWhite.png";
import Send from "../assets/images/sendWhite.png";
import Car from "../assets/images/car.png";
import HealthInsurance from "../assets/images/health _insurance.png";
import {ActionIcon} from "./InsuranceTableStyles";
import {selectUserWithAgent} from "../redux/selector";

const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #1D4076;
  padding-bottom: 10px;
`;

const CardContainer = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin: 10px;
  padding: 16px;
  position: relative;
  color: #1D4076;
  width: 280px;
`;

const ActionIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90px;
`;

const Value = styled.div`
  font-size: 18px;
  font-weight: 700;
  text-align: right;
  color:#21325E;
  display: flex;
  justify-content: space-between;
`;

const Title = styled.div`
  font-size: 15px;
  font-weight: 400;
  line-height: 20.7px;
  text-align: right;
  color: #797979;
  margin-top: 10px;
`;


const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Status = styled.span`
  color: green;
`;

const industryImages = {
    "רכב": Car,
    "ביטוח בריאות": HealthInsurance,
};

const InsuranceCard = ({ searchTerm }) => {
    const insuranceData = useSelector(selectUserWithAgent).insuranceAgent.policies;

    const filteredData = insuranceData.filter(item =>
        Object.values(item).some(value =>
            value.toString().includes(searchTerm)
        )
    );
    return (
        <>
        {filteredData.map((item, index) =>
        <CardContainer key={index}>
            <Header>
                <img src={industryImages[item.industry]} alt={item.industry} width='50px'/>
            <ActionIcons>
                <ActionIcon bgColor='#009C41'>
                    <img src={Edit} alt='Edit' className='send-icon'/>
                </ActionIcon>
                <ActionIcon bgColor='#009C41'>
                    <img src={Send} alt='send' className='send-icon'/>
                </ActionIcon>
            </ActionIcons>
            </Header>
            <Title>קולקטיב: </Title>
            <Value>{item.collective}</Value>
            <Title>שם מבוטח: </Title>
            <Value>{item.insuredName}</Value>
            <Row>
                <div>
                    <Title>תעודת זהות: </Title>
                    <Value>{item.id}</Value>
                </div>
                <div>
                    <Title>מספר רישוי: </Title>
                    <Value>{item.licenseNumber}</Value>
                </div>
            </Row>
            <Row>
                <div>
                    <Title>פתיחת הצעה: </Title>
                    <Value>{item.proposalDate}</Value>
                </div>
                <div>
                    <Title>תחילת ביטוח: </Title>
                    <Value>{item.insuranceStartDate}</Value>
                </div>
            </Row>
            <Title>פוליסה:</Title>
            <Value>
                {item.policyNumber}
                <Status>{item.sentToCustomer === 'כן' ? " (נשלח ללקוח)" : " (לא נשלח ללקוח)"}</Status>
            </Value>


        </CardContainer>
        )}
        </>
    );
};

export default InsuranceCard;
