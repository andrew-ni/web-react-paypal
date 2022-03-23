import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  useLazyQuery
} from '@apollo/client';
import { useState } from 'react';
import { Login } from './Login';
import { Register } from './Register';
import { ME, normalizeMeData } from './repositories/session';

function App() {
  const [email, setEmail] = useState('');
  const [userId, setUserId] = useState('');
  const [getMe, { loading, data }] = useLazyQuery(ME);

  const handleClick = () => {
    getMe().then(data => {
      const { email: e, userId: u } = normalizeMeData(data);
      setEmail(e);
      setUserId(u);
    });
  };

  return (
    <div>
      <Login />
      <Register />
      <button onClick={handleClick}>Me</button>
      <p>
        {email} {userId}
      </p>
      <pre>
        [{JSON.stringify(loading)}][{JSON.stringify(data)}]
      </pre>
    </div>
  );
}

export default App;

// export const serverClient = new ApolloClient({
//   uri: 'https://localhost:4000/graphql',
//   cache: new InMemoryCache(),
//   headers: {
//     'x-forwarded-proto': 'https',
//   },
// });

const link = createHttpLink({
  uri: 'https://localhost:4000/graphql',
  credentials: 'include',
});
export const serverClient = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});
