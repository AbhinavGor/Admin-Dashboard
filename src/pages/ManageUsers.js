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

    React.useEffect(() => {
        const getUsers = async () => {
            const res = await axios.get("http://login.thepcvit.com/users",{
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

    if(loading){
        return (
            <div className="container">
                <Loader
                    type="Puff"
                    color="#B6083C"
                    height={100}
                    width={100}
                    timeout={8000} //3 secs
                />
            </div>
        )
    }else{
        return (
            <div className='container cardLayout'>
                {users.map(user => {
                    return <UserCard key={user._id} name={user.name} email={user.email} />
                })}
            </div>
        )
            
    }
}

export default ManageUsers
