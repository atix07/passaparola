/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
import React, { useEffect, useState } from 'react';
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
import Questions from '../../constants/questions.json';

const index = () => {
  const [playAnim, setPlayAnim] = useState(false);
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [myAnswer, setMyAnswer] = useState('');
  const [isEnd, setIsEnd] = useState(false);

  const variants = {
    show: { opacity: 1, scale: 1, transition: { duration: 0.25 } },
    hidden: { opacity: 0, scale: 0, transition: { duration: 0.25 } },
  };

  const EndGame = () => {
    setIsEnd(true);
  };

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const markAnswered = () => {
    const tempData = selectedQuestions.map((data) => {
      if (data.index === currentQuestion) {
        return {
          ...data,
          answered: true,
        };
      }
      return data;
    });
    setSelectedQuestions(tempData);
  };

  const getQuestions = () => {
    for (let i = 0; i < 28; i++) {
      const data = Questions[i].questions;
      const randData = data[getRandomInt(data.length)];
      setSelectedQuestions((prev) => [
        ...prev,
        {
          question: randData.question,
          answer: randData.answer,
          index: i,
          answered: false,
        },
      ]);
    }
  };

  useEffect(() => {
    getQuestions();
  }, []);

  useEffect(() => {
    if (currentQuestion >= 28) {
      setCurrentQuestion(0);
    }
    if (selectedQuestions[currentQuestion]?.answered === true) {
      setCurrentQuestion(currentQuestion + 1);
    }
  }, [currentQuestion]);

  const {
    seconds,
    minutes,
    restart,
  } = useTimer({ onExpire: () => { EndGame(); } });

  const StartGame = () => {
    setIsEnd(false);
    setCurrentQuestion(0);

    let time = new Date();
    time = time.setSeconds(time.getSeconds() + 300);
    restart(time);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!myAnswer) return console.log('Answer cant be empty');

    if (selectedQuestions[currentQuestion].answer.toString()
    === (myAnswer.toLocaleLowerCase()).toString()) {
      markAnswered();
    }

    setPlayAnim(true);
    setMyAnswer('');

    // Get new question
    setTimeout(() => {
      setPlayAnim(false);
      setCurrentQuestion(currentQuestion + 1);
    }, [500]);
  };

  const handlePass = (e) => {
    e.preventDefault();

    setPlayAnim(true);
    setMyAnswer('');

    // Get new question
    setTimeout(() => {
      setPlayAnim(false);
      setCurrentQuestion(currentQuestion + 1);
    }, [500]);
  };

  return (
    <GameContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      onAnimationComplete={() => StartGame()}
    >
      {!isEnd ? (
        <>
          <QuestionWrapper
            variants={variants}
            animate={playAnim ? 'hidden' : 'show'}
            transition={{ duration: 1 }}
          >
            <GameQuestionHeader>{`Soru ${currentQuestion + 1}:`}</GameQuestionHeader>
            <GameQuestiontext>{selectedQuestions[currentQuestion]?.question}</GameQuestiontext>
          </QuestionWrapper>
          <GameForm>
            <GameInput
              value={myAnswer}
              onChange={(e) => setMyAnswer(e.target.value)}
              placeholder="Cevap"
              type="text"
            />
            <GameButtonWrapper>
              <GameButton disabled={playAnim} onClick={handleSubmit}>Cevapla</GameButton>
              <GameButton disabled={playAnim} onClick={handlePass}>Pas</GameButton>
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
