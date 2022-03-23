import { useMutation } from '@apollo/client';
import { useRef, useState } from 'react';
import { LOGIN, REGISTER } from './repositories/session';

interface RegisterProps {}

export const Register: React.FC<RegisterProps> = () => {
  const [emailInput, setEmailInput] = useState<string>('');
  const [passwordInput, setPasswordInput] = useState<string>('');

  const renderCount = useRef(0);
  renderCount.current++;
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  const [
    register,
    { data: registerData, loading: registerLoading, error: registerError },
  ] = useMutation(REGISTER);
  const [login, { data: loginData, loading: loginLoading, error: loginError }] =
    useMutation(LOGIN);

  const handleClick = () => {
    register({
      variables: { email: emailInput, password: passwordInput },
    }).then(registerData => {
      const e = emailInput;
      const p = passwordInput;
      setEmailInput('');
      setPasswordInput('');
      console.log(registerData);
      login({ variables: { email: e, password: p } }).then(loginData =>
        console.log(loginData)
      );
    });
  };
  return (
    <>
      <p>{renderCount.current}</p>
      <pre>
        [{JSON.stringify(registerData)}][{JSON.stringify(registerLoading)}][
        {JSON.stringify(registerError)}]
      </pre>
      <pre>
        [{JSON.stringify(loginData)}][{JSON.stringify(loginLoading)}][
        {JSON.stringify(loginError)}]
      </pre>
      <div>
        <input
          ref={emailInputRef}
          type="text"
          placeholder="Email"
          value={emailInput}
          onChange={e => setEmailInput(e.target.value)}
        />
        <input
          ref={passwordInputRef}
          type="text"
          placeholder="Password"
          value={passwordInput}
          onChange={e => setPasswordInput(e.target.value)}
        />
        <button onClick={handleClick}>Register</button>
      </div>
    </>
  );
};
