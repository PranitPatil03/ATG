import React from 'react'
import "./style.css";


function Signupform() {
    return (
        <>
            <div className="inputform">
                <form action="">

                    <div className="username">
                        <input type="text" className="username" placeholder="Username" />
                        <hr />
                    </div>

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

export default Signupform