import React from 'react';
import styled from 'styled-components';

const Mbox = styled.div`
    display: flex;
    justify-content: space-between;
    // // align-items: center;
    // border: 1px solid black;
    min-height: 50px;
    padding: 10px;
    background-color: #F2F4FB;
`;

const Image = styled.div`
background-image: url(${props => props.bgimage ? props.bgimage : "/logo.png"});
background-repeat: no-repeat;
min-width: 100px;
min-height: 30px;
`;

const RBox = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
`;

const Avatar = styled.div`
background-image: url(${props => props.bgimage ? props.bgimage : "/logo.png"});
min-width: 50px;
background-repeat: no-repeat;
min-height: 50px;
`;

const LBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ABox = styled.div`
display: flex;
align-items: center;
justify-content: center;
`;



const Header = ({ bgimage }) => {
    return <Mbox>
        <LBox>
            <Image src={bgimage}></Image>
            <Image bgimage="/menu.png"></Image>
            <Image bgimage="/menu2.png"></Image>
        </LBox>
        <RBox>
            <ABox>
                <Image bgimage="/search.png"></Image>
                <Image bgimage="/bell.png"></Image>
            </ABox>
            <Avatar bgimage="/avatar.png"></Avatar>
        </RBox>

    </Mbox>
}


export default Header;