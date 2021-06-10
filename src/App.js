import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import "./App.css";
import { Route } from "wouter";
import { UserContextProvider } from "./context/UserContext";
import PageFeed from "./pages/PageFeed";
import PageHome from "./pages/PageHome";

function App() {
    return (
        <UserContextProvider>
            <Route path="/feed" component={PageFeed} />
            <Route path="/" component={PageHome} />
        </UserContextProvider>
    );
}

export default App;
