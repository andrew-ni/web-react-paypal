import { useMutation } from '@apollo/client';
import { useRef, useState } from 'react';
import { LOGIN, normalizeLoginData } from './repositories/session';

interface LoginProps {}

export const Login: React.FC<LoginProps> = () => {
  const [emailInput, setEmailInput] = useState<string>('');
  const [passwordInput, setPasswordInput] = useState<string>('');

  const [email, setEmail] = useState<string>('');
  const [userId, setUserId] = useState<string>('');

  const renderCount = useRef(0);
  renderCount.current++;
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  const [login, { data, loading, error }] = useMutation(LOGIN);

  const handleClick = () => {
    login({ variables: { email: emailInput, password: passwordInput } }).then(
      data => {
        setEmailInput('');
        setPasswordInput('');

        console.log(data);
        const { email: e, userId: u } = normalizeLoginData(data);
        setEmail(e);
        setUserId(u);
      }
    );
  };
  return (
    <>
      <p>{renderCount.current}</p>
      <pre>
        [{JSON.stringify(data)}][{JSON.stringify(loading)}][
        {JSON.stringify(error)}]
      </pre>
      <p>
        {email} / {userId}
      </p>
      <div>
        <p>LOGIN</p>
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
        <button onClick={handleClick}>Login</button>
      </div>
    </>
  );
};
