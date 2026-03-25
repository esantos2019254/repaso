import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Saludo } from './components/Saludo.jsx'
import { Padre } from './components/Padre.jsx'
import { Contador } from './components/Contador.jsx'
import { Efecto } from './components/Efecto.jsx'
import { Referencia } from './components/Referencia.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1>Bienvenido a React</h1>
    <Saludo nombre={"Elmer"} edad={20} />

    <hr />

    <Padre />

    <hr />

    <Contador />

    <hr />

    <Efecto />

    <hr />

    <Referencia />

    <hr />

  </StrictMode>,
)
