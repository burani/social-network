import React from "react";
import connect from "react-redux/lib/connect/connect";
import {getAuthUserData} from "../../redux/auth-reducer";
import Header from "./Header";


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