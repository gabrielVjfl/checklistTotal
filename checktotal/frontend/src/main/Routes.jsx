import React from 'react'

import {Route, HashRouter, Redirect, Switch } from 'react-router-dom'

import Check from '../check/Check'

import About from '../about/About'

/* Colocar no <a> href="#/check" ou #/about */

// Route é colocado no app.jsx e check e about n precisa pq é chamado no menu quando apertar !!!!!


/* ou privateRoute */
export default props => (

    <HashRouter>
    <Switch>
        <Route path='/check' component={Check}></Route>
        <Route path='/about' component={About}></Route>
        <Redirect from="*" to="/check"></Redirect>
        </Switch>
    </HashRouter>
  
)



