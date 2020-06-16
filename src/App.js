import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import ArticleListPage from './pages/ArticleListPage';
import About from './pages/About';
import Article from './pages/Article';
import Navbar from '../src/Navbar';
import NotFoundPage from '../src/pages/NotFoundPage'


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div id="page-body">
          <Switch>
            <Route path="/" exact component={Home}>

            </Route>
            <Route path="/about" component={About}>

            </Route>
            <Route path="/article-list" component={ArticleListPage}>

            </Route>
            <Route path="/article/:name" component={Article}>
            </Route>
            <Route component={NotFoundPage}>
            </Route>
          </Switch>

        </div>

      </div>
    </Router>

  );
}

export default App;
