import React from 'react'
import Signupform from '../components/Signupform.js'
import Polygon from '../components/images/Polygon.png'
import homeimg from '../components/images/3D.png'
import google from '../components/images/google.png'
import facebook from '../components/images/facebook.png'
import "./style.css";

function Signup() {
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

          <div className="create">
            <h2>Create Account</h2>
          </div>

          <div className="authications">
            <div className="google">
              <img className="googleimg" src={google} alt="" />
              <p className="googleicon">Sign up with google</p>
            </div>
            <div className="facebook">
              <img className="facebookimg" src={facebook} alt="" />
              <p className="facebookicon">Sign up with Facebook</p>
            </div>  
          </div>

          <div className="or">
            <h2>- OR -</h2>
          </div>
          

          <Signupform/>

          
          <div className="login1">
            <p className="login2">Already have an account?<a className="loginlink" href="login">Login</a></p>
          </div>
          
          
          <div className="forgetpassword">
            <p className="forgetpassword1">Forget Password<a className="loginlink" href="forgetpassword">Forget Password</a></p>
          </div>
          

        </div>
      </div>
    </>
  )
}

export default Signup