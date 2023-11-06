import { useEffect, useState } from "react"
import styled from "styled-components"
import a from "../alphabet/a.png"
import b from "../alphabet/b.png"
import c from "../alphabet/c.png"
import ç from "../alphabet/ç.png"
import d from "../alphabet/d.png"
import e from "../alphabet/e.png"
import f from "../alphabet/f.png"
import g from "../alphabet/g.png"
import h from "../alphabet/h.png"
import i from "../alphabet/i.png"
import j from "../alphabet/j.png"
import k from "../alphabet/k.png"
import l from "../alphabet/l.png"
import m from "../alphabet/m.png"
import n from "../alphabet/n.png"
import o from "../alphabet/o.png"
import p from "../alphabet/p.png"
import q from "../alphabet/q.png"
import r from "../alphabet/r.png"
import s from "../alphabet/s.png"
import t from "../alphabet/t.png"
import u from "../alphabet/u.png"
import v from "../alphabet/v.png"
import w from "../alphabet/w.png"
import x from "../alphabet/x.png"
import y from "../alphabet/y.png"
import z from "../alphabet/z.png"
import um from "../alphabet/1.png"
import dois from "../alphabet/2.png"
import tres from "../alphabet/3.png"
import quatro from "../alphabet/4.png"
import cinco from "../alphabet/5.png"
import seis from "../alphabet/6.png"
import sete from "../alphabet/7.png"
import oito from "../alphabet/8.png"
import nove from "../alphabet/9.png"
import zero from "../alphabet/0.png"

export default function Letter(props: any) {
    const { fileName } = props
    const [file, setFile] = useState()

    useEffect(() => {
        switch (fileName.toLowerCase()) {
            case 'a':
                setFile(a)
                break
            case 'b':
                setFile(b)
                break
            case 'c':
                setFile(c)
                break
            case 'ç':
                setFile(ç)
                break
            case 'd':
                setFile(d)
                break
            case 'e':
                setFile(e)
                break
            case 'f':
                setFile(f)
                break
            case 'g':
                setFile(g)
                break
            case 'h':
                setFile(h)
                break
            case 'i':
                setFile(i)
                break
            case 'j':
                setFile(j)
                break
            case 'k':
                setFile(k)
                break
            case 'l':
                setFile(l)
                break
            case 'm':
                setFile(m)
                break
            case 'n':
                setFile(n)
                break
            case 'o':
                setFile(o)
                break
            case 'p':
                setFile(p)
                break
            case 'q':
                setFile(q)
                break
            case 'r':
                setFile(r)
                break
            case 's':
                setFile(s)
                break
            case 't':
                setFile(t)
                break
            case 'u':
                setFile(u)
                break
            case 'v':
                setFile(v)
                break
            case 'w':
                setFile(w)
                break
            case 'x':
                setFile(x)
                break
            case 'y':
                setFile(y)
                break
            case 'z':
                setFile(z)
                break
            case '1':
                setFile(um)
                break
            case '2':
                setFile(dois)
                break
            case '3':
                setFile(tres)
                break
            case '4':
                setFile(quatro)
                break
            case '5':
                setFile(cinco)
                break
            case '6':
                setFile(seis)
                break
            case '7':
                setFile(sete)
                break
            case '8':
                setFile(oito)
                break
            case '9':
                setFile(nove)
                break
            case '0':
                setFile(zero)
                break
            default:
                console.log("space.")
        }
    }, [])

    return (
        <ImageContainer data-aos="zoom-in">
            <Image src={file}/>
            <Label translate="no">{fileName.toUpperCase()}</Label>
        </ImageContainer>
    )
}

const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 5px;
    position: relative;
    `
const Image = styled.img`
    width: 100px;
    height: 130px;
    @media(max-width: 550px){
        width: 50px;
        height: 90px;
    }
`
const Label = styled.label`
    font-size: 23px;
    @media(max-width: 550px){
        font-size: 15px;
    }
`