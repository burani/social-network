import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators";
import FormElement from "../../../utils/FormElement";


const MyPosts = (props) => {
    let postsElements =
        props.profilePage.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    //prev name = onAddClick
    const onSubmit = (formData) => {
        props.addPost(formData.post);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <ProfilePostsReduxForm onSubmit={onSubmit} profilePage={props.profilePage}/>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

const maxLength = maxLengthCreator(100);
const PostsTextArea = FormElement("textarea");

const ProfilePostsForm = (props) => {
    // debugger;
    return (

        //Здесь надо вызывать не тот метод onSubmit, который мы передали в форму, а метод props.handleSubmit от redux-form, он сам вызывает onSubmit и коннектит форму к стору.
        //Не знаю как засетать value у Fiedl, оно просто не меняется
        //мне кажется, что надо делать через state redux-form каким-то образом
        <form onSubmit={props.handleSubmit}>
            <Field name={"post"} component={PostsTextArea} placeholder={"Enter you new post here"} validate={[maxLength, required]}/>
            <span>
                <button>Add post</button>
            </span>
        </form>
    )
};

const ProfilePostsReduxForm = reduxForm({form: "profilePost"})(ProfilePostsForm);


export default MyPosts;