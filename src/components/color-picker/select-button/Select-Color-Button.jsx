/* eslint-disable react/prop-types */
import { useContext } from "react"
import { ColorPickerContext } from "../ColorPickerContext"
import './Select-Color-Button.css'

const SelectColorButton = ({ clickHandler }) => {
    const { color } = useContext(ColorPickerContext)
    return <>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 12 }}>
            <button className="button" onClick={() => clickHandler(color)}>
                Select
            </button>
        </div>
    </>
}

export default SelectColorButton