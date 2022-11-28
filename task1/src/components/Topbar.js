import React from 'react'
import Oval from '../components/images/Oval.png'
import Path from '../components/images/Path.png'
import Reactangle from '../components/images/Rectangle.png'

export const Topbar = () => {
  return(
    <>
        <div className="righticon">
            <div className="square">
                <img src={Reactangle} alt="" />
            </div>
            <div className="circle">
                <img src={Oval} alt="" />
            </div>
            <div className="triangle">
                <img src={Path} alt="" />
            </div>
        </div>
    </>      
)
}
