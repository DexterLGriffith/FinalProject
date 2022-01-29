import React from "react";
import {ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router, Route, Switch,Link } from "react-router-dom";


// importing pages 
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

function homeClickHandler(event){
event.preventDefault();
this.props.history.push('/login');
<Link to ={'/login'}/>
}

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
        <div className="container">
        <Route exact path="/">
            <Home onClick ={homeClickHandler} />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
        </div>
          {/* <>
       <Login />;
    </> */}
      </Switch>
    </Router>
    </ApolloProvider>
  );
  

}

export default App;
