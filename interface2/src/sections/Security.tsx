import React, { Component } from 'react';
import { Redirect, Switch, RouteComponentProps } from 'react-router-dom'

import { Tabs, Tab } from '@material-ui/core';

import AuthenticatedRoute from '../authentication/AuthenticatedRoute';
import { AuthenticatedContextProps } from '../authentication/AuthenticationContext';
import { MenuAppBar } from '../components';
import ManageUsersController from '../containers/ManageUsersController';
import SecuritySettingsController from '../containers/SecuritySettingsController';

type SecurityProps = AuthenticatedContextProps & RouteComponentProps;

class Security extends Component<SecurityProps> {

  handleTabChange = (event: React.ChangeEvent<{}>, path: string) => {
    this.props.history.push(path);
  };

  render() {
    return (
      <MenuAppBar sectionTitle="Security">
        <Tabs value={this.props.match.url} onChange={this.handleTabChange} indicatorColor="primary" textColor="primary" variant="fullWidth">
          <Tab value="/security/users" label="Manage Users" />
          <Tab value="/security/settings" label="Security Settings" />
        </Tabs>
        <Switch>
          <AuthenticatedRoute exact={true} path="/security/users" component={ManageUsersController} />
          <AuthenticatedRoute exact={true} path="/security/settings" component={SecuritySettingsController} />
          <Redirect to="/security/users" />
        </Switch>
      </MenuAppBar>
    )
  }
}

export default Security;