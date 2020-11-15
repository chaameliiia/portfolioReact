import React from 'react';
import { Color } from 'contexts/Colors';
import { Route, Switch } from 'react-router-dom'
import 'assets/css/_common.scss';
import Works from './components/Works';
import About from './components/About';
import Header from 'components/common/Header';
import Aside from 'components/common/Aside';
import Colors from 'contexts/Colors';
import Footer from 'components/common/Footer';

function App() {
  return (
    <Colors>
      <Header />
      <Switch>
        <Route path="/" component={Works} exact={true} />
        <Route path="/works" component={Works} />
        <Route path="/about" component={About} />
      </Switch>
      <Aside />
      <Footer />
    </Colors>
  );
}

export default App;