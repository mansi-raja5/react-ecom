import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";

// layouts
import MainLayout from "./layouts/MainLayout";

//pages
import Homepage from "./Pages/Homepage";
import ProductList from "./Pages/ProductList";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import ProductDetails from "./Pages/ProductDetails";
import Header from "./components/Header";

//css
import "./default.scss";

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map((message, location, path) => {
      alert(`Graphql error ${message}`);
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({
    uri: "http://localhost:4000/",
  }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

function App() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <MainLayout>
          <Router>
            <Header />
            <Routes>
              <Route exact path="/" element={<Homepage />} />
              <Route path="/:catID" element={<ProductList />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/product/:productID" element={<ProductDetails />} />
              <Route path="*" element={<Homepage />} />
            </Routes>
          </Router>
        </MainLayout>
      </ApolloProvider>
    </div>
  );
}

export default App;
