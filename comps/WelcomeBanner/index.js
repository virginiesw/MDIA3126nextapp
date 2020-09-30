import React from 'react';
import styled from 'styled-components';

const Mbox = styled.div`
display: flex;
flex-direction: column;
`;

const HText = styled.div`
font-size: 30px;
`;

const DText = styled.div`
color: black
`;

const WelcomeBanner = ({header, description}) => {
    return <Mbox>
    <HText>{header}</HText>
    <DText>{description}</DText>
    </Mbox>
}

WelcomeBanner.defaultProps ={
    header: "Welcome",
    description: "Hi User, let's get started!"
}

export default WelcomeBanner;
