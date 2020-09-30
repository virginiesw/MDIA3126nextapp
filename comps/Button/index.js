import React from 'react';
import styled from 'styled-components';

const Mbox = styled.div`
    display: flex;
    max-width 300px;
    min-height: 10px;
    margin-top: 15px;
    flex-direction: column;
    justify-content: space-evenly;
`;

const LoginButt = styled.button`
// background: #3D6FF1;
background-color: ${props=>props.bgcolor ? props.bgcolor: "#3D6FF1"};
border-radius: 5px;
min-height: 35px;
border: none;
color: white;
`;

// const SignButt = styled.button`
// // background: #D79B9B;
// background-color: ${props=>props.bgcolor ? props.bgcolor: "#3D6FF1"};
// border-radius: 5px;
// min-height: 35px;
// border: none;
// color: white;
// `;

const Button = ({text, bgcolor}) => {
    return <Mbox>
        <LoginButt bgcolor={bgcolor}>{text}</LoginButt>
        {/* <SignButt bgcolor={bgcolor}>{text}</SignButt> */}
    </Mbox>
}

Button.defaultProps ={
    text: "Login",
    bgcolor: "#3D6FF1"
}

export default Button;