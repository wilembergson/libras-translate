import { useEffect, useState } from "react";
import styled from "styled-components"
import Header from "./components/Header";
import Letter from "./components/Letter";
import AOS from 'aos'

export default function App() {
  AOS.init();
  const [word, setWord] = useState<string>('')
  const [arrayWord, setArrayWord] = useState<string[]>()

  useEffect(() => {
    setArrayWord(word.split(''))
  }, [word])

  return (
    <Main>
      <AppBody data-aos="zoom-in">
        <Header/>
        <Input  type="text"
              placeholder="Digite..."
              value={word}
              onChange={(e) => setWord(e.target.value)}
        />
        <LetterContainer>
          {word !== '' ? arrayWord?.map(item => <Letter fileName={item}/>) : <EmptyMessage>Traduza qualquer palavra!</EmptyMessage>}
        </LetterContainer>
        
    </AppBody>
    </Main>
  );
}
const Main = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0; 
  overflow-y: scroll;
`
const AppBody = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: 80px;
  background: #fff;
  width: 70%;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  position: relative;
  @media(max-width: 550px){
    width: 90%;
    margin: 20px;
  }
`
const LetterContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  position: relative;
`
const Input = styled.input`
  width: 50%;
  font-size: 30px;
  font-family: 'Fuzzy Bubbles', cursive;
  color: #721677;
  border: solid 3px #721677;
  border-radius: 8px;
  margin-top: -40px;
  margin-bottom: 20px;
  padding: 20px;
  z-index: 9;
  @media(max-width: 550px){
    width: 55%;
    font-size: 20px;
    padding: 10px;
    margin-top: -25px;
  }
`
const EmptyMessage = styled.label`
  color: #cec7c7;
  margin: 150px 0;
  font-size: 40px;
  font-family: 'Fuzzy Bubbles', cursive;
  @media(max-width: 550px){
    font-size: 25px;
  }
`