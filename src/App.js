import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom'
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";

function App(props) {
    return (


        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                {/*<Route path='/dialogs' render={ () => }/>*/}
                <Route path='/dialogs'
                       render={() => <Dialogs dialogsPage={props.state.dialogsPage} dispatch={props.dispatch}/>}/>

                <Route path='/profile' render={() => <Profile profilePage={props.state.profilePage}
                                                              dispatch={props.dispatch}
                />}/>
            </div>
        </div>


    );
}

export default App;
