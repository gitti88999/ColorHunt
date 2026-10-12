import { useState } from 'react'
import './PaletteText.css'

const PaletteText = ({likes=0,boolean=false})=>{
    const [count, setCount] = useState(parseInt(likes))
    const [choice,setChoice] = useState('🤍')
    return (
      <>
        <div className="likes">
          <button onClick={() => setCount((count) => {
            if(choice==='🤍'){
                setCount(count+1)
                setChoice('🖤')
            }
            else{
                setCount(count-1)
                setChoice('🤍')
            }
            })}>
            <p>{choice}</p>
            <p>{count}</p>
          </button>
          <p>1 day</p>
        </div>
      </>
    )
}

export default PaletteText