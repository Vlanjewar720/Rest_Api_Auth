import React, {  useState  } from "react";
import {Link} from 'react-router-dom'
import "./Styles.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    console.log(email, password);
    fetch("http://localhost:4000/api/login", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status === "ok") {
          alert("login successful");
          window.localStorage.setItem("token", data.data);
          window.localStorage.setItem("loggedIn", true);

           window.location.href = "./userDetail";
        }
      })
      .catch((error) => {
        console.error("Fetch error:", error);
       
      });

  }

  return (
    <div className="regbody" >
        <div class="contain">
                <h2 class="head">SIGN-IN</h2>
                
                <form onSubmit={handleSubmit}>

                        <div className="input-field">
                            <input type="text" id="Email" className="inpt"
                            placeholder="Enter email"
                            onChange={(e) => setEmail(e.target.value)}    
                            />
                            <label className="lebels" for="Email">Email:</label>
                        </div>

                        <div class="input-field">
                            <input type="password" className="inpt" id="senha" placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                            />
                            <label className="lebels" for="password">Password:</label>
                        </div>

                         <div class="center">
                              <button className="buttn" type="submit" >
                                Sign-in
                             </button>
                         </div>
                             
                       
              </form>
                       <div class="links-uteis">
                            <span>Don`t have account?</span> &nbsp; {" "}
                            <Link to="/signUp">Sign-Up</Link>
                            
                         </div>   
          </div>  
       </div>
    
  );
}
