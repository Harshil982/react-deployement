
import Header from './Header';
import './App.css';
import Logo from './Logo';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { About } from './About';
import { Contact } from './Contact';

function App() {
  return (
    <BrowserRouter>
      <h1 style={{ textAlign: "center" }}>Hello World</h1>
      <Header />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/">
          <Logo />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
