import React, { Fragment } from 'react';
import SearchBar from './components/SearchBar';
import { Container } from 'reactstrap';

//Coponents
import Inicio from './containers/Inicio';
import SearchVideos from './containers/SearchVideos';
import SearchImages from './containers/SearchImages';
import Login from './containers/Login';
import Register from './containers/Register';

//Router
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
 
  return (
    <Router>
      <Fragment>
        <SearchBar />
        <Container className="my-4">
          <Switch>
            
            <Route exact path="/Videos" component={SearchVideos} />
            <Route exact path="/Images" component={SearchImages} />
            <Route exact path="/Login" component={Login}/>
            <Route exact path="/Register" component={Register}/>
            <Route exact path="/" component={Inicio} />
          </Switch>
        </Container>
        
      </Fragment>
    </Router>
  );
}

export default App;
