import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {clearUser, login } from '../redux/userSlice';
import { useNavigate } from 'react-router-dom';
import {BackgroundDiv, ButtonLogin, HelloDiv, Input, Name, Row, StyledParagraph} from "./LoginScreenStyles";
import polygon from '../assets/images/polygon.png';
import Title from "./Title";
import {selectUserWithAgent} from "../redux/selector";


const LoginScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isDisabled = !username || !password;
    const [isMobile, setIsMobile] = useState(false);
    const userWithAgent = useSelector(selectUserWithAgent);


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

    const handleLogin = () => {
        dispatch(login({ userName: username, password: password }));
        navigate('/dashboard');
    };
    const handleClear = () => {
        setPassword('');
        setUsername('');
        dispatch(clearUser());
    };
    return (
        <>
            <HelloDiv>שלום,
             <Name>{userWithAgent.name}</Name>
           </HelloDiv>
        <BackgroundDiv>
            <Title text='כניסה למערת - צפיה בהצעת מחיר'/>
            {isMobile ? (
                <StyledParagraph>לקבלת קוד הכניסה הזן את מספר טלפון הנייד</StyledParagraph>
            ) : (
                <StyledParagraph>הזן את קוד הכניסה, אם לא קיבלת קוד לחץ על שליחת קוד חדש</StyledParagraph>
            )}
            <Row>
                שם משתמש
                <Input type="text" value={username} onChange={(e) => setUsername(e.target.value)} >
                </Input>
            </Row>
            <Row>
               סיסמא
               <Input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
            </Row>
            <div>
                <ButtonLogin bgColor='#009C41' onClick={handleClear}>ביטול</ButtonLogin>
                <ButtonLogin bgColor='#C4C4C4' onClick={handleLogin} disabled={isDisabled}>כניסה <img src={polygon} alt='sign' /> </ButtonLogin>
            </div>
        </BackgroundDiv>
        </>
    );
};

export default LoginScreen;
