import React, {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default function(){
    const [username, setUsername] = useState('');
    const [gender, setGender] = useState('');
    const [dob, setDob] = useState(new Date());
    const [news, setNews] = useState(Boolean);
    const [email, setEmail] = useState('');
    const [photo, setPhoto] = useState('');
    const { id } = useParams();

    const onChangeUsername = function(e){
        setUsername(e.target.value);
    };

    const onChangeGender = function(e){
        setGender(e.target.value);
    };

    const onChangeDob = function (date) {
        setDob(date);
    };

    const onChangeNews = function(e){
        if(e.target.value === null) setNews(false);
        else setNews(true);
    };

    const onChangeEmail = function(e){
        setEmail(e.target.value);
    };

    const onChangePhoto = function(e){
        setPhoto(e.target.value);
    };

    const onSubmit = function(e){
        e.preventDefault();
        const newUser = {
            username: username,
            gender: gender,
            dob: dob,
            news: news,
            email: email,
            photo: photo,
        };

        axios.put('http://localhost:3000/users/update/'+id, newUser)
            .then(res => console.log(res.data))
            .catch(err => console.log("Error : "+err));

    };

    useEffect(()=>{
        axios.get('http://localhost:3000/users/get/'+id)
            .then(response => {
                setUsername(response.data.username);
                setGender(response.data.gender);
                setNews(response.data.news);
                setEmail(response.data.email);
                setDob(new Date(response.data.dob));
                setPhoto(String(response.data.photo));
            })
            .catch(error => {
                console.log("Error" + error);
            })
    }, []);

    return(
        <div className="container">
        <h3>Edit User : {username}</h3>
    <form onSubmit={onSubmit}>
        <div className="form-group">
            <label>UserName : </label>
            <input type="text" required className="form-control" value={username} onChange={onChangeUsername}/>
        </div>
        <div className="form-group">
            <p>Gender : </p>
            <label>
                <input checked={()=>{
                    return gender === 'male';
                }} type="radio" required className="form-control" value="male" onChange={onChangeGender} name="gender"/>
                Male
            </label>

            <label>
                <input  checked type="radio" required className="form-control" value="female" onChange={onChangeGender} name="gender"/>
                Female
            </label>
        </div>
        <div className="form-group">
            <label>Date of Birth : </label>
            <div>
                <DatePicker selected={dob} onChange={onChangeDob}/>
            </div>
        </div>
        <div className="form-group">
            <label>News : </label>
            <input checked={
                news
            } type="checkbox" className="form-control" onChange={onChangeNews}/>
        </div>
        <div className="form-group">
            <label>Email : </label>
            <input type="email" className="form-control" value={email} onChange={onChangeEmail}/>
        </div>
        <div>
            <label>Photo : </label>
            <img src={photo}/>
        </div>
        <div className="form-group">
            <input type="submit" value="Add User" className="btn btn-primary"/>
        </div>
    </form>
    </div>
    )

}