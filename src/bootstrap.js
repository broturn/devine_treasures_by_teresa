import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter } from "react-router-dom";

import App from "./components/app";
import Shop from "./components/shop";
import Contact from "./components/contact";
import About from "./components/about";

import reducers from "./reducers";

import history from "./history";

const createStoreWithMiddleware = applyMiddleware()(createStore);

import "./style/main.scss";

function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <Router history={hitory}>
        <Layout>
          <Switch>
            <Route path='/' exact component={App}/>
            <Route path="/shop" exact component={Shop}/>
            <Route path="/about" exact component={About}/>
            <Route path="/contact" exact component={Contact}/>

          </Switch>
        </Layout>
      </Router>
    </Provider>,
    document.querySelector(".app-wrapper")
  );
}

document.addEventListener("DOMContentLoaded", main);
