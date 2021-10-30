import React from 'react'
import './login.css'

const Field = React.forwardRef(({label, type}, ref) => {
    return (
        <div>
            <label className='labelStyle'>{label}</label>
            <input ref={ref} type={type} className='inputStyle' />
        </div>
    )
});

const Form = ({onSubmit}) => {
    const usernameRef = React.useRef();
    const passwordRef = React.useRef();
    const handleSubmit = e => {
        e.preventDefault();
        const data = {
            username: usernameRef.current.value,
            password: passwordRef.current.value
        };
        onSubmit(data);
    };

    return (
        <form className='formStyle' onSubmit={handleSubmit}>
            <Field ref={usernameRef} label="Username: " type="text" />
            <Field ref={passwordRef} label="Password: " type="password"/>
            <div>
                <input classname='submitStyle' type="submit" />Submit
            </div>
        </form>
    )
}
function Login() {
    const handleSubmit = data => {
        const json = JSON.stringify(data, null, 4);
        console.clear();
        console.log(json);
    };

    return (
        <div className='appStyle'>
            <Form on onSubmit={handleSubmit} />
        </div>
    )
}

export default Login
