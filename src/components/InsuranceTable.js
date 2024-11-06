import React from 'react';
import { useSelector } from 'react-redux';
import Send from "../assets/images/send.png";
import Edit from "../assets/images/edit.png";
import {
    ActionIcon,
    ActionIconContainer, ActionText, CheckIcon, Div,
    HeaderCell,
    HeaderRow,
    TableCell,
    TableContainer,
    TableRow,
    Row
} from "./InsuranceTableStyles";
import {selectUserWithAgent} from "../redux/selector";

const InsuranceTable = ({ searchTerm }) => {
    const insuranceData = useSelector(selectUserWithAgent).insuranceAgent.policies;

    const filteredData = insuranceData.filter(item =>
        Object.values(item).some(value =>
            value.toString().includes(searchTerm)
        )
    );

    return (
        <TableContainer>
            <HeaderRow>
                <HeaderCell>ענף</HeaderCell>
                <HeaderCell>מוצר</HeaderCell>
                <HeaderCell>שם מבוטח</HeaderCell>
                <HeaderCell>מס' רישוי</HeaderCell>
                <HeaderCell>תעודת זהות</HeaderCell>
                <HeaderCell>פתיחת הצעה</HeaderCell>
                <HeaderCell>תחילת הביטוח</HeaderCell>
                <HeaderCell>מס' פוליסה</HeaderCell>
                <HeaderCell>נשלח ללקוח</HeaderCell>
            </HeaderRow>
            {filteredData.map((item, index) => (
                <Row key={index}>
                    <TableRow>
                    <TableCell>{item.industry}</TableCell>
                    <TableCell>{item.product}</TableCell>
                    <TableCell>{item.insuredName}</TableCell>
                    <TableCell>{item.licenseNumber}</TableCell>
                    <TableCell>{item.id}</TableCell>
                    <TableCell>{item.proposalDate}</TableCell>
                    <TableCell>{item.insuranceStartDate}</TableCell>
                    <TableCell>{item.policyNumber}</TableCell>
                    <TableCell> {item.sentToCustomer === "כן" ? <CheckIcon className="check-icon"/> : null}</TableCell>
                    </TableRow>
                    <ActionIconContainer>
                        <Div>
                            <ActionIcon color='#21325E'>
                                <img src={Edit} alt='Edit' className='send-icon'/>
                            </ActionIcon>
                            <ActionText>עריכת ההצעה</ActionText>
                        </Div>
                        <Div>
                            <ActionIcon color='#21325E'>
                                <img src={Send} alt='send' className='send-icon'/>
                            </ActionIcon>
                            <ActionText>שליחת ההצעה</ActionText>
                        </Div>

                    </ActionIconContainer>
                </Row>
            ))}
        </TableContainer>
    );
};

export default InsuranceTable;
