import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    BackgroundDiv,
    Button,
    ButtonInput,
    ButtonPart,
    DualButton,
    Row,
    ContentContainer,
    WhiteBar
} from "./DashbordStyles";
import Title from "./Title";
import SearchBar from "./SearchBar";
import polygon from "../assets/images/polygon.png";
import InsuranceTable from "./InsuranceTable";
import InsuranceCard from "./InsuranceCard";

const DashboardScreen = () => {
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState("");
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

    const handleSearch = (query) => {
        setSearchTerm(query);
    };

    return (
        <><BackgroundDiv/>
          <ContentContainer>
            <Title
                hideLogoOnMobile={isMobile ? true : false}
                text={
                <DualButton>
                    <ButtonInput type="radio" id="part1" name="button" defaultChecked />
                    <ButtonPart htmlFor="part1">הצעות אחרונות</ButtonPart>

                    <ButtonInput type="radio" id="part2" name="button" />
                    <ButtonPart htmlFor="part2">פוליסות שהופקו</ButtonPart>
                </DualButton>
            }
            />
            <Row isMobile={isMobile}>
                <SearchBar  onSearch={handleSearch} />
                <Button> <img src={polygon} alt='sign' /> </Button>
            </Row>
            {isMobile ? <InsuranceCard searchTerm={searchTerm}/> :<InsuranceTable searchTerm={searchTerm}/>
            }
        </ContentContainer>
        </>
    );
};

export default DashboardScreen;
