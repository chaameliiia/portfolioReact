import React from 'react';
import { Route, Switch } from 'react-router-dom';
import 'assets/css/_common.scss';
import Index from 'components/Index';
import Works from './components/Works';
import About from './components/About';
import Aside from 'components/common/Aside';
import Colors from 'contexts/Colors';
import Footer from 'components/common/Footer';
import DetailsList from 'contexts/DetailsList';
import Header from 'components/common/Header';

function App() {
  return (
    <>
      <Colors>
        <DetailsList>
          <Header />
          <Index />
          <Switch>
            {/* <Route exact path={["/", "/index"]} component={Index} /> */}
            <Route path="/about" component={About} />
            <Route path="/works" component={Works} />
          </Switch>
          <Aside />
          <Footer />
        </DetailsList>
      </Colors>
    </>
  );
}

export default App;
