import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import axios from "axios";

export default function () {
    const [users, setUsers] = useState([]);
    const User = users =>(
      <tr>
          <td>{users.user.username}</td>
          <td>{users.user.gender}</td>
          <td>{users.user.email}</td>
          <td>{users.user.news}</td>
          <td>{users.user.dob.substring(0,10)}</td>
          <td><img src={users.user.photo}/></td>
          <td>
              <Link to={"/edit/"+users.user._id}>Edit</Link> | <a href="#" onClick={() => {
                  deleteUser(users.user._id);
          }}>delete</a>
          </td>
      </tr>
    );

    const deleteUser = function(id){
        axios.delete('http://localhost:5000/users/delete/'+id)
            .then(res => console.log(res.data))
            .catch(err => console.log(err));
        setUsers(users.filter(el=> el._id !== id));
    };

    const usersList = function(){
      return users.map(currentuser => {
         return <User user={currentuser} deleteUser={deleteUser} key={currentuser._id}/>;
      });
    };

    useEffect(()=>{
       axios.get("http://localhost:3000/users")
           .then(response => {
               setUsers(response.data);
               console.log(users);
           })
    }, []);


    return(
        <div className="container">
            <h3>Users List </h3>
        <table className="table">

            <thead className="thead-light">

            <tr>
                <th>Username</th>
                <th>Gender</th>
                <th>Email</th>
                <th>News</th>
                <th>Date of Birth</th>
                <th>Photo</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {usersList()}
            </tbody>
        </table>
        </div>
    )
}