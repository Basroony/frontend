import React, {Fragment, useEffect, useState} from 'react';
import Navbar from '../../../components/Navbar';
import Post from '../../../components/Post';
import logo from '../../../assets/image/user.png';
import {useHistory} from "react-router-dom";
import axios from 'axios';

function Dashboard(){
    const [post, setPost] = useState([]);
    let history = useHistory();
    let user = JSON.parse(localStorage.getItem('user'));
    useEffect(() => {
        axios.post('http://localhost/insta-clone-be/api/post', {id_web_user: (user ? user.id_web_user : 0)})
        .then(({data}) => setPost(data.data))
        .catch(error => console.error(error));
    }, [])
    if(!user)
        history.push('/login');
    return (
        <Fragment>
            <Navbar logo={(user ? (user.image_web_user || logo) : logo)}/>
            <main className="container">
                {(post.length > 0 ? (post.map(data => (
                    <Post 
                        id_web_user={user ? user.id_web_user : 0}
                        id={data.id_web_post}
                        key={data.id_web_post}
                        logo={data.image_web_user || logo}
                        image={data.image_web_post}
                        username={data.username_web_user}
                        description={data.caption_web_post}
                        last_time="8 HOUR AGO" 
                        last_like_name="jar_no_bye" 
                        last_like_count={data.total_like}
                        comments={data.comments}
                    />
                ))) : (<div className="empty-post">Empty post</div>))}
            </main>
        </Fragment>
    );
}

export default Dashboard;