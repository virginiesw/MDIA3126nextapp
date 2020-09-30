import React from 'react';
import styled from 'styled-components';
import Banner from '../Banner';

const Mbox = styled.div`
`;

const Image = styled.div`
background-image: url(${props=>props.bgimage ? props.bgimage: "/hero.png"});
background-repeat: no-repeat;
min-width: 570px;
min-height: 965px;
`;

const Contain = styled.div`
position: relative;
right: -250px;
top: -230px;
`;

const Hero = ({bgimage}) => {
    return <Mbox>
        <Image src={bgimage}>
    </Image>
        <Contain><Banner/></Contain>
    </Mbox>
}
Hero.defaultProps ={
    bgimage: "/hero.png"
}

export default Hero;

{/* <Image bgimage={bgimage}>
    </Image> */}