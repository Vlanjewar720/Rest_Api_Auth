import React from "react";

export default function UserHome({ userData }) {
  const logOut = () => {
    window.localStorage.clear();
    window.location.href = "./login";
  };
  return (

    <div className="container-fluid row"> 
      <div className="container col-sm-6 col-md-8 offset-sm-3"> 
         <h3>Welcome User Dashboard</h3> 
  
         <table striped bordered hover responsive="sm"> 
         <thead>
             <tr>
               
               <th>First Name</th>
               <th>Last Name</th>
               <th>Email</th>

             </tr>
         </thead>
         <tbody>
             <tr>
             
               <td>{userData.fname}</td>
               <td>{userData.lname}</td>
               <td>{userData.email}</td>
         
             </tr>
         </tbody>
               
   </table>
       <button onClick={logOut} className="btn btn-primary"> Log Out </button> 
       
   </div>
   </div>
  );
}
