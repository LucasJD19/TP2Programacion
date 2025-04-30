import React from 'react'
import Aside from './Aside'
import Article from './Article'
import LangTable from './LangTable'
import "../index.css"

const MainHome = () => {
    return (
        <>
        <h2 className="h2_main">Lenguajes de programación 2025</h2>
        <Aside/>
        <Article/>
        <LangTable/>
        </>
    )
}

export default MainHome