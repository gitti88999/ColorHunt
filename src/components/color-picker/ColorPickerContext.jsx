/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";


export const ColorPickerContext = createContext()



const colorReducer = (state, dispatch) => {
    console.log({state, dispatch})
    const { action, value } = dispatch
    switch (action) {
        case 0:
            state = [value, state[1], state[2]]
            break;
        case 1:
            state = [state[0], value, state[2]]
            break
        case 2:
            state = [state[0], state[1], value]
            break;
    }
return state
}

const ColorPickerProvider = ({ children }) => {
    const [color, setColor] = useReducer(colorReducer, [255,255,255])

    return <ColorPickerContext.Provider value={{ color, setColor }}>
        {children}
    </ColorPickerContext.Provider>
}

export default ColorPickerProvider
