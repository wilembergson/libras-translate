import { useEffect, useState } from "react"
import styled from "styled-components"
import a from "../alphabet/a.png"
import b from "../alphabet/b.png"
import c from "../alphabet/c.png"
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

export default function Letter(props:any){
    const {fileName } = props
    const [file, setFile] = useState()

    useEffect(() => {
        switch(fileName.toLowerCase()) {
            case 'a':
                setFile(a)
                break
            case 'b':
                setFile(b)
                break
            case 'c':
                setFile(c)
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
            default:
                console.log("space.")
        }
    }, [])

    return(
        <ImageContainer>
            <Image src={file}/>
            <label>{fileName}</label>
        </ImageContainer>
    )
}

const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 5px;
`
const Image = styled.img`
    width: 130px;
    height: 180px;
`