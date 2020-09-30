import React from 'react';
import styled from 'styled-components';
import Button from '../Button';
import Inputs from '../Inputs';



const Mbox = styled.div`
display: inline-flex;
flex-direction: column;
justify-content: center;
`;

const TBox = styled.div`
`;

const Text = styled.div`
    color: blue;
    margin-top: 2px;
    // display: flex;
    // align-items: right;
`;

const Contain = styled.div`
position: relative;
right: -250px;
top: -230px;
`;

const Signup = ({text}) => {
    return <Mbox>
        <TBox>{text}</TBox>
        <Inputs />
        <Inputs text="PASSWORD" />
        <Inputs text="CONFIRM PASSWORD" />
        <Button bgcolor="#D79B9B" text="Signup"  />
    </Mbox>
}

Signup.defaultProps ={
    text: "Signup For an account",
}

export default Signup;