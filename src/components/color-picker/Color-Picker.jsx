/* eslint-disable react/prop-types */
import './Color-Picker.css'
import ColorPickerProvider from "./ColorPickerContext"
import SelectColor from "./select-color/Select-Color"
import Color from './color/Color'
import ColorText from './color-text/Color-Text'
import SelectColorButton from './select-button/Select-Color-Button'

const ColorPicker = ({selectColor}) => {

    return <>
        <div className='color-picker-frame'>
            <ColorPickerProvider>
                <div>
                    <Color />
                </div>
                <div>
                    <SelectColor key={'red'} variety={0}  ></SelectColor>
                    <SelectColor key={'green'} variety={1} ></SelectColor>
                    <SelectColor key={'bleu'} variety={2} ></SelectColor>
                </div>
                <div>
                    <ColorText selectColor={selectColor}></ColorText>
                </div>
                <div>
                    <SelectColorButton clickHandler={(val)=>selectColor(val)}></SelectColorButton>
                </div>
                
            </ColorPickerProvider>
        </div>
    </>
}

export default ColorPicker