import { useContext } from "react"
import { ColorPickerContext } from "../ColorPickerContext"
import './Color.css'

const Color = () => {
    const { color } = useContext(ColorPickerContext)


    return <>
        <div className="color-picker" style={{ backgroundColor: `rgb(${color[0]}, ${color[1]}, ${color[2]})` }}
        ></div>
    </>
}

export default Color