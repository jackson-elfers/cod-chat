import "react-app-polyfill/stable";
import React from "react";
import ReactDOM from "react-dom";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux";
import "./styles";
import { Home, Conference, PrivateChat, QA, NotFound } from "./pages";
import { Status, Scroll, SetUser, Notice } from "./components";
import { routes } from "./config";
import * as serviceWorker from "./serviceWorker";

const routing = (
  <Provider store={store}>
    <Router>
      <Scroll>
        <Notice>
          <Switch>
            <Route exact path={routes.Home} component={Home} />
            <Route exact path={`${routes.Conference}/:chat_id/:user_id`} component={Conference} />
            <Route exact path={`${routes.PrivateChat}/:chat_id/:user_id`} component={PrivateChat} />
            <Route exact path={`${routes.QA}/:chat_id`} component={QA} />
            <Route component={NotFound} />
          </Switch>
        </Notice>
      </Scroll>
    </Router>
  </Provider>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
