import React from "react";
import {getAuthUserData, logout} from "../../redux/auth-reducer";
import Header from "./Header";
import {connect} from "react-redux";


class HeaderContainer extends React.Component {

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        email: state.auth.email,
        login: state.auth.login,
        isAuth: state.auth.isAuth,
        userId: state.auth.userId
    }
};


export default connect(mapStateToProps, {getAuthUserData, logout})(HeaderContainer);