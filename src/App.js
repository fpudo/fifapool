import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import RankPres from './rankPres';

class App extends Component {
  render() {
    const {classes} = this.props;
    return (
      <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="title" color="inherit">
            World Cup Pool
          </Typography>
        </Toolbar>
      </AppBar>
      <RankPres />
    </div>
    );
  }
}

const styles = {
  root: {
    flexGrow: 1,
  },
};

export default withStyles(styles)(App);
