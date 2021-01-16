import '../App.css';
import React, {useState, useEffect} from "react";
import jwt_decode from 'jwt-decode';
import { Switch, Route } from "react-router-dom";
import Signup from "./signup/signup";
import Home from "./home/home";
import Login from "./login/login";
import Dashboard from "./dashboard/dashboard";
import Subscription from "./dashboard/subscription";
import {axiosInstance} from "../axiosAPI";
import StripePayment from "./dashboard/stripePayment";
import Success from "./checkoutPages/success";
import Failure from "./checkoutPages/failure";


export default function App() {
    const [loggedIn, setLoggedIn] = useState(false)

    function changeLoginState() {
        setLoggedIn(prevValue => !prevValue)
    }

    useEffect(() => {
        let value = localStorage.getItem('access_token') !== null
        setLoggedIn(value)
    }, [])

    return (
          <Switch>

              <Route path={'/stripePayment/'}>
                  <StripePayment />
              </Route>

              {/*<Route path={'/subscription/'}>*/}
              {/*    <Subscription />*/}
              {/*</Route>*/}

              <Route path={'/dashboard/'}>
                  <Dashboard
                      isLoggedIn={loggedIn}
                      onLoginChange={changeLoginState}
                  />
              </Route>

            <Route path={'/register/'}>
                <Signup />
            </Route>

            <Route path={'/success/'}>
                <Success
                    isLoggedIn={loggedIn}
                    onLoginChange={changeLoginState}
                />
            </Route>

            <Route path={'/failure/'}>
                <Failure
                    isLoggedIn={loggedIn}
                    onLoginChange={changeLoginState}
                />
            </Route>

            <Route path={'/login/'}>
                <Login onLoginChange={changeLoginState} />
            </Route>

            <Route path={'/'}>
                <Home isLoggedIn={loggedIn} onLoginChange={changeLoginState} />
            </Route>

          </Switch>
    )
}
