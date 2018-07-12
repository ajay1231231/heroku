import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { SignUpLink } from '../SignUp';
import { PasswordForgetLink } from '../PasswordForget';
import { auth } from '../../firebase';
import * as routes from '../../constants/routes';

const SignInPage = ({ history }) =>
  <div>
    <h1 className="text-center" style={{ margin:'10px 0px' }} >SignIn</h1>
    <SignInForm history={history} />
    <PasswordForgetLink />
    <SignUpLink />
  </div>

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const {
      email,
      password,
    } = this.state;

    const {
      history,
    } = this.props;

    auth.doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
        history.push(routes.HOME);
      })
      .catch(error => {
        this.setState(updateByPropertyName('error', error));
      });

    event.preventDefault();
  }

  render() {
    const {
      email,
      password,
      error,
    } = this.state;

    const isInvalid =
      password === '' ||
      email === '';

    return (
      <form onSubmit={this.onSubmit} className="form-horizontal" style={{ width:'40%', margin:'0px auto' }}>
        <div className="form-group">
			<input
			  value={email}
			  onChange={event => this.setState(updateByPropertyName('email', event.target.value))}
			  type="text" className="form-control"
			  placeholder="Email Address"
			/>
		</div>
		<div className="form-group">
			<input
			  value={password}
			  onChange={event => this.setState(updateByPropertyName('password', event.target.value))}
			  type="password" className="form-control"
			  placeholder="Password"
			/>
		 </div>
         <div className="form-group">		 
			<button disabled={isInvalid} type="submit" className="btn btn-primary">
			  Sign In
			</button>
		 </div>

        { error && <p>{error.message}</p> }
      </form>
    );
  }
}

export default withRouter(SignInPage);

export {
  SignInForm,
};
