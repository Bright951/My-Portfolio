import React from 'react'
import './App.scss'
import Home from './sections/home'
import Contaact from './sections/contaact'
import NavBar from './components/NavBar.tsx'
import About from './sections/about/index.jsx'


function App(){
    return(
        <div id="container">
            <div className='container2'>
                <NavBar/>
            </div>
            <section id='Home'>
                <Home/>
            </section>
            <section id='About'>
                <About/>
            </section>
            <section id='Contact'>
                <Contaact/>
            </section>
            <section id='Projects'></section>
            <section id='Others'></section>
        </div> 
    )
}

export default App