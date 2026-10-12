import './MyColor.css'

const MyColor = ({ HexColor = 'black' }) => {
    const RgbColor = HexColor.toString()
    return <>
    <div className='color'>
        <div className='circle' style={{ backgroundColor: HexColor }}></div>
        
            <label >{HexColor}</label>
            <label>{RgbColor}</label>
        </div>
    </>
}
export default MyColor