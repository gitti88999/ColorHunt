import { useContext, useEffect, useState } from "react"
import { ColorPickerContext } from "../ColorPickerContext"
import './Color-Text.css'

const ColorText = () => {
    const { color } = useContext(ColorPickerContext)
    const [hex, setHex] = useState('')
    const [rgb, setRgb] = useState('')

    useEffect(() => {
        setRgb(`rgb(${color[0]},${color[1]},${color[2]})`)
        setHex(`#${color[0].toString(16).padStart(2, '0').toUpperCase()}${color[1].toString(16).padStart(2, '0').toUpperCase()}${color[2].toString(16).padStart(2, '0').toUpperCase()}`)
    }, [color])
    return <>
        <div className="color-name">
            <label>{hex}</label>
        </div>
        <div className="color-name">
            <label>{rgb}</label>
        </div>
       
    </>
}

export default ColorText