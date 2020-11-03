import React from 'react';
import { Route, Switch, Redirect  } from 'react-router-dom';
import Home from "./views/Home/Home";
import NotFound from "./views/NotFound";
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import muiTheme from './theme/muiTheme';
import CssBaseline from "@material-ui/core/CssBaseline"

const App = () => {
  return (
    <div>
      <MuiThemeProvider theme={muiTheme}>
      <CssBaseline />
        <Switch>
          <Route exact path="/Home" component={Home} />
          <Route exact path="/">
            <Redirect to="/Home" />
          </Route>
          <Route component={NotFound}/>
        </Switch>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
