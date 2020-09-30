import React from 'react';
import styled from 'styled-components';
import Button from '../Button';
import GoogleButton from '../GoogleButton';
import Inputs from '../Inputs';
import Divider from '../Divider';
import Banner from '../Banner';
import Hero from '../Hero';


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

const Welcome = ({text, word}) => {
    return <Mbox>
        <TBox>{text}</TBox>
        <GoogleButton />
        <Divider />
        <Inputs />
        <Inputs text="PASSWORD" />
        <Text>{word}</Text>
        <Button />
        <Button bgcolor="#D79B9B" text="Signup"  />
    </Mbox>
}

Welcome.defaultProps ={
    text: "Welcome back!",
    word: "forgot password?"
}

export default Welcome;