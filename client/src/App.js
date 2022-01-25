import React from "react";
import {ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router, Route } from "react-router-dom";


// importing pages 
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <switch>
        <div className="container">
        <Route exact path="/">
            <Home />
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
      </switch>
    </Router>
    </ApolloProvider>
  );
  
}

export default App;
