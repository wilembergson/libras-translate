import styled from "styled-components"

export default function Footer(){
    return(
        <FooterBody>
            Footer
        </FooterBody>
    )
}

const FooterBody = styled.footer`
    display: flex;
    justify-content: center;
    color: #fff;
    background: #000;
    width: 100%;
    padding: 30px 0;
    position: relative;
    bottom: 0;
`