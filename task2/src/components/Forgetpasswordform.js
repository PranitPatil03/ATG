import React from 'react'
import "./style.css";


function Forgetpasswordform() {
    return (
        <>
            <div className="inputform">
                <form action="">

                    <div className="password">
                        <input type="password" className="password" placeholder="Old Password" />
                        <hr />
                    </div>
                    <div className="password">
                        <input type="password" className="password" placeholder="New Password" />
                        <hr />
                    </div>

                    <div className="submit">
                        <input type="submit" className="btn" value="Submit" placeholder="Create Account" />
                    </div>

                </form>
            </div>
        </>
    )
}

export default Forgetpasswordform