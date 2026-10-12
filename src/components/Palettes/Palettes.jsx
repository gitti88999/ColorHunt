import './Palettes.css'
import { getTags } from '../../data/tags'
import { NavLink, Outlet } from 'react-router-dom'

const Palettes = () => {
    const palettes = getTags()
    console.log(palettes)
    return <>
        <nav className='nav'>
            <ul>

                <li><NavLink to={'palettes/all'} className={({ isActive }) => (isActive ? 'active' : '')}>{'all'}</NavLink></li>
                <li><NavLink to={'palettes/collection'} className={({ isActive }) => (isActive ? 'active' : '')}>{'collection'}</NavLink></li>
                <li><NavLink to={'palettes/random'} className={({ isActive }) => (isActive ? 'active' : '')}>{'random'}</NavLink></li>

                <p className='limit'></p>
                {
                    palettes.map((tag, index) => (
                        <li key={index}>
                            <NavLink to={`palettes/${tag}`} className={({ isActive }) => (isActive ? 'active' : '')}>{tag}</NavLink>
                        </li>
                    ))
                }
            </ul>
        </nav>
        <Outlet></Outlet>
    </>
}

export default Palettes