import React from 'react'
import Polygon from '../components/images/Polygon.png'
import homeimg from '../components/images/3D.png'
import "./style.css";


function Sucess() {
    return (
        <>
            <div className="main">
                <div className="leftbox">
                    <div className="homeimg">
                        <img className="img3d" src={homeimg} alt="" />
                    </div>
                </div>
                <div className="rightbox">
                    <div className="languge">
                        <p className="topright">English(UK)
                            <img className="dropdown-icon" src={Polygon} alt="" />
                        </p>
                    </div>
                    <div className="sucessmsg">
                        <h1>You have successfully login </h1>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Sucess