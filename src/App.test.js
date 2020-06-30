import React from 'react';
import SocialNetwork from "./App";
import ReactDOM from 'react-dom';


it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SocialNetwork/>, div);
    ReactDOM.unmountComponentAtNode(div);
});