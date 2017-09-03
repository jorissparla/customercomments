import React, { Component } from 'react';
import { gql, graphql, compose } from 'react-apollo';
import Router from 'next/router';
import Page from '../components/Page';
import { Input, Row, Form, Button, ErrorText, H1 } from '../lib/shared';
import jwt from 'jwt-simple';
import config from '../lib/config';

class Login extends Component {
  state = { email: '', password: '', error: '' };

  render() {
    return (
      <Form>
        <H1>Login</H1>
        <Row>
          <Input
            type="text"
            name="js-email"
            placeholder="Enter email address"
            onChange={e => this.setState({ email: e.target.value })}
            value={this.state.email}
          />
          <Input
            name="js-password"
            type="password"
            placeholder="Enter password"
            onChange={e => this.setState({ password: e.target.value })}
            value={this.state.password}
          />
        </Row>
        <Button onClick={() => this._login()}>Submit</Button>
        {this.state.error && <ErrorText>{this.state.error}</ErrorText>}
      </Form>
    );
  }

  _login = async () => {
    this.setState({ error: '' });
    const { email, password } = this.state;
    let result;
    try {
      result = await this.props.signinUserMutation({
        variables: {
          email,
          password
        }
      });
    } catch (e) {
      return this.setState({ error: 'Invalid email/password' });
    }

    const { data: { signinUser: { token, user } } } = result;
    console.log(config.secret);
    const decoded = jwt.decode(token, config.secret);
    console.log('decoded', decoded);
    localStorage.setItem('token', token);
    localStorage.setItem('user-name', user.fullname);
    localStorage.setItem('user-id', user.id);
    //localStorage.setItem('user-picture', user.picture.data);
    localStorage.setItem('user-role', user.role);
    Router.push('/');
  };
}

const SIGNIN_USER_MUTATION = gql`
  mutation SigninUserMutation($email: String!, $password: String!) {
    signinUser(input: { email: $email, password: $password }) {
      token
      user {
        id
        fullname
        email
        role
        picture {
          data
        }
      }
    }
  }
`;

const Login2 = graphql(SIGNIN_USER_MUTATION, { name: 'signinUserMutation' })(
  Login
);
export default () => (
  <Page>
    <Login2 />
  </Page>
);
