import React, { useState } from "react";
import { Navigate, Link } from 'react-router-dom';
import { connect } from "react-redux";
import { register } from "../actions/auth";
import CSRFToken from "../components/CSRFToken";

const Register = ({ register }) => {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        re_password: ""
    });
    const [accountCreated, setAccountCreated] = useState(false);

    const { username, password, re_password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        if (password === re_password) {
            register(username, password, re_password);
            setAccountCreated(true);
        }
    };

    if (accountCreated) {
        return <Navigate to="/" />
    }
    return (
        <div className="container mt-5">
            <h1>Account Registration</h1>
            <p>Register to start playing SesquipeDaily</p>
            <form onSubmit={e => onSubmit(e)}>
                <CSRFToken />
                <div className="form-group">
                    <label className="form-label">Username:</label>
                    <input className="form-control" type="text" placeholder="Username..." name="username" onChange={e => onChange(e)} value={username} required />
                </div>
                <div className="form-group">
                    <label className="form-label mt-3">Password:</label>
                    <input className="form-control" type="password" placeholder="Password..." name="password" onChange={e => onChange(e)} value={password} minLength="6" required />
                </div>
                <div className="form-group">
                    <label className="form-label mt-3">Confirm Password:</label>
                    <input className="form-control" type="password" placeholder="Confirm Password..." name="re_password" onChange={e => onChange(e)} value={re_password} minLength="6" required />
                </div>
                <button className="btn btn-primary mt-3" type="submit">Register</button>
            </form>
            <p className="mt-3">Already have an account? <Link to="/login">Log in here</Link></p>
        </div>
    );
};

export default connect(null, { register })(Register);