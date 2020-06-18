import React from 'react';
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {loginUser} from "../../redux/auth-reducer";
import {maxLengthCreator, required} from "../../utils/validators";
import FormElement from "../../utils/FormElement";


const maxLength = maxLengthCreator(30);
const LoginInput = FormElement("input");


const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"} name={"login"}  component={LoginInput} validate={[maxLength, required]}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} component={LoginInput} validate={[maxLength, required]}/>
            </div>
            <div>
               Remember me <Field name={"rememberMe"} component={"input"} type={"checkbox"}/>
            </div>
            <div>
                <button>Login</button>
            </div>


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

    return (
        <div>
            <h2>Login</h2>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}


export default connect(null, {loginUser})(Login);