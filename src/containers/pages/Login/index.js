import React, {Fragment, useState} from 'react';
import {Link, useHistory } from "react-router-dom";
import axios from 'axios';

function Login(){
    const [creeds, setCreeds] = useState('');
    const [password, setPassword] = useState('');
    let history = useHistory();

    return (
        <Fragment>
            <div className="auth-containers">
                <h1>Instagram</h1>
                <div className="auth-form">
                    <form>
                        <div className="auth-form-group">
                            <label>Phone number, username, or email</label>
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
                                    if(creeds && password){
                                        axios.post('http://localhost/insta-clone-be/api/login', {}, {
                                            headers: {'Authorization': 'Basic '+btoa(creeds+':'+password)}
                                        })
                                        .then(({data}) => {
                                            if(data.status == 'error')
                                                return alert(data.message);
                                            else{
                                                localStorage.setItem('user', JSON.stringify(data.data));
                                                history.push("/");
                                            }
                                        })
                                        .catch(error => console.error(error));
                                    }
                                }}
                            >Log In</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="auth-links">
                <div className="info">
                    Don't have an account ?&nbsp;
                    <Link to="/signup">Sign Up</Link>
                </div>
            </div>
        </Fragment>
    );
}

export default Login;