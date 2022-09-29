import React from 'react';
import {
  HomeLogo,
  HomeButton,
  HomeContainer,
  HomeDesc,
} from './homeElements';
import logo from '../../images/logo.png';

const index = ({ startGame }) => (
  <HomeContainer
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <HomeLogo alt="logo" src={logo} />
    <HomeDesc>
      Sorulan soruların cevabı sıralı harflerle başlıyor.
      Örneğin ilk sorunun cevabı &quot;A&quot; harfi ile, ikinci sorunun
      cevabı &quot;B&quot; harfi ile başlıyor. Bilemediğimiz soruyu geçmek
      için &quot;PAS&quot; butonuna basıyoruz.
    </HomeDesc>
    <HomeButton onClick={startGame}>BAŞLA</HomeButton>
  </HomeContainer>
);

export default index;
