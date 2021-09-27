import './styles/App.css';
import './styles/Reset.css';
import './styles/Nav.css'
import Home from './components/Home';
import Event from './components/Event';
import Searchbar from './components/Searchbar';
import { Route, BrowserRouter , Switch, Link } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <div className="containerNav">
              <div className="containerNav__left">
              <Link to='/'><div id="logoMyEvents"></div><p>My Events</p></Link>
              </div>
              <div>
                  <div className="containerNav__right">
                  <div>
                        <a href="http://localhost:5500/profil" target="_blank"><div id="iconAccount" src=""></div></a>
                        <a href="http://localhost:5500/profil" target="_blank"><p>Compte</p></a>
                    </div>
                    <div>
                        <a href="http://localhost:5500/auth/linkedin" target="_blank"><div id="iconLogin" src=""></div></a>
                        <a href="http://localhost:5500/auth/linkedin" target="_blank"><p>Se connecter</p></a>
                    </div>
                      <div>
                          <a href="www.google.com" target="_blank"><div id="iconLogout" src=""></div></a>
                          <a href="www.google.com" target="_blank"><p>Se déconnecter</p></a>
                      </div>
                  </div>
              </div>
          </div>
          <div className="borderNav">
      </div>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path='/event/:uid' component={Event}>
            </Route>
            <Route exact path='/search/:search' component={Searchbar}>
            </Route>
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
