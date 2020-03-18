import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
// import {addPost, updateNewPostText} from "../../../redux/state";



const MyPosts = (props) => {
    let postsElements =
        props.profilePage.posts.map( p => <Post message={p.message} likesCount={p.likesCount}/>);


    const onChangePost = (e) => {
        props.changePost(e);
    }

    const onAddClick = (e) => {
        props.addPost();
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onChangePost} value={props.profilePage.newPostText} />
                </div>
                <div>
                    <button onClick={ onAddClick }>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                { postsElements }
            </div>
        </div>
    )
}

export default MyPosts;