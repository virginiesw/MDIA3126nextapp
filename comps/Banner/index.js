import React from 'react';
import styled from 'styled-components';

const Mbox = styled.div`
    display: inline-flex;
    flex-direction: column;
    background-color: rgba(255, 255, 255, 0.88);
    padding: 25px;
`;

const Head= styled.div`
font-size: 25px;
`;

const Type = styled.div`
    color: blue;
    margin-top: 10px;
`;


const Banner = () => {
    return <Mbox>
        <Head>Hack your way to learning🎉</Head>
        <Type>Start your free account today</Type>
    </Mbox>
}

export default Banner;