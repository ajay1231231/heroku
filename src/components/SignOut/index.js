import React from 'react';
import { auth } from '../../firebase';

const SignOutButton = () =>
  <button
    className="nav-link button2"
    onClick={auth.doSignOut}
    
  > 
    Sign Out
  </button>

export default SignOutButton;
