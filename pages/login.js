import React, { Component } from 'react';
import { gql, graphql, compose } from 'react-apollo';
import Router from 'next/router';
import Page from '../components/Page';
import { Input, Row, Form, Button, ErrorText } from '../lib/shared';

class Login extends Component {
  state = { email: '', password: '', error: '' };

  render() {
    console.log('props', this.props);
    return (
      <Form action="submit">
        <Row>
          <Input
            type="text"
            placholder="email"
            onChange={e => this.setState({ email: e.target.value })}
            value={this.state.email}
          />
          <Input
            type="password"
            placholder="email"
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
    console.log('ha');
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
      return this.setState({ error: JSON.stringify(e, null, 2) });
    }

    const { data: { signinUser: { token, user } } } = result;
    console.log(token, user);
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
