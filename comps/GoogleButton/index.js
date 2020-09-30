import React from 'react';
import styled from 'styled-components';

const Mbox = styled.div`
    display: flex;
    max-width 300px;
    min-height: 100px;
    flex-direction: column;
    justify-content: space-evenly;
`;

const GoogleButt = styled.button`
background: #4285F4;
min-height: 35px;
border: none;
color: white;
display: flex;
align-items: center;
// justify-content: center;
`;

const GText = styled.div`
margin: auto;
`;

const Icon = styled.div`
background-color: white;
min-height: 35px;
min-width: 35px;
position: relative;
left: -4px;
img {
    padding: 7px;
}
`;


const GoogleButton = () => {
    return <Mbox>
        <GoogleButt>
            <Icon><img src="/google.png" /></Icon>
            <GText>Login with Google</GText>
    </GoogleButt>
    </Mbox>
}

export default GoogleButton;