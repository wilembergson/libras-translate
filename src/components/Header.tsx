import styled from "styled-components"

export default function Header(){
    return(
        <HeaderBody>
            <Title>Libras Translate</Title>
        </HeaderBody>
    )
}

const HeaderBody = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: #fc97ff;
    width: 100%;
    height: 400px;
`
const Title = styled.label`
    color: #721677;
    font-size: 70px;
    font-family: 'Fuzzy Bubbles', cursive;
    font-weight: 700;
`
const Wrapper = styled.div`
      width: 500px;
    height: 500px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 5px;
    background-image: linear-gradient(to top, #ff8800 0%, #e7f0fd 100%);
    overflow: hidden;
`
const Wave = styled.div`
    width: 1000px;
    height: 1025px;
    position: absolute;
    top: -25%;
    left: 50%;
    margin-left: -500px;
    margin-top: -500px;
    border-radius: 35%;
    background: rgba(255, 255, 255, .75);
    animation: wave 10s infinite linear;

    @keyframes wave {
        from { transform: rotate(0deg);}
        from { transform: rotate(90deg);}
    }
`