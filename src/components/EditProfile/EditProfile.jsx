import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import teal from '@material-ui/core/colors/teal'

const theme = createMuiTheme({
    palette: {
        primary: teal,
        secondary: teal
    }
})

class EditProfile extends Component {
    state = {
        id: this.props.reduxStore.user.id,
        first_name: this.props.reduxStore.user.first_name,
        last_name: this.props.reduxStore.user.last_name,
        email: this.props.reduxStore.user.email,
        city: this.props.reduxStore.user.city,
        state: this.props.reduxStore.user.state,
        occupation: this.props.reduxStore.user.occupation,
        portfolio: this.props.reduxStore.user.portfolio,
        time_available: this.props.reduxStore.user.time_available,
        languages: this.props.reduxStore.user.languages,
        qualifications: this.props.reduxStore.user.qualifications,
    }

    editProfile = (event, propertyValue) => {
        //build a new object in state
        // console.log('editing profile', this.state);
        this.setState({
            ...this.state,
            [propertyValue]: event.target.value,
        })
    }

    handleEdit = () => {
        // dispatches edit to redux
        console.log('clicking to submit edit', this.state);
        this.props.dispatch({
            type: 'SUBMIT_EDIT',
            payload: this.state,
            // url: `/api/edit_profile/${this.state.id}`
        })
        this.props.history.push(`/home`)
    }

    render() {
        return (
            <ThemeProvider theme={theme}>
                <div>
                    <h2>Edit Profile</h2>
                    First Name:
                    <br />
                <TextField
                        id="standard-name"
                        variant="outlined"
                        margin="dense"
                        value={this.state.first_name}
                        onChange={(event) => this.editProfile(event, 'first_name')}
                    />
                    <br />
                    Last Name:
                    <br />
                <TextField
                        id="standard-name"
                        variant="outlined"
                        margin="dense"
                        value={this.state.last_name}
                        onChange={(event) => this.editProfile(event, 'last_name')}
                    />
                    <br />
                    Email:
                    <br />
                <TextField
                        id="standard-name"
                        variant="outlined"
                        margin="dense"
                        value={this.state.email}
                        onChange={(event) => this.editProfile(event, 'email')}
                    />
                    <br />
                    City:
                    <br />
                <TextField
                        id="standard-name"
                        variant="outlined"
                        margin="dense"
                        value={this.state.city}
                        onChange={(event) => this.editProfile(event, 'city')}
                    />
                    <br />
                    State:
                    <br />
                <TextField
                        id="standard-name"
                        variant="outlined"
                        margin="dense"
                        value={this.state.state}
                        onChange={(event) => this.editProfile(event, 'state')}
                    />
                    <br />
                    Job Title/Occupation:
                    <br />
                    <TextField
                        id="standard-name"
                        variant="outlined"
                        margin="dense"
                        value={this.state.occupation}
                        onChange={(event) => this.editProfile(event, 'occupation')}
                    />
                    <br />
                    Github URL or another link to your portfolio:
                    <br />
                    <TextField
                        id="standard-name"
                        variant="outlined"
                        margin="dense"
                        value={this.state.portfolio}
                        onChange={(event) => this.editProfile(event, 'portfolio')}
                    />
                    <br />
                    How much time can you commit to a project?
                    <br />
                    <TextField
                        multiline
                        rows="4"
                        margin="dense"
                        variant="outlined"
                        value={this.state.time_available}
                        onChange={(event) => this.editProfile(event, 'time_available')}
                    />
                    <br />
                    List your known programming languages:
                    <br />
                    <TextField
                        multiline
                        rows="4"
                        margin="dense"
                        variant="outlined"
                        value={this.state.languages}
                        onChange={(event) => this.editProfile(event, 'languages')}
                    />
                    <br />
                    What qualifications do you have? Include degrees, certifications, courses, etc.
                    <br />
                    <TextField
                        multiline
                        rows="4"
                        margin="dense"
                        variant="outlined"
                        value={this.state.qualifications}
                        onChange={(event) => this.editProfile(event, 'qualifications')}
                    />
                    <br />
                    <Button
                        type="button"
                        className="link-button"
                        variant="contained"
                        color="primary"
                        onClick={this.handleEdit}>
                        Submit Changes
                    </Button>
                </div>
            </ThemeProvider>

        )
    }
}

const mapReduxStateToProps = (reduxStore) => ({
    reduxStore
})

export default withRouter(connect(mapReduxStateToProps)(EditProfile));