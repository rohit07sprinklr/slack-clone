import { useState } from 'react';
import './login.css';
import { postLogin } from '../../httpServices/httpService';
import { populateStorage } from '../../utils/utils';

export default function Login() {
  const [formState, setFormState] = useState<{
    email: string;
    password: string;
  }>({ email: '', password: '' });

  const handlePasswordChange = (e: any) => {
    setFormState((val) => {
      return { ...val, password: e.target.value };
    });
  };
  const handleEmailChange = (e: any) => {
    setFormState((val) => {
      return { ...val, email: e.target.value };
    });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    postLogin(formState.email, formState.password)
      .then((tokenResponse) => {
        const token = tokenResponse.token;
        populateStorage('token', token);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="login_container">
      <form className="login_form">
        <div className="login_header">
          <img src="assets/logo.png"></img>
          Slack
        </div>
        <label htmlFor="email">Email address</label>
        <input
          className="login_input"
          name="email"
          type="email"
          value={formState.email}
          onChange={handleEmailChange}
          autoFocus
        ></input>
        <label htmlFor="password">Password</label>
        <input
          className="login_input"
          name="password"
          type="password"
          value={formState.password}
          onChange={handlePasswordChange}
        ></input>
        <button
          className="button"
          id="login_submit"
          type="submit"
          onClick={handleSubmit}
        >
          Sign In
        </button>
      </form>
    </div>
  );
}
