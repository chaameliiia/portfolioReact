import React from 'react';
import { Route, Switch } from 'react-router-dom';
import 'assets/css/_common.scss';
import Works from './components/Works';
import About from './components/About';
import Header from 'components/common/Header';
import Aside from 'components/common/Aside';
import Colors from 'contexts/Colors';
import Footer from 'components/common/Footer';
import DetailsList from 'contexts/DetailsList';

function App() {
  return (
    <Colors>
      <DetailsList>
        <Header />
        <Switch>
          <Route exact path={['/', '/portfolioReact']} component={About} />
          <Route path="/works" component={Works} />
        </Switch>
        <Aside />
        <Footer />
      </DetailsList>
    </Colors>
  );
}

export default App;
