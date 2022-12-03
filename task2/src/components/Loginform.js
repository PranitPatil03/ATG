import React from 'react'
import "./style.css";


function Loginform() {
    return (
        <>
            <div className="inputform">
                <form action="">

                    <div className="email">
                        <input type="email" className="email" placeholder="Email" />
                        <hr />
                    </div>

                    <div className="password">
                        <input type="password" className="password" placeholder="Password" />
                        <hr />
                    </div>

                    <div className="submit">
                       <input type="submit" className="btn" value="Create Account" placeholder="Create Account" />
                    </div>

                </form>
            </div>
        </>
    )
}

export default Loginform