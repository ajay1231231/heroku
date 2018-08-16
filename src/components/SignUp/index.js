import React, { Component } from 'react';
import {
  Link,
  withRouter,
} from 'react-router-dom';
import { Row, Col } from 'reactstrap';
import { auth, db } from '../../firebase';
import * as routes from '../../constants/routes';

const SignUpPage = ({ history }) =>
  <div>
    <h1 className="text-center" style={{ margin:'10px 0px' }}>SignUp</h1>
    <SignUpForm history={history} />
  </div>

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  username: '',
  email: '',
  phonenumber: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const {
      username,
      email,
      phonenumber,
      passwordOne,
      
    } = this.state;

    const {
      history,
    } = this.props;

    auth.doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {

        // Create a user in your own accessible Firebase Database too
        db.doCreateUser(authUser.user.uid, username, email, phonenumber)
          .then(() => {
            this.setState(() => ({ ...INITIAL_STATE }));
            history.push(routes.HOME);
          })
          .catch(error => {
            this.setState(updateByPropertyName('error', error));
          });

      })
      .catch(error => {
        this.setState(updateByPropertyName('error', error));
      });

    event.preventDefault();
  }

  render() {
    const {
      username,
      email,
      phonenumber,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      username === '' ||
      email === '';

    return (
      <form onSubmit={this.onSubmit} className="form-horizontal" style={{ width:'60%', margin:'0px auto' }} >
      <Row>
         <Col md="6">
            <div className="form-group">  
                <input
                  value={username}
                  onChange={event => this.setState(updateByPropertyName('username', event.target.value))}
                  type="text" className="form-control"
                  placeholder="Full Name"
                />
             </div>
        </Col>
        <Col md="6">
            <div className="form-group">	  
              <input
                value={email}
                onChange={event => this.setState(updateByPropertyName('email', event.target.value))}
                type="text"
                placeholder="Email Address" className="form-control"
              />
          </div>
        </Col>
        <Col md="6">
            <div className="form-group">	  
              <input
                value={phonenumber}
                onChange={event => this.setState(updateByPropertyName('phonenumber', event.target.value))}
                type="number"
                placeholder="Phone Number" className="form-control"
              />
          </div>
        </Col>  
        <Col md="6">  
            <div className="form-group">	  
              <input
                value={passwordOne}
                onChange={event => this.setState(updateByPropertyName('passwordOne', event.target.value))}
                type="password"
                placeholder="Password" className="form-control"
              />
          </div>
        </Col>  
        <Col md="6">  
            <div className="form-group">	   
              <input
                value={passwordTwo}
                onChange={event => this.setState(updateByPropertyName('passwordTwo', event.target.value))}
                type="password"
                placeholder="Confirm Password" className="form-control"
              />
          </div>
        </Col>
    </Row>	
	  <div className="form-group text-center">	
        <button disabled={isInvalid} type="submit" className="btn btn-primary ">
          Sign Up
        </button>
      </div>
        { error && <p>{error.message}</p> }
      </form>
    );
  }
}

const SignUpLink = () =>
  <p>
    Don't have an account?
    {' '}
    <Link to={routes.SIGN_UP}>Sign Up</Link>
  </p>

export default withRouter(SignUpPage);

export {
  SignUpForm,
  SignUpLink,
};