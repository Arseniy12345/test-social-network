import React from 'react'
import styles from './Post.module.css'

const Post = ({message, likeCount}) => {
    return (
        <div className = {styles.post}>
            <img src="https://i.pinimg.com/736x/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64--youtube.jpg" alt=''/>
            { message }
            <div>
                <span>Like</span> - { likeCount }
            </div>
        </div>
    );
}

export default Post