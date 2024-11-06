import styled from "styled-components";
import { FaCheck } from 'react-icons/fa';

export const TableContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 14px;  
`;
export const ActionIconContainer = styled.div`
  display: none; 
  align-items: center;
  position: absolute;
  right: -120px; 
  top: 15%;
`;

export const ActionIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px; 
  height: 40px; 
  border-radius: 50%; 
  background-color: ${(props) => props.bgColor || 'white'}; 
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); 
  cursor: pointer; 
  transition: background-color 0.3s;

  &:hover {
    background-color: #f0f0f0;
  }
`;
export const Div = styled.div`
 width: 60px;
`;

export const ActionText = styled.span`
  font-size: 12px; 
  margin-top: 5px; 
`;

export const Row = styled.div`
  position: relative;
  &:hover {
    ${ActionIconContainer} {
      display: flex;
    }
`;

export const TableRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  background-color: #fff;
  border-radius: 35px;
  transition: background-color 0.3s;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  color: #1D4076;
  &:hover {
    background-color: #FF7728;
    color: white;
    ${ActionIconContainer} {
      display: flex;
    }
  }
  &:hover .check-icon {
    color: #fff;
  }
`;

export const TableCell = styled.div`
  flex: 1;
  text-align: center;
  border-right: 1px solid #ddd;
  
  &:first-child {
    border-right: none;
  }
`;
export const HeaderCell = styled(TableCell)`
  color: #fff;
  border-right: none;
  font-weight: 400;
`;
export const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  color: #fff;
  font-weight: bold;
`;
export const CheckIcon = styled(FaCheck)`
  color: green;
`;
