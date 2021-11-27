import '../App.js'
import '../styles/UserCard.css'

import axios from 'axios'
import Cookies from 'js-cookie'
import React, {useState} from 'react'
import UserCard from '../components/UserCard';
import Loader from "react-loader-spinner";

function ManageUsers() {
    const [users, setUsers] = useState();
    const [loading, setLoading] = useState(true);
    const [searchEmail, setSearchEmail] = useState('');

    React.useEffect(() => {
        const getUsers = async () => {
            const res = await axios.get("https://login-thepc.herokuapp.com/users",{
                headers: {
                    'Authorization': "Bearer " + Cookies.get('token').toString()
                }
            });
            setUsers(res.data.users);
            setLoading(false);
            console.log(res.data.users);
        }

        getUsers();
    }, []);

    function searchWithEmail() {
        setSearchEmail('');
        alert("This feature is under development!");
    }

    if(loading){
        return (
            <div className="container">
                <Loader
                    type="Puff"
                    color="#B6083C"
                    height={100}
                    width={100}
                    timeout={8000}
                />
            </div>
        )
    }else{
        return (
            <div className='container cardLayout'>
                <div className="search-box">
                    <input value={searchEmail} onChange={val => {setSearchEmail(val.target.value); console.log(val)}} type="text" placeholder="Enter query email" className="query-email"/>
                    <button className="search-button" onClick={searchWithEmail}>Search</button>
                </div>
                {users.map(user => {
                    return <UserCard key={user._id} user_id = {user._id} isDisabled={user.isDisabled} name={user.name} email={user.email} />
                })}
            </div>
        )
            
    }
}

export default ManageUsers
