/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { MainContainer, MainWrapper } from './components/main/mainElements';

// Sections
import HomeSection from './components/home';
import GameSection from './components/game';

function App() {
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);

  const startGame = () => {
    setStarted(true);
  };

  return (
    <MainContainer>
      <MainWrapper>
        {!started
          ? <HomeSection startGame={startGame} />
          : <GameSection />}
      </MainWrapper>
    </MainContainer>
  );
}

export default App;
