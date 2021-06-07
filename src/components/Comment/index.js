import React from 'react';

function Comment({name, comment, no, total}){
    return (
        <div className="comment" style={{display: (!((total == no || (total-1) == no)) ? 'none' : '')}}>
            <span className="comment_name">{name}</span>
            <span className="comment_desc">{comment}</span>
        </div>
    );
}

export default Comment;