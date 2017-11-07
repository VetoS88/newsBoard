import React from 'react'

function Comment({comment}){
    return(
        <div>
            <p>{comment.text} <b>{comment.user}</b></p>
        </div>
    )
}

export default Comment
