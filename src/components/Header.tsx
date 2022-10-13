import styled from "styled-components"
import Cover from "../assets/cover.jpg"

export default function Header(){
    return(
        <HeaderBody>
            <Title>Libras Translate</Title>
            <Img src={Cover}/>
        </HeaderBody>
    )
}

const HeaderBody = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    flex-direction: column;
    width: 100%;
    height: 400px;
`
const Title = styled.label`
    color: #9a24a0;
    margin-top: 50px;
    font-size: 90px;
    font-family: 'Fuzzy Bubbles', cursive;
    font-weight: 700;
    z-index: 9;
`
const Img = styled.img`
    position: absolute;
    width: 80%;
    height: 400px;
    opacity: 0.6;
`