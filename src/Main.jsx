import React from 'react';
import Navbar from './Navbar';
import RandomImg from './random-img/RandomImg';
import App from './keep-note/App';
import { Switch, Route } from 'react-router-dom';
import Error from './Error';

const Main = () => {
    return (
        <>
           <Navbar />
           <Switch>
               <Route exact path="/MyApp" component={RandomImg} />
               <Route exact path="/MyApp/keep-note" component={App} />
               <Route component={Error} />
           </Switch>
        </>
    )
}

export default Main;