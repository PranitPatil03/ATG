import React from 'react'
import Loginform from '../components/Loginform.js'
import Polygon from '../components/images/Polygon.png'
import homeimg from '../components/images/3D.png'
import google from '../components/images/google.png'
import facebook from '../components/images/facebook.png'
import "./style.css";


function Login() {


  

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

          <div className="logincreate">
            <h2>Log-in </h2>
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

          <Loginform />

        </div>
      </div>
    </>
  )
}

export default Login