import './Random.css'
import Palette from '../Palette/Palette'
import { getPalettes } from '../../data/palettes'
import PaletteText from '../PaletetText/PaletteText'

const Random = () => {

    let oldPalettes = getPalettes()
    let palettes = []
    for(let i=0;i<oldPalettes.length;i++){
        let index = Math.trunc(Math.random() * oldPalettes.length)
        palettes.push(oldPalettes[index])
    }

    return <>
        <div className='random'>
            {palettes.map((item, index) => (
                <div key={index}>
                    <Palette  id={item.id} size='medium'></Palette>
                    <PaletteText likes={item.likes}></PaletteText>
                </div>
            ))}
        </div>

    </>
}

export default Random