import React, { Component } from "react";
import NavBar from "./components/navbar";
import { Route, Switch , Redirect} from "react-router";
import Products from "./components/products";
import Posts from "./components/posts";
import Home from "./components/home";
import Dashboard from "./components/admin/dashboard";
import ProductDetails from "./components/productDetails";
import NotFound from "./components/notFound";
import "./App.css";


class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="content">
          <Switch>
            <Route path="/products/:id" component={ProductDetails}/>
            <Route path="/products" render={props => <Products sortBy="newest" {...props} />}>
            < Products />
            </Route>
            <Route path="/admin">
              <Dashboard />
              <Route path="/notFound">
                <NotFound />
              </Route> 
          </Route>
        <Route path="/posts/:year?/:month?">
        <Posts />
        </Route>
          <Route path="/">
      < Home/>
            </Route>
            <Redirect to="/notFound"/>
      </Switch>
    
        </div>
      </div>
    );
  }
}

export default App;
