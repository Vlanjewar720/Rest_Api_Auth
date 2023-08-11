import React, { useState } from "react";
import {Link} from 'react-router-dom';

import './Styles.css';

export default function SignUp() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
  const [secretKey, setSecretKey] = useState("");

  const handleSubmit = (e) => {
    if (userType === "Admin" && secretKey !== "VAIBHAV@15") {
      e.preventDefault();
      alert("Invalid Admin");
    } else {
      e.preventDefault();

      console.log(fname, lname, email, password);
      fetch("http://localhost:4000/api/signUp", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          fname,
          email,
          lname,
          password,
          userType,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "userRegister");
          if (data.status === "ok") {
            alert("Registration Successful");
          } else {
            alert("Something went wrong");
          }
        });
    }
  };

  return (
    <div className="regbody" >
         <div class="contain">
                <h2 class="head">SIGN-UP</h2>             
                <form onSubmit={handleSubmit}>
                <div class="input-field">
                    <input type="radio" name="UserType" value="User"
                        onChange={(e) => setUserType(e.target.value)}
                      width={10}  />
                        <label for="USER">USER</label> &nbsp; &nbsp;{" "}
             
                        <input type="radio" name="UserType"  value="Admin"
                        onChange={(e) => setUserType(e.target.value)}
                        width={10}
                        />
                    <label for="ADMIN">ADMIN</label>
                </div>
                    {userType === "Admin" ? (
                            <div class="input-field">
                            <input type="password" placeholder="Secret Key" class="inpt"
                                onChange={(e) => setSecretKey(e.target.value)}
                                />
                                <label class="lebels">Admin Key</label>
                            </div>
                    ) : null}

       
         <div class="input-field">
                <input type="text" id="Email" class="inpt"
                  placeholder="Enter email"
                   onChange={(e) => setFname(e.target.value)}  
                 />
                <label class="lebels" for="Fname">First Name:</label>
         </div>
        
         <div class="input-field">
            <input type="text" id="Email" class="inpt"
              placeholder="Enter email"
               onChange={(e) => setLname(e.target.value)}    
             />
            <label class="lebels" for="Lname">Last Name</label>
         </div>

        <div class="input-field">
            <input type="text" id="Email" class="inpt"
              placeholder="Enter email"
               onChange={(e) => setEmail(e.target.value)}    
             />
            <label class="lebels" for="Email">Email:</label>
        </div>

        <div class="input-field">
            <input type="password" id="senha" placeholder="Password" class="inpt"
              onChange={(e) => setPassword(e.target.value)}
             />
            <label class="lebels" for="password">Password:</label>
        </div>

        <div class="center">
            <button class="buttn">SIGN-UP</button>
        </div>
    </form>
      <div class="links-uteis">
        <span>you have account?</span> <Link to="/login">Sign-In</Link>
        
        </div>
       </div>
    </div>
  );
}

