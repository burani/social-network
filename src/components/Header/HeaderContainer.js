import React from "react";
import {getAuthUserData} from "../../redux/auth-reducer";
import Header from "./Header";
import {connect} from "react-redux";


class HeaderContainer extends React.Component {

    componentDidMount() {

        this.props.getAuthUserData();

    }


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


export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer);