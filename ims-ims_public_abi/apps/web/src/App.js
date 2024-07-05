import logo from './logo.svg';
import './App.css';
import AppRoutes from "./routes/AppRoutes";
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";


const client = new ApolloClient(
    {
      uri: 'http://localhost:8080/ims/graphql/http/v1.0.0',
      cache:new InMemoryCache()
    }
);

function App() {
  return (
      <ApolloProvider client={client}>
          <AppRoutes/>
      </ApolloProvider>

  );
}

export default App;
