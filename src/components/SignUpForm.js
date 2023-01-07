import React, { useState } from 'react';
import "./SignUpForm.css"

function SignUpForm() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    if (!name) {
        setError('Error: Name can not be empty');
        return;
    }
    if (!email) {
        setError('Error: Email can not be empty');
        return;
    }
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    if (!emailRegex.test(email)) {
      setError('Error: Email is invalid');
      return;
    }
    if (!password) {
        setError('Error: Password can not be empty');
        return;
    }
    if (!confirmPassword) {
        setError('Error: Confirm Password can not be empty');
        return;
    }
    if (password!==confirmPassword) {
        setError('Error: Passwords do not match');
        return;
    }
    
    setError('');
    setSuccess('Successfully Signed Up!');
  }
  return (
    <div>
        <form action="" className="signup">
            <div className="container box1 d-flex flex-wrap justify-content-start">
                <p className="heading">
                    Signup
                </p>
                <div className="container box2 d-flex justify-content-start">
                    <div>
                    <input type="text" className="name" id="name" placeholder='Full Name' value={name}
  onChange={(e) => setName(e.target.value)} />
                        <hr />
                    </div>
                    <div>
                    <input type="email" className="email" id="email" placeholder='Email' value={email}
  onChange={(e) => setEmail(e.target.value)} />
                        <hr />
                    </div>
                    <div>
                    <input type="password" className="password" id="password" placeholder='Password' value={password}
  onChange={(e) => setPassword(e.target.value)} />
                        <hr />
                    </div><div>
                    <input type="password" className="confirmpassword" id="confirmpassword" placeholder='Confirm Password' value={confirmPassword}
  onChange={(e) => setConfirmPassword(e.target.value)} />
                        <hr />
                    </div>
                </div>
                <div className="msg container d-flex flex-column align-items-start">
                    <p id="error">{error}</p>
                    <p id="success">{success}</p>
                    <button type="submit" id='btn' onClick={handleSubmit}>Sign Up</button>  
                </div>
                
            </div>
        </form>
    </div>
  )
}

export default SignUpForm