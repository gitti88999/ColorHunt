import { useContext, useEffect, useState } from 'react'
import './Select-Color.css'
import { ColorPickerContext } from '../ColorPickerContext'
/* eslint-disable react/prop-types */
const SelectColor = ({ variety }) => {
    const { setColor } = useContext(ColorPickerContext)
    const [gradient, setGradient] = useState('0,0,0')
    const [left, setLeft] = useState(-7)
    const [selectedColor, setSelectedColor] = useState('255,255,255')

    const moveSelector = (ev) => {
        if (ev.nativeEvent.which === 1) {
            if (left + parseInt(ev.movementX) >= 0 && left + parseInt(ev.movementX) <= 255)
                setLeft(left + parseInt(ev.movementX))
        }
    }

    const clickRange = (ev) => {
        if (ev.nativeEvent.which === 1) {
            const x = ev.nativeEvent.offsetX
            setLeft(x - 7)
        }
    }

    useEffect(() => {
        let slectedcl = 255 - left +7
        setColor({action:variety, value:left+7})
        switch (variety) {
            case 0:
                setSelectedColor(`255,${slectedcl}, ${slectedcl}`)
                break
            case 1:
                setSelectedColor(`${slectedcl},255, ${slectedcl}`)
                break
            case 2:
                setSelectedColor(`${slectedcl},${slectedcl}, 255`)
                break
        }
    }, [left, variety, setColor])

    useEffect(() => {
        switch (variety) {
            case 0:
                setGradient('255,0, 0')
                break
            case 1:
                setGradient('0,255, 0')
                break
            case 2:
                setGradient('0,0, 255')
                break
        }
    }, [variety])

    return <>
        <div className='select-color' onClick={(ev) =>console.log(ev)}>
            <div className="range" style={{ backgroundImage: `linear-gradient(to right, #fff, rgb(${gradient})` }}
                onClick={(ev) =>clickRange(ev)}
            ></div>
            <div className='selector' style={{ left: left, backgroundColor: `rgb(${selectedColor})` }}
                onMouseMove={ev => moveSelector(ev)}></div>
        </div>
    </>
}

export default SelectColor