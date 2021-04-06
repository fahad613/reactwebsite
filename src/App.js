import logo from './logo.svg';
import './App.css';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from './Header'
import Home from './Home';
import About from './About';
import Services from './Services';
import Content from './Content';



function App() {
  return (
    <>

      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/services' component={Services} />
        <Route exact path='/content' component={Content} />
        <Redirect to="/" />
      </Switch>

    </>
  );
}

export default App;
