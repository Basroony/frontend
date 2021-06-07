import React, {Fragment, useState} from 'react';
import {Link, useHistory} from "react-router-dom";
import axios from 'axios';

function Register(){
    const [creeds, setCreeds] = useState('');
    const [fullname, setFullname] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    let history = useHistory();

    return (
        <Fragment>
            <div className="auth-containers">
                <h1>Instagram</h1>
                <div className="auth-form">
                    <form>
                        <div className="auth-form-group">
                            <label>Phone Number or Email</label>
                            <input type="text" name="creeds" defaultValue={creeds}
                                onChange={e => {
                                    if(e.target.value.length > 0)
                                        e.target.closest('.auth-form-group').classList.add('focus');
                                    else 
                                        e.target.closest('.auth-form-group').classList.remove('focus');
                                    setCreeds(e.target.value);
                                }}
                                onClick={e => e.target.select()}
                            />
                        </div>
                        <div className="auth-form-group">
                            <label>Full Name</label>
                            <input type="text" name="full_name" defaultValue={fullname}
                                onChange={e => {
                                    if(e.target.value.length > 0)
                                        e.target.closest('.auth-form-group').classList.add('focus');
                                    else 
                                        e.target.closest('.auth-form-group').classList.remove('focus');
                                    setFullname(e.target.value);
                                }}
                                onClick={e => e.target.select()}
                            />
                        </div>
                        <div className="auth-form-group">
                            <label>Username</label>
                            <input type="text" name="username" defaultValue={username}
                                onChange={e => {
                                    if(e.target.value.length > 0)
                                        e.target.closest('.auth-form-group').classList.add('focus');
                                    else 
                                        e.target.closest('.auth-form-group').classList.remove('focus');
                                    setUsername(e.target.value);
                                }}
                                onClick={e => e.target.select()}
                            />
                        </div>
                        <div className="auth-form-group">
                            <label>Password</label>
                            <input type="password" name="password" defaultValue={password}
                                onChange={e => {
                                    if(e.target.value.length > 0)
                                        e.target.closest('.auth-form-group').classList.add('focus');
                                    else 
                                        e.target.closest('.auth-form-group').classList.remove('focus');
                                    setPassword(e.target.value);
                                }}
                                onClick={e => e.target.select()}
                            />
                        </div>
                        <div className="auth-form-group">
                            <button type="button" name="simpan"
                                onClick={e => {
                                    e.preventDefault();
                                    if(creeds && fullname && username && password){
                                        axios.post('http://localhost/insta-clone-be/api/register', {creeds, fullname, username, password})
                                        .then(({data}) => {
                                            if(data.status == 'error')
                                                return alert(data.message);
                                            else{
                                                alert('Signup success');
                                                history.push("/login");
                                            }
                                        })
                                        .catch(error => console.error(error));
                                    }
                                }}
                            >Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="auth-links">
                <div className="info">
                    Have an account ?&nbsp;
                    <Link to="/login">Log In</Link>
                </div>
            </div>
        </Fragment>
    );
}

export default Register;