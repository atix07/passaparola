/* eslint-disable consistent-return */
import React, { useState } from 'react';
import { useTimer } from 'react-timer-hook';
import {
  TimerWrapper,
  TimeText,
  GameInput,
  GameForm,
  GameButton,
  GameButtonWrapper,
  GameContainer,
  GameQuestiontext,
  GameQuestionHeader,
  QuestionWrapper,
} from './gameElements';

const index = () => {
  const [answer, setAnswer] = useState('');
  const [question, setQuestion] = useState('');
  const [questionIndex, setQuestionIndex] = useState(1);

  const [finished, setFinished] = useState(false);

  const variants = {
    show: { opacity: 1, scale: 1, transition: { duration: 0.25 } },
    hidden: { opacity: 0, scale: 0, transition: { duration: 0.25 } },
  };

  const EndGame = () => {
    setFinished(true);
  };

  const {
    seconds,
    minutes,
    restart,
  } = useTimer({ onExpire: () => { EndGame(); } });

  const StartGame = () => {
    setFinished(false);
    setQuestionIndex(1);

    let time = new Date();
    time = time.setSeconds(time.getSeconds() + 300);

    restart(time);
    setQuestion('dasdasdasdasdasda asdasdasdasdsad asdasd asdasdasdasd');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!answer) return console.log('Answer cant be empty');

    setQuestion('');
    setAnswer('');

    // Get new question
    setTimeout(() => {
      setQuestionIndex(questionIndex + 1);
      setQuestion('dasdasdasdasdasda asdasdasdasdsad asdasd asdasdasdasd');
    }, [500]);
  };

  const handlePass = (e) => {
    e.preventDefault();

    setQuestion('');
    setAnswer('');

    // Get new question
    setTimeout(() => {
      setQuestionIndex(questionIndex + 1);
      setQuestion('dasdasdasdasdasda asdasdasdasdsad asdasd asdasdasdasd');
    }, [500]);
  };

  return (
    <GameContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      onAnimationComplete={() => StartGame()}
    >
      {!finished ? (
        <>
          <QuestionWrapper
            variants={variants}
            animate={question ? 'show' : 'hidden'}
            transition={{ duration: 1 }}
          >
            <GameQuestionHeader>{`Soru ${questionIndex}:`}</GameQuestionHeader>
            <GameQuestiontext>{question}</GameQuestiontext>
          </QuestionWrapper>
          <GameForm>
            <GameInput
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="Cevap"
              type="text"
            />
            <GameButtonWrapper>
              <GameButton onClick={handleSubmit}>Cevapla</GameButton>
              <GameButton onClick={handlePass}>Pas</GameButton>
            </GameButtonWrapper>
          </GameForm>
          <TimerWrapper>
            <TimeText>{`Dakika: ${minutes}`}</TimeText>
            <TimeText>{`Saniye: ${seconds}`}</TimeText>
          </TimerWrapper>
        </>
      ) : (
        <p>Oyun bitti!</p>
      )}
    </GameContainer>
  );
};

export default index;
