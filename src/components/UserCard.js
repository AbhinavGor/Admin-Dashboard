import Cookies from 'js-cookie';
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import '../styles/UserCard.css';
const qs = require('qs');
const axios = require('axios'); 

function UserCard(props) {
    const [loading, setLoading] = useState(false);

    const history = useHistory();

    function manageAccess(event){
        setLoading(true);
        event.preventDefault();
        setLoading(true);

        var config = {
            method: 'post',
            url: 'https://login-thepc.herokuapp.com/accesscontrol/toggle/' + props.user_id.toString(),
            headers: { 
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Bearer ' + Cookies.get('token') 
            }
        };

        axios(config).then((res) => {
            history.push('/manageusers');
            window.location.reload();
        }).catch(e => console.log(e));

    }

    if(loading){

    }else{
        return (
            <div className='card'>
                <div className="user-details">
                    <div className="text">
                        <div className="username">{props.name}</div>
                        <hr />
                        <div className="email">{props.email}</div>
                    </div>
                    <div className="image">
                        <img src= "https://images.unsplash.com/photo-1635693924419-b0a6abcf2620?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" />
                    </div>
                </div>
                <button onClick={manageAccess} className="button">{props.isDisabled ? "Activate" : "Deactivate"}</button>
            </div>
        )
    }
}

export default UserCard
