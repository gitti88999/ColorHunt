import './Tag.css'
import { getPalettes } from '../../data/palettes'
import Palette from '../Palette/Palette'
import { useParams } from 'react-router-dom'
import PaletteText from '../PaletetText/PaletteText'

const Tag = () => {
    const { tag } = useParams()
    return <>
        <div id='flex'>
            {
                getPalettes().filter((item) => (item.tags)).filter((item) => (item.tags.includes(tag))).map((item, i) => (
                    <div key={i} >
                        <Palette id={item.id} tag={item.tags} ></Palette>
                        <PaletteText likes={item.likes} boolean={item.bool}></PaletteText>
                    </div>))
            }

        </div>
    </>

}

export default Tag