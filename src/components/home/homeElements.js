import styled from 'styled-components';
import { motion } from 'framer-motion';

export const HomeContainer = styled(motion.div)`
width: 100%;
`;

export const HomeLogo = styled.img`
display: flex;
width: 100%;
height: auto;
max-width: 400px;
margin-left: auto;
margin-right: auto;
margin-bottom: 5rem;

@media screen and (max-width: 768px) {
    max-width: 300px;
}

@media screen and (max-width: 480px) {
    max-width: 200px;
}
`;

export const HomeButton = styled.button`
display: flex;
width: fit-content;
height: fit-content;
padding: 10px 50px;
border: 2px solid #fff;
border-radius: 10px;
font-size: 24px;
background-image: linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%);
box-shadow: 0 4px 15px 0 rgba(126, 52, 161, 0.75);
background-size: 300% 100%;
-o-transition: all .2s ease-in-out;
-webkit-transition: all .2s ease-in-out;
transition: all .2s ease-in-out;
color: #fff;
margin-left: auto;
margin-right: auto;

@media screen and (max-width: 768px) {
    font-size: 22px;
}

@media screen and (max-width: 480px) {
    font-size: 18px;
}

&:hover {
    cursor: pointer;
    transform: scale(1.05);
    letter-spacing: 1.5px;
    background-position: 100% 0;
    -o-transition: all .2s ease-in-out;
    -webkit-transition: all .4s ease-in-out;
    transition: all .2s ease-in-out;
}
`;

export const HomeDesc = styled.p`
width: 100%;
font-size: 18px;
color: #fff;
margin-bottom: 2rem;
word-break: break-all;
text-align: center;
font-weight: 500;

@media screen and (max-width: 480px) {
    font-size: 16px;
}
`;
