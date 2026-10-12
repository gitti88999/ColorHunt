import { useParams } from 'react-router-dom'
import MyColor from '../MyColor/MyColor'
import PaletteText from '../PaletetText/PaletteText'
import Palette from '../Palette/Palette'
import './SelectedPalette.css'
import { useEffect, useState } from 'react'

const SelectedPalette = () => {
    
    const { id } = useParams()
    const [colors, setColors] = useState()
    useEffect(() => {
        setColors(id.split('').reduce((cl, char, index) => {
            if (index % 6 === 0) {
                cl.push(`#${char}`)

            }
            else {
                cl[cl.length - 1] += char
            }
            return cl
        }, []))
    }, [id])
    return <>
        <div >
            <Palette id={id} size='large'></Palette>
            {/* <PaletteText likes={palette.likes}></PaletteText> */}
            <div className='parts'>{
               colors&& colors.map((item, index) => (
                    <MyColor key={index} HexColor={item}></MyColor>
                ))
            }</div>
        </div>
    </>
}

export default SelectedPalette