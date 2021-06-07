import React, {useState} from 'react';
import {useHistory} from "react-router-dom";
import Comment from '../Comment';
import axios from 'axios';

function Post({id_web_user, id, logo, image, username, description, last_time, last_like_name, last_like_count, comments}){
    const [comment, setComment] = useState('');
    let history = useHistory();

    return (
        <div className="post" data-id={id}>
            <div className="post_header">
                <div className="post_header_user">
                    <img src={logo} alt="Logo Header User"/>
                    <span>{username}</span>
                </div>
            </div>
            <div className="post_body">
                <div className="post_body_img">
                    <img src={image} alt="Image Gallery"/>
                </div>
                <div className="post_body_action">
                    <div className="post_body_action_left">
                        <a href="####" className="nav-item"><i className="far fa-heart"></i></a>
                        <a href="##" className="nav-item"><i className="far fa-comment"></i></a>
                        <a href="###" className="nav-item"><i className="far fa-paper-plane"></i></a>
                    </div>
                    <div className="post_body_action_right">
                        <a href="######" className="nav-item"><i className="far fa-bookmark"></i></a>
                    </div>
                </div>
                <div className="post_body_info">
                    {(parseInt(last_like_count) == 0 ? null : (parseInt(last_like_count) < 1000 ? (<div className="total_likes">{last_like_count} likes</div>) : (
                        <div className="last_like">
                            <img src={logo} alt="Logo Like User"/>
                            <div>Liked by <span className="last_like_name">{last_like_name}</span> and <span className="last_like_count">{last_like_count} others</span></div>
                        </div>
                    )))}
                    <div className="posting">
                        <span className="posting_name">{username}</span>
                        <span className="posting_desc">{description}</span>
                    </div>
                    {(comments.length > 2 ? <div className="hide_comments" 
                        onClick={e => {
                            if(e.currentTarget.parentNode.querySelector('.comments')){
                                e.currentTarget.style.display = 'none';
                                Array.from(e.currentTarget.parentNode.querySelector('.comments').childNodes).forEach(el => (el.style.display = ''));
                            }
                        }}>View all {(comments.length-2)} comments</div> : null)}
                    <div className="comments">
                        {comments.map((value, key) => <Comment no={key+1} total={comments.length} key={value.id_web_post_comment} name={value.username_web_user} comment={value.keterangan}/>)}
                    </div>
                    <div className="post-time">{last_time}</div>
                </div>
                <div className="post_body_comment">
                    <input type="text" placeholder="Add a comment" defaultValue={comment}
                        onChange={e => {
                            if(e.target.value.length > 0)
                                e.target.nextElementSibling.classList.add('show');
                            else 
                                e.target.nextElementSibling.classList.remove('show');
                            setComment(e.target.value);
                        }}
                        onClick={e => e.target.select()}
                    />
                    <button type="button" className=""
                        onClick={e => {
                            e.stopPropagation();
                            e.preventDefault();
                            let input = e.currentTarget.previousElementSibling;
                            let id_web_post = e.currentTarget.closest('.post').dataset.id ?? 0;
                            if(comment && id_web_post && id_web_user){
                                axios.post('http://localhost/insta-clone-be/api/add_comment', {id_web_user, id_web_post, comment})
                                .then(({data}) => {
                                    if(data.status == 'error')
                                        return alert(data.message);
                                    else {
                                        history.push("/");
                                        input.value = '';
                                        setComment("");
                                    }
                                })
                                .catch(error => console.error(error));
                            }
                        }}
                    >Post</button>
                </div>
            </div>
        </div>
    );
}

export default Post;