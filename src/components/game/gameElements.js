import styled from 'styled-components';
import { motion } from 'framer-motion';

export const GameContainer = styled(motion.div)`
width: 100%;
`;

export const TimerWrapper = styled.div`
position: absolute;
bottom: 5rem;
left: 50%;
transform: translate(-50%, 0);
display: flex;
flex-direction: row;
background-image: linear-gradient(30deg, #8EC5FC 0%, #E0C3FC 100%);
box-shadow: 0 4px 15px 0 rgba(255, 255, 255, 0.75);
border: 2px solid #fff;
padding: 10px 25px;
border-radius: 10px;
gap: 10px;
margin-top: 2rem;
flex-direction: column;
`;

export const TimeText = styled.span`
font-size: 24px;
color: #fff;
text-align: center;
font-weight: 500;

@media screen and (max-width: 768px) {
    font-size: 20px;
}

@media screen and (max-width: 480px) {
    font-size: 16px;
}
`;

export const GameInput = styled.input`
display: block;
margin: 0;
padding: 0.8rem 1rem;
color: inherit;
width: 100%;
height: 50px;
max-width: 600px;
font-family: inherit;
font-size: 1.5rem;
font-weight: inherit;
line-height: 1.6rem;
border: none;
border-radius: 0.4rem;
transition: box-shadow 300ms;

&::placeholder {
    color: #B0BEC5;
}

&:focus {
    outline: none;
    box-shadow: 0.2rem 0.8rem 1.6rem rgba(255,255,255,0.4);
}
`;

export const GameForm = styled.form`
display: flex;
flex-direction: column;
width: 100%;
justify-content: center;
align-items: center;
`;

export const GameButtonWrapper = styled.div`
display: flex;
flex-direction: row;
gap: 1.5rem;
margin-top: 1rem;
`;

export const GameButton = styled.button`
width: fit-content;
height: fit-content;
padding: 15px 50px;
border: 2px solid #fff;
border-radius: 10px;
font-size: 18px;
background-image: linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%);
background-size: 300% 100%;
-o-transition: all .4s ease-in-out;
-webkit-transition: all .4s ease-in-out;
transition: all .4s ease-in-out;
color: #fff;

@media screen and (max-width: 768px) {
    padding: 15px 35px;
}

@media screen and (max-width: 480px) {
    padding: 10px 25px;
}

&:hover {
    cursor: pointer;
    background-position: 100% 0;
    -o-transition: all .4s ease-in-out;
    -webkit-transition: all .4s ease-in-out;
    transition: all .4s ease-in-out;
    box-shadow: 0 4px 15px 0 rgba(255, 255, 255, 0.50);
}
`;

export const QuestionWrapper = styled(motion.div)`
display: flex;
flex-direction: column;
text-align: center;
`;

export const GameQuestiontext = styled.p`
width: 100%;
font-size: 24px;
color: #fff;
margin-bottom: 2rem;
word-break: break-all;

@media screen and (max-width: 768px) {
    font-size: 20px;
}

@media screen and (max-width: 480px) {
    font-size: 18px;
}
`;

export const GameQuestionHeader = styled.h1`
width: 100%;
font-size: 28px;
color: #fff;
margin-bottom: 0.5rem;

@media screen and (max-width: 768px) {
    font-size: 24px;
}

@media screen and (max-width: 480px) {
    font-size: 20px;
}
`;

export const LetterWrapper = styled.div`
display: flex;
flex-direction: row;
gap: 25px;
margin-bottom: 50px;
overflow-x: scroll;
::-webkit-scrollbar {display:none;}
scroll-behavior: smooth;
`;

export const Letter = styled.div`
display: flex;
background: ${({ background }) => (background)};
min-width: 50px;
min-height: 50px;
border-radius: 10px;
font-size: 24px;
font-weight: bold;
justify-content: center;
align-items: center;
border: ${({ active }) => (active ? '2px solid #000' : 'none')};
`;
