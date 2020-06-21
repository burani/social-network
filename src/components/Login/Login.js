import React from 'react';
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {loginUser} from "../../redux/auth-reducer";
import {maxLengthCreator, required} from "../../utils/validators";
import FormElement from "../../utils/FormElement";
import {Redirect} from "react-router-dom";
import s from "../../utils/utils.module.css"

const maxLength = maxLengthCreator(30);
const LoginInput = FormElement("input");


const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"} name={"login"}  component={LoginInput} validate={[maxLength, required]}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} component={LoginInput} validate={[maxLength, required]} type={"password"}/>
            </div>
            <div>
               Remember me <Field name={"rememberMe"} component={"input"} type={"checkbox"}/>
            </div>
            <div>
                <button>Login</button>
            </div>

            {props.error? <div className={s.formSummaryError}>
               {props.error}
            </div>: ""}


        </form>
    )
}

//Создаем контейнерную компоненту, которая будет подключена к стору и редьюсеру redux-form (formReducer)
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);


const Login = (props) => {

    const onSubmit = (formData) => {
        // console.log(formData);
        props.loginUser(formData);
    };

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }


    return (
        <div>
            <h2>Login</h2>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
    }
}


export default connect(mapStateToProps, {loginUser})(Login);