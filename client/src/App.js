import React, { useState } from "react";
import {ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


// importing pages 
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import {User} from "./pages/User";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

// const [password, setPassword] = useState("");


function App() {
  const [email, setEmail] = useState("");
  
  function handleUserLogin(event){
    setEmail(event.target.querySelector('input').value);
  }

  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
        <div className="container">
        {/* <Route exact path="/">
            <Home />
          </Route> */}
          <Route exact path="/login">
            <Login handleUserLogin={handleUserLogin}  />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/user">
            <User userEmail = {email} />
           
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
