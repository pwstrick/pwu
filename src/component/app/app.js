import React from 'react';
import ReactDOM from 'react-dom';
import './app.scss';
import avatar from '../../img/avatar.png';

function App() {
    console.log("success");
    return (<div>
        <img src={avatar} width="100"/>
        <div className="container">Hello World！</div>
    </div>);
}
export default App;