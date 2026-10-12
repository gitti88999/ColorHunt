import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Palette from './components/Palette/Palette.jsx'
import Logo from './components/Logo/Logo.jsx'
import Palettes from './components/Palettes/Palettes.jsx'
import Tag from './components/Tag/Tag.jsx'
import All from './components/All/All.jsx'
import Collection from './components/Collection/Collection.jsx'
import Random from './components/Random/Random.jsx'
import SelectedPalette from './components/SelectedPalette/SelectedPalette.jsx'

const roots = createBrowserRouter([

  {
    path: '', element: <App></App>, children: [
      {
        path: '', element: <Palettes></Palettes>,children:[
          // {
          //   path:'palette/:id',element:<SelectedPalette></SelectedPalette>
          // },          
          {
            path:'palette/:id',element:<SelectedPalette></SelectedPalette>
          },
          {
            path:'palettes/all',element:<All></All>
          },
          {
            path:'palettes/collection',element:<Collection></Collection>
          },
          {
            path:'palettes/random',element:<Random></Random>
          },
         { 
          path:'palettes/:tag' ,element:<Tag></Tag>
        }
        ]
      }
    ]
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={roots}>
    </RouterProvider>
  </React.StrictMode>,
)
