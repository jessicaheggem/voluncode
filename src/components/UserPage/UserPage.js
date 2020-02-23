import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import SelectedProject from '../SelectedProject/SelectedProject'
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import orange from '@material-ui/core/colors/orange'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const moment = require('moment');

const theme = createMuiTheme({
  palette: {
    primary: orange,
    secondary: orange
  }
})


class UserPage extends Component {

  render() {

    const user = this.props.user;

    return (
      <ThemeProvider theme={theme}>
        <div className="content">
          <Grid xs container justify="left">
            <Paper className="paper">
              <h1 id="welcome">
                Welcome, {user.first_name} {user.last_name}!
              </h1>
              <p><b>Member since:</b></p>
              <p>{moment(user.timestamp).format('LL')}</p>
              <p><b>Email:</b></p>
              <p>{user.email}</p>
              <p><b>Located:</b></p>
              <p>{user.city}, {user.state}</p>
              <p><b>Occupation:</b></p>
              <p>{user.occupation}</p>
            </Paper>
          </Grid>


          <Grid xs container justify="right">
            <Paper className="paper">
              <p><b>Portfolio URL:</b></p>
              <p>{user.portfolio}</p>
              <p><b>Time available to volunteer:</b></p>
              <p>{user.time_available}</p>
              <p><b>Known programming languages:</b></p>
              <p>{user.languages}</p>
              <p><b>Qualifications:</b></p> <p>{user.qualifications}</p>
              <Button
                type="button"
                className="link-button"
                variant="contained"
                color="primary"
                onClick={() => {
                  console.log('clicked Edit Profile');
                  this.props.history.push('/edit_profile')
                }}>
                Edit Profile
                    </Button>
            </Paper>
          </Grid>
          {/* <p><b>Member since:</b></p>
          <p>{moment(user.timestamp).format('LL')}</p> */}

          <br />
          <br />
          <br />
          <br />
          <Grid xs>
            <Grid container justify="center" >
              {[0].map(value => (
                <Grid key={value}>
                  <Paper className="paper">
                    <SelectedProject />
                  </Paper>
                </Grid>
              ))}

            </Grid>
          </Grid>
          <br />
          {/* <LogOutButton className="log-in" /> */}
        </div >
      </ThemeProvider>
    )
  }
}


// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({user});
const mapStateToProps = state => ({
  user: state.user,
  state
});

// this allows us to use <App /> in index.js
export default withRouter(connect(mapStateToProps)(UserPage));
