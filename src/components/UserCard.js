import React from 'react'
import '../styles/UserCard.css'
function UserCard(props) {
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
            <button className="button">Activate</button>
        </div>
    )
}

export default UserCard
