import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
    return ({
        auth: state.auth,
    })
}

const PrivateRoute = (props) => {
    return props.auth.user 
        ? <Route {...props} component={props.component}/>
        : <Redirect to="/" />
}

export default connect(mapStateToProps, null)(PrivateRoute);