import { useNavigate, useParams } from 'react-router-dom'
import './Palette.css'
import { useEffect, useState } from 'react'

const Palette = ({id='800000982b1cdad4b5f2e8c6',size='medium'})=>{
    const [myID, setMyID]= useState(id)
    const {idColor} = useParams()
    const navigate = useNavigate()
    const colors = id.split('').reduce((cl, char, index) => {
        if (index % 6 === 0) {
            cl.push(`#${char}`)
        }
        else {
            cl[cl.length - 1] += char
        }
        return cl
    }, [])


    return <>
    <div className={`palette ${size}`} onClick={()=>navigate(`/palette/${myID}`)}>
        <div className='color first' style={{backgroundColor:colors[0]}}></div>
        <div className='color second' style={{backgroundColor:colors[1]}}></div>
        <div className='color third' style={{backgroundColor:colors[2]}}></div>
        <div className='color forth' style={{backgroundColor:colors[3]}}></div>
    </div>

    </>
}

export default Palette