import React from 'react'
import Points from "../assets/Frame108.png"
import Tasks from "../assets/Frame217.png"
import Done from "../assets/frame218.png"

function Card(props) {
  return (
    <div className='item'>
        <div className="item-first">
            <div className="item-first_content">
                <div className="category">
                {
                    props.category.map(element => (
                        <span key={element}>{element}</span>
                    ))
                }
                </div>
                
                <span className='Title'>{props.title}</span>
                <p>{props.par}</p>
            </div>
            <div className="item-first_twichya">
                <img src={Points} alt="" />
            </div>
        </div>
        <div className="item-second">
            <span>
                <img src={Tasks} alt="" />
                {props.param[0]}
            </span>
            <span>
                <img src={Done} alt="" />
                {props.param[1]}
            </span>
        </div>
    </div>
  )
}

export default Card