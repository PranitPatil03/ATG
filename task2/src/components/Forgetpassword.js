import React from 'react'
import "./style.css";
import Polygon from '../components/images/Polygon.png'
import homeimg from '../components/images/3D.png'
import google from '../components/images/google.png'
import facebook from '../components/images/facebook.png'
import Forgetpasswordform from '../components/Forgetpasswordform.js'


function Forgetpassword() {
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

          <div className="forgetpassword0">
            <h2>Forget Password</h2>
          </div>

          <div className="authications">
            <div className="google">
              <img className="googleimg" src={google} alt="" />
              <p className="googleicon">Login with google</p>
            </div>
            <div className="facebook">
              <img className="facebookimg" src={facebook} alt="" />
              <p className="facebookicon">Login with Facebook</p>
            </div>
          </div>

          <div className="or">
            <h2>- OR -</h2>
          </div>


          <Forgetpasswordform />

        </div>
      </div>
    </>
  )
}

export default Forgetpassword