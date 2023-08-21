import { ReactEventHandler, useState } from 'react';
import './login.css';
import { postLogin } from '../../httpServices/httpService';
import { UserDataType } from '../../types/dataTypes';
import { populateStorage } from '../../utils/utils';

export default function Login(props: any) {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = (event: any) => {
    event.preventDefault();
    postLogin(email, password)
      .then((tokenResponse) => {
        const token = tokenResponse.token;
        populateStorage('token', token);
        props.loginCallback(token);
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoFocus
        ></input>
        <label htmlFor="password">Password</label>
        <input
          className="login_input"
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
