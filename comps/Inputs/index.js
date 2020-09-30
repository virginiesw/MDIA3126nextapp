import React from 'react';
import styled from 'styled-components';

const Mbox = styled.div`
    display: flex;
    flex-direction: column;
`;

const LabelText = styled.div`
    margin-bottom: 8px;
    margin-top: 10px;
`;

const InputBox = styled.input`
min-width: 300px;
min-height: 30px;
background: #F2F4FB;
border: none;
`;

const Inputs = ({text}) => {
    return <Mbox>
        <LabelText>{text}</LabelText>
        <InputBox></InputBox>
    </Mbox>
}
Inputs.defaultProps ={
    text: "EMAIL"
}

export default Inputs;