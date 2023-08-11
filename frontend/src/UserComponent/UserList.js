
import React, { useEffect, useState } from "react";

import Table from 'react-bootstrap/Table';
export default function UserList({ userData }) {

  //setting state

  const [data, setData] = useState([]);
useEffect(() => {
  getAllUser()
},[]);

 //fetching all user
 const getAllUser = async () => {
  try {
    const response = await fetch("http://localhost:4000/api/getAllUser");
      const jsonData = await response.json();
      setData(jsonData.data);
      console.log(jsonData.data, "userData");
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const deleteUser = async (id) => {
    try {
      const deleteResponse = await fetch("http://localhost:4000/api/deleteUser", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          userid: id,
        }),
      });
  
      // Check if the delete request was successful
      if (deleteResponse.ok) {
        const data = await deleteResponse.json();
        alert(data.data);
        getAllUser();
      } else {
        console.error('Delete request was not successful:', deleteResponse.statusText);
      }
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };
  
  return (
    <div className="container col-sm-6 offset-sm-3">  
        <h3>LOGIN USER LIST</h3>
        <Table striped bordered hover responsive="sm" >
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>User Type</th>
            <th>Delete</th>
          </tr>
          </thead>
          <tbody>
          {data.map((dt) => (
              <tr key={dt.id}>
                <td>{dt.fname}</td>
                <td>{dt.email}</td>
                <td>{dt.userType}</td>
                <td> <button type="submit" className="btn btn-danger p-2 border border-2 bg-danger text-white" onClick={() => deleteUser(dt._id)}> Delete</button>
              
               </td>
              </tr>
            )
            )}
            </tbody>
        </Table>
       
      </div>
 
  );
};


