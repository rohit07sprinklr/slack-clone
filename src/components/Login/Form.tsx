//components
import { useState } from 'react';

//style
import './login.css';

//utils
import { postLogin, postSignup } from '../../httpServices/httpService';
import { populateStorage } from '../../utils/utils';
import { AUTH_KEY } from '../../utils/constants';
import { Input } from './Input';

//types
type FormProps = {
  toggleFormCallback: () => void;
};
type LoginFormStateType = {
  email: string;
  password: string;
};
type SignupFormStateType = LoginFormStateType & { name: string };
type LoginErrorStateType = {
  email: boolean;
  password: boolean;
};
type SignupErrorStateType = LoginErrorStateType & { name: string };

function SignupForm(props: FormProps) {
  const [formState, setFormState] = useState<SignupFormStateType>({
    email: '',
    password: '',
    name: ''
  });

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
  const handleNameChange = (e: any) => {
    setFormState((val) => {
      return { ...val, name: e.target.value };
    });
  };

  const validateFunction = () => {
    return Object.entries(formState).some(
      ([key, value]) => value.trim().length === 0
    );
  };

  const handleToggleClick = () => {
    props.toggleFormCallback();
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (validateFunction()) return;
    postSignup(formState.email, formState.password, formState.name)
      .then((tokenResponse) => {
        const token = tokenResponse.token;
        populateStorage(AUTH_KEY, token);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form className="login_form">
      <div className="login_header">
        <img src="assets/logo.png"></img>
        Slack
      </div>
      <Input
        label="Name"
        value={formState.name}
        handleChange={handleNameChange}
        autoFocus
      />
      <Input
        label="Email"
        value={formState.email}
        handleChange={handleEmailChange}
        type="email"
      />
      <Input
        label="Password"
        value={formState.password}
        handleChange={handlePasswordChange}
        type="password"
      />
      <button
        className="button"
        id="login_submit"
        type="submit"
        onClick={handleSubmit}
      >
        Sign Up
      </button>
      <span id="login-form-footer">
        <span id="toggle-login" onClick={handleToggleClick}>
          <u>Sign In</u>
        </span>{' '}
        instead
      </span>
    </form>
  );
}

function LoginForm(props: FormProps) {
  const [formState, setFormState] = useState<LoginFormStateType>({
    email: '',
    password: ''
  });
  const [formError, setFormError] = useState<LoginErrorStateType>({
    email: false,
    password: false
  });

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

  const handleToggleClick = () => {
    props.toggleFormCallback();
  };
  const validateFunction = () => {
    Object.entries(formState).forEach(([key, value]) => {
      if (value.trim().length === 0) {
        setFormError((val) => ({ ...val, [key]: true }));
        return true;
      }
    });
    return false;
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (validateFunction()) return;
    postLogin(formState.email, formState.password)
      .then((tokenResponse) => {
        const token = tokenResponse.token;
        populateStorage(AUTH_KEY, token);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form className="login_form">
      <div className="login_header">
        <img src="assets/logo.png"></img>
        Slack
      </div>
      <Input
        label="Email"
        value={formState.email}
        handleChange={handleEmailChange}
        type="email"
        error={formError.email}
        autoFocus
      />
      <Input
        label="Password"
        value={formState.password}
        handleChange={handlePasswordChange}
        type="password"
        error={formError.password}
      />
      <button
        className="button"
        id="login_submit"
        type="submit"
        onClick={handleSubmit}
      >
        Sign In
      </button>
      <span id="login-form-footer">
        Don't have an account?{' '}
        <span id="toggle-login" onClick={handleToggleClick}>
          <u>Sign Up</u>
        </span>
      </span>
    </form>
  );
}

export { LoginForm, SignupForm };
