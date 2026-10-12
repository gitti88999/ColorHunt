import './All.css'
import Palette from '../Palette/Palette'
import { getPalettes } from '../../data/palettes'
import PaletteText from '../PaletetText/PaletteText'

const All = () => {

    const palettes = getPalettes()
    return <>
        <div className='all'>
            {palettes.map((item, index) => (
                <div key={index} >
                    <Palette  id={item.id} size='medium'></Palette>
                    <PaletteText likes={item.likes}></PaletteText>
                </div>
            ))}
        </div>

    </>
}

export default All