import React from 'react'
import  ReactDOM  from 'react-dom'
import App from './App';
import store from './Redux/store';
import {Provider} from 'react-redux'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.css";
import 'remixicon/fonts/remixicon.css'
import './index.css'



ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
,document.getElementById('root'))