import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import { useState } from 'react';
import { Checkout } from './Checkout';

export default function App() {
  let [response, setResponse] = useState<any>({});
  const handleClick = (e: any) => {
    console.log(e);
    fetch('/ping')
      .then(res => res.json())
      .then(json => {
        setResponse(json);
        console.log(json);
      });
  };
  return (
    <PayPalScriptProvider
      options={{
        'client-id': 'AbZEz7Y2Qd7pxBNKvIVMSXr4GYHBGwR60sAriXFCN4jqzyNHS3KsOsNCOpzR9vMqZfvxBKK-jw3aTkWa',
        'merchant-id': 'PHH9YUA5U8734',
      }}
    >
      <div>
        <button onClick={handleClick}>ping</button>
        <pre>{JSON.stringify(response)}</pre>
        <Checkout />
      </div>
    </PayPalScriptProvider>
  );
}

// export const serverClient = new ApolloClient({
//   uri: 'https://localhost:4000/graphql',
//   cache: new InMemoryCache(),
//   headers: {
//     'x-forwarded-proto': 'https',
//   },
// });

// const link = createHttpLink({
//   uri: 'https://localhost:4000/graphql',
//   credentials: 'include',
// });
// export const serverClient = new ApolloClient({
//   cache: new InMemoryCache(),
//   link,
// });
