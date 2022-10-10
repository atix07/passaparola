/* eslint-disable no-nested-ternary */
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
  LetterWrapper,
  Letter,
} from './gameElements';
import Questions from '../../constants/questions.json';

const index = () => {
  const [playAnim, setPlayAnim] = useState(false);
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [myAnswer, setMyAnswer] = useState('');
  const [isEnd, setIsEnd] = useState(false);

  const handleScroll = () => {
    const anchor = document.getElementById((currentQuestion + 1).toString());
    if (anchor) { anchor.scrollIntoView({ behavior: 'smooth', block: 'center' }); }
  };

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
          isTrue: selectedQuestions[currentQuestion].answer.toString()
          === (myAnswer.toLocaleLowerCase()).toString(),
        };
      }
      return data;
    });
    setSelectedQuestions(tempData);
  };

  const markPassed = () => {
    const tempData = selectedQuestions.map((data) => {
      if (data.index === currentQuestion) {
        return {
          ...data,
          passed: true,
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
          passed: false,
          isTrue: false,
          letter: Questions[i].letter,
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
    handleScroll();
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

    markAnswered();

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

    markPassed();

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
          <LetterWrapper id="scroll-container">
            {selectedQuestions.map((question) => (
              <Letter
                active={currentQuestion === question.index}
                background={question.passed && !question.answered ? '#FFFFE0' : question.answered && question.isTrue ? '#90EE90' : (question.answered ? '#FFCCCB' : '#fff')}
                key={question.index}
                id={question.index}
              >
                {(question.letter).toUpperCase()}
              </Letter>
            ))}
          </LetterWrapper>
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
            <TimeText>Kalan zaman</TimeText>
            <TimeText>{`${minutes}:${seconds}`}</TimeText>
          </TimerWrapper>
        </>
      ) : (
        <p>Oyun bitti!</p>
      )}
    </GameContainer>
  );
};

export default index;
