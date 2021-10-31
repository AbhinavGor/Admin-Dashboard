import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react'
import Login from './Login'
import Register from './Register'

function Home() {
    const [mode, setMode] = useState(0);

    if(mode === 0){
        return (
            <div className="container">
                <Button onClick={() => setMode(1)}>Login</Button>
                <Button onClick={() => setMode(2)}>Register</Button>
            </div>
        )
    }else if(mode === 1){
        return <Login />
    }else if(mode === 2){
        return <Register />
    }
}

export default Home
