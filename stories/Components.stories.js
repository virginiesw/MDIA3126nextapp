import React from 'react';
import Button from '../comps/Button';
import GoogleButton from '../comps/GoogleButton';
import Inputs from '../comps/Inputs';
import Divider from '../comps/Divider';
import Banner from '../comps/Banner';
import Hero from '../comps/Hero';
import Welcome from '../comps/WelcomeForm';
import Signup from '../comps/SignupForm';
import Header from '../comps/Header';
import WelcomeBanner from '../comps/WelcomeBanner';
import Popup from '../comps/PopUp';



export default {
    title: 'Components',
    // component: Header
};

export const ButtonComp = () => <Button />;
export const ButtonSignupComp = () => <Button bgcolor="#D79B9B" text="Signup" />;
export const GoogleButtonComp = () => <GoogleButton />;
export const InputComp = () => <Inputs />;
export const InputPassComp = () => <Inputs text="PASSWORD"/>;
export const InputConfPassComp = () => <Inputs text="CONFIRM PASSWORD"/>;
export const DividerComp = () => <Divider />;
export const BannerComp = () => <Banner />;
export const HeroComp = () => <Hero />;
export const HeroBeachComp = () => <Hero bgimage="../public/beach.png" />;
export const WelcomeComp = () => <Welcome />;
export const SignupComp = () => <Signup />;
export const HeaderComp = () => <Header />;
export const WelcomeBannerComp = () => <WelcomeBanner />;
export const PopupComp = () => <Popup />;
