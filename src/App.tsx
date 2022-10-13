import { useEffect, useState } from "react";
import styled from "styled-components"
import Footer from "./components/Footer";
import Header from "./components/Header";
import Letter from "./components/Letter";

export default function App() {
  const [word, setWord] = useState<string>('')
  const [arrayWord, setArrayWord] = useState<string[]>()

  useEffect(() => {
    setArrayWord(word.split(''))
  }, [word])

  return (
    <Main>
      <AppBody>
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
  top: 0;
  bottom: 0;
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
  border: solid 2px #721677;
  border-radius: 8px;
  margin-top: -40px;
  margin-bottom: 20px;
  padding: 20px;
  z-index: 9;
`
const EmptyMessage = styled.label`
  color: #cec7c7;
  margin: 150px 0;
  font-size: 40px;
  font-family: 'Fuzzy Bubbles', cursive;
`