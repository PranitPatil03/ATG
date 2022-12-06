import { useNavigate} from 'react-router-dom'
import React, {useEffect,useState } from "react";
import "./style.css";



function Loginform() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    
    const navigate = useNavigate();
    // const history = useHistory();
    
    useEffect(() => {
        const auth = localStorage.getItem('user-info');
        if (auth) {
            navigate("/sucess")
        }
        
    }, [navigate])

    async function login(){
        let item={email,password}
        let result=await fetch("",{
            method:"POST",
            headers:{
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body:JSON.stringify(item)
        })
        result=await result.json();
        localStorage.setItem("user-info", JSON.stringify(result));
        navigate("/sucess")
    }


    return (
        <>
            <div className="inputform">
                <form action="">

                    <div className="email">
                        <input type="email" className="email" placeholder="Email" onChange={(e)=>setEmail(e.traget.value)} />
                        <hr />
                    </div>

                    <div className="password">
                        <input type="password" className="password" placeholder="Password" onChange={(e)=>setPassword(e.traget.value)} />
                        <hr />
                    </div>

                    <div className="submit">
                        <input type="submit" className="btn" value="Log In" placeholder="Create Account" onClick={login}/>
                    </div>

                </form>
            </div>
        </>
    )
}

export default Loginform