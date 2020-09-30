import React from 'react';
import styled from 'styled-components';

const Mbox = styled.div`
    display: flex;
    max-width: 300px;
    justify-content: center;
    align-items: center;
`;

const Type = styled.div`
    margin-right: 10px;
    margin-left: 10px;
`;

const Line= styled.div`
min-width: 100px;
max-height: 1px;
border: 1px solid black;
`;

const Divider = () => {
    return <Mbox>
        <Line></Line>
        <Type>or</Type>
        <Line></Line>
    </Mbox>
}

export default Divider;