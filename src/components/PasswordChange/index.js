import React, { Component } from 'react';

import { auth } from '../../firebase';

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class PasswordChangeForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { passwordOne } = this.state;

    auth.doPasswordUpdate(passwordOne)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
      })
      .catch(error => {
        this.setState(updateByPropertyName('error', error));
      });

    event.preventDefault();
  }

  render() {
    const {
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '';

    return (
      <form className="form-horizontal" onSubmit={this.onSubmit}>
	      <div className="form-group">
			<input
			  value={passwordOne}
			  onChange={event => this.setState(updateByPropertyName('passwordOne', event.target.value))}
			  type="password" className="form-control"
			  placeholder="New Password"
			/>
		  </div>
		  <div className="form-group">
			<input
			  value={passwordTwo}
			  onChange={event => this.setState(updateByPropertyName('passwordTwo', event.target.value))}
			  type="password" className="form-control"
			  placeholder="Confirm New Password"
			/>
		 </div>
		 <div className="form-group"> 
			<button disabled={isInvalid} type="submit" className="btn btn-primary">
			  Reset My Password
			</button>
         </div>
        { error && <p>{error.message}</p> }
      </form>
    );
  }
}

export default PasswordChangeForm;