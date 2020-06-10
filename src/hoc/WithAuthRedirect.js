import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";


//Функция, которая создает hoc. В качестве параметра принимает компоненту, которой мы хотим добавить какой-то дополнительный функционал, на выход получается созданная оберточная компонента, которая содержит изначальную компоненту, но имеет дополнительный функционал
const WithAuthRedirect = (Component) => {
    //Здесь надо создать контейнерную компоненту, у которой будет функционал AuthRedirect и вернуть ее

    class AuthRedirectComponent extends React.Component{
        render() {
            if (!this.props.isAuth) return <Redirect to={"/login"}/>;
            return <Component {...this.props}/>
        }
    };
    return connect(mapStateToPropsForRedirect)(AuthRedirectComponent);

};

const mapStateToPropsForRedirect = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
};

export default WithAuthRedirect;