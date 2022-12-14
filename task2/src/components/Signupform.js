import { useNavigate } from 'react-router-dom'
import React, { useEffect, useState } from "react";
import "./style.css";


function Signupform() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) {
            navigate("/")
        }

    }, [navigate])

    async function preventDefault(e) {
        e.preventDefault();
    }

    const collectData = async () => {
        console.warn(username, email, password);
        let result = await fetch("http://localhost:8000/createuser", {
            method: 'post',
            body: JSON.stringify({ username, email, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        result = await result.json();
        localStorage.setItem("user", JSON.stringify(result.result))
        localStorage.setItem("token", JSON.stringify(result.auth))
        navigate('/login')
    }

    return (
        <>
            <div className="inputform">
                <form action={preventDefault}>

                    <div className="username">
                        <input type="text" className="username" placeholder="Username" value={username}
                            onChange={(e) => setUsername(e.target.value)} />
                        <hr />
                    </div>

                    <div className="email">
                        <input type="email" className="email" placeholder="Email" value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                        <hr />
                    </div>

                    <div className="password">
                        <input type="password" className="password" placeholder="Password" value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                        <hr />
                    </div>

                    <div className="submit">
                        <input type="submit" className="btn" value="Create Account" placeholder="Create Account" onClick={collectData} />
                    </div>

                </form>
            </div>
        </>
    )
}

export default Signupform