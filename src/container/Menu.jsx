import React from 'react'
import "../style/ctn/menu.css"
import Logo from "../assets/Icon.png" 
import Logo2 from "../assets/Union.png" 
import Logo3 from "../assets/Union2.png"
import Logo4 from "../assets/Union3.png"
import Logo5 from "../assets/Union4.png"
import Logo6 from "../assets/Union5.png"
import Logo7 from "../assets/Union6.png"
import Logo8 from "../assets/Union7.png"


function Menu() {
  return (
    <div className='Menu'>
        <div className="Menu-header">
            <div className="Menu-header_content">
                <img src={Logo} alt='' />
                <span>Accello</span>
            </div>
        </div>
        <div className="Menu-items">
            <div className="Menu-items_item">
                <img src={Logo2} alt="" />
                Dashboard
            </div>
            <div className="Menu-items_item">
                <img src={Logo3} alt="" />      
                Timelines
            </div>
            <div className="Menu-items_item">
                <img src={Logo4} alt="" />
                Teams
            </div>
            <div className="Menu-items_item">
                <img src={Logo5} alt="" />
                Budgets
            </div>
            <div className="Menu-items_item">
                <img src={Logo6} alt="" /> 
                Reports
            </div>
            <div className="Menu-items_item">
                <img src={Logo2} alt="" />
                Files
            </div>
        </div>
        <div className="Menu-setting">
            <img src={Logo8} alt="" />
            Settings
        </div>
    </div>
  )
}

export default Menu