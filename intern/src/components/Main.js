import React from 'react'
import arrow from '../components/images/arrow.png'
import homeimg2 from '../components/images/homeimg2.png'


export const Main = () => {
  return (  
    <>
        <div className="main">

            <div className="mainimg">
                <img id="imghome" src={homeimg2} alt="" />
            </div>

            <div className="bottoms">
                <div className="arrow">
                    <img src={arrow} alt="" />
                </div>
                <div className="group">
                    <button>Leave Group</button>
                </div>
            </div>

            <div className="content">
                <h1>Computer Engineering</h1>
                <p>142,765 Computer Engineers follow this</p>
            </div>

        </div>
    </>
  )  
}
