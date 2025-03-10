import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/index.css";

const client = new ApolloClient({
  uri: import.meta.env.VITE_GRAPHQL_CMS,
  cache: new InMemoryCache(),
});
ReactDOM.createRoot(document.getElementById("root")).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
