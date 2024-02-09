import React from 'react'
import "../style/ctn/content.css"
import Vector from "../assets/Vector.png"
import Avatars from "../assets/AvatarTeam.png"
import Card from "../component/Card"


function Content() {
  return (
    <div className='Content'>
        <div className="Content-Teams">
            <div className="Content-Teams_Vector">
                <img src={Vector} alt="" />
                Teams
            </div>
            <div className="Content-Teams_text">
                Dream Team
            </div>
            <div className="Content-Teams_Avatars">
                <img src={Avatars} alt="" />
            </div>
        </div>
        <div className="Content-projects">
            <div className="Content-projects_text">
               CURRENT PROJECTS (3)
            </div>
            <div className="Content-projects_list">
                <Card category={["Dev","Design"]} title={"Chat app"} par={"This application is created to make users life easier"} param={["4/1","4"]}/>
                <Card category={["Dev"]} title={"Chat Web"} par={"This application is created to make users life easier"} param={["5/7","3"]}/>
                <Card category={["Dev"]} title={"Connective Profile"} par={"This application is created to make users life easier"} param={["8/2","4"]}/>
            </div>
        </div>
        <div className="Content-Allocations">
            
        </div>
    </div>
  )
}

export default Content