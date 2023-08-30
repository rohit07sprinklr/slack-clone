//components
import { useCallback, useState } from 'react';

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
type SignupErrorStateType = LoginErrorStateType & { name: boolean };

function SignupForm(props: FormProps) {
  const [formState, setFormState] = useState<SignupFormStateType>({
    email: '',
    password: '',
    name: ''
  });
  const [formError, setFormError] = useState<SignupErrorStateType>({
    email: false,
    password: false,
    name: false
  });
  const [error, setError] = useState<string | null>(null);

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
    let validationFlag = true;
    Object.entries(formState).forEach(([key, value]) => {
      if (value.trim().length === 0) {
        setFormError((val) => ({ ...val, [key]: true }));
        validationFlag = false;
      }
    });
    return validationFlag;
  };
  const handleInputFocus = useCallback(() => {
    setError(null);
    Object.entries(formState).forEach(([key, value]) => {
      setFormError((val) => ({ ...val, [key]: false }));
    });
  }, []);

  const handleToggleClick = () => {
    props.toggleFormCallback();
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!validateFunction()) return;
    postSignup(formState.email, formState.password, formState.name)
      .then((tokenResponse) => {
        const token = tokenResponse.token;
        populateStorage(AUTH_KEY, token);
        window.location.reload();
      })
      .catch((err) => {
        setError(err.message);
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
        error={formError.name}
        onFocus={handleInputFocus}
        autoFocus
      />
      <Input
        label="Email"
        value={formState.email}
        handleChange={handleEmailChange}
        type="email"
        error={formError.email}
        onFocus={handleInputFocus}
      />
      <Input
        label="Password"
        value={formState.password}
        handleChange={handlePasswordChange}
        onFocus={handleInputFocus}
        error={formError.password}
        type="password"
      />
      {error ? (
        <div className="error-container">
          <img src="assets/icons/warning.svg" className="error-icon" />
          {error}
        </div>
      ) : (
        <></>
      )}
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
        </span>
        Instead
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
  const [error, setError] = useState<string | null>(null);

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
    let validationFlag = true;
    Object.entries(formState).forEach(([key, value]) => {
      if (value.trim().length === 0) {
        setFormError((val) => ({ ...val, [key]: true }));
        validationFlag = false;
      }
    });
    return validationFlag;
  };
  const handleInputFocus = useCallback(() => {
    setError(null);
    Object.entries(formState).forEach(([key, value]) => {
      setFormError((val) => ({ ...val, [key]: false }));
    });
  }, []);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!validateFunction()) return;
    postLogin(formState.email, formState.password)
      .then((tokenResponse) => {
        const token = tokenResponse.token;
        populateStorage(AUTH_KEY, token);
        window.location.reload();
      })
      .catch((err) => {
        setError(err.message);
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
        onFocus={handleInputFocus}
        autoFocus
      />
      <Input
        label="Password"
        value={formState.password}
        handleChange={handlePasswordChange}
        type="password"
        onFocus={handleInputFocus}
        error={formError.password}
      />
      {error ? (
        <div className="error-container">
          <img src="assets/icons/warning.svg" className="error-icon" />
          {error}
        </div>
      ) : (
        <></>
      )}
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
