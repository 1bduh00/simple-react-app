import React from 'react'
import "../style/pg/home.css"
import Menu from '../container/Menu'
import Navbar from '../container/Navbar'
import Content from '../container/Content'


function Home() {
  return (
    <div className='home-page'>
        <div className="home-page_navbar">
          <Navbar />
        </div>
        <div className="home-page_menu">
            <Menu/>
        </div>
        <div className="home-page_content">
            <Content />
        </div>
    </div>
  )
}

export default Home