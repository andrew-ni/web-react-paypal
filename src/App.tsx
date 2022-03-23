import { Paypal } from './Paypal';

function App() {
  const handleClick = (e: any) => {
    console.log(e);
    fetch('/ping').then(res => res.json()).then(json => console.log(json));
  }
  return (
    <div>
      <button onClick={handleClick}>ping</button>
      <Paypal />
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

// const link = createHttpLink({
//   uri: 'https://localhost:4000/graphql',
//   credentials: 'include',
// });
// export const serverClient = new ApolloClient({
//   cache: new InMemoryCache(),
//   link,
// });
