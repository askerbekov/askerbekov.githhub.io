import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Navigation from "./Navigation/Navigation";
import Home from "./Home/Home";
import About from "./About/About";
import Services from "./Services/Services";
import Portfolio from "./Portfolio/Portfolio";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";

class App extends Component {
  state = {
    drawerOpen: false
  };

  toggleHandler = () => {
    this.setState({
      drawerOpen: !this.state.drawerOpen
    });
  };
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navigation
            toggleHandler={this.toggleHandler}
            drawerOpen={this.state.drawerOpen}
          />

          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
