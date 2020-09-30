import React from 'react';
import styled from 'styled-components';

const Mbox = styled.div`
min-width: 100px;
min-height: 220px;
border-radius: 5px;
background-color: #A1A6C5;
position: relative;
`;

const Image = styled.div`
background-image: url(${props=>props.bgimage ? props.bgimage: "/waving.png"});
background-repeat: no-repeat;
min-width: 60px;
min-height: 60px;
`;

const Close = styled.div`
background-image: url(${props=>props.bgimage ? props.bgimage: "/close.png"});
background-repeat: no-repeat;
min-width: 10px;
min-height: 10px;
position: absolute;
right: 20px;
top: 15px;
`;


const Triangle = styled.div`
background-image: url(${props=>props.bgimage ? props.bgimage: "/triangle.png"});
background-repeat: no-repeat;
min-width: 30px;
min-height: 30px;
position: absolute;
right: 40px;
bottom: -27px;
`;

const MText = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-contet: center;
padding: 10px;
position: relative;
color:white;
`;

const HText = styled.div`
font-size: 30px;
`;

const BText = styled.div`
`;

const NText = styled.div`
margin-top: 50px;
`;

const Next = styled.button`
position: absolute;
right: 30px;
bottom: 15px;
min-width: 100px;
min-height: 40px;
background-color: #495678;
border: none;
border-radius: 3px;
color: white;
`;

const Popup = ({bgimage, text, dtext, ntext, Btext, iconimage, Timg}) => {
    return <Mbox>
        <Close src={iconimage}></Close>
        <MText>
            <Image src={bgimage}></Image>
            <HText>{text}</HText>
            <BText>{dtext}</BText>
            <NText>{ntext}</NText>
        </MText>
        <Next>{Btext}</Next>
        <Triangle>{Timg}</Triangle>
    </Mbox>
}
Popup.defaultProps ={
    bgimage: "/hero.png",
    text: "Welcome to My App!",
    dtext: "We're excited to help you",
    ntext: "1/4",
    Btext: "Next",
}

export default Popup;

{/* <Image bgimage={bgimage}>
    </Image> */}