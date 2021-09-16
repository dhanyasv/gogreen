import { createContext, useState } from 'react';
import './App.css';
import Products from './modules/products/Products';
import User from './modules/user/User';
import Banner from './ui/banner/Banner';
import Header from './ui/header/Header';
import About from './ui/About';
import Contact from './ui/Contact';
import Topic from './ui/Topic';
import Appc from './Appc'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
export const AuthContext = createContext();

function App() {
  const[user,setUser] = useState({'auth':false});
  
  const getUserState = (userauth) => {
    setUser({'auth':userauth})

  }
  
  return (
    <Router>
    <AuthContext.Provider value={user.auth}>
    <div className="App">
      <Header children={ <Banner/> } />
      <Appc name="dhanya"/>
      <User getstatus={ getUserState }/>
      { user.auth && <Products /> }
    </div>
    <Switch>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/contact">
                <Contact />
            </Route>
            <Route path="/topic">
                <Topic />
            </Route>
        </Switch>
    </AuthContext.Provider>
    </Router>
  );
}

export default App;
