import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../components/Home';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import PortfolioItem from '../components/PortfolioItem';
import Contact from '../components/Contact';
import Header from '../components/Header';
import NotFound from '../components/NotFound';

const AppRouter = () => (
  <BrowserRouter>
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/portfolio/:id" component={PortfolioItem} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </>
  </BrowserRouter>
);

export default AppRouter;
