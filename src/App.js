import "./App.css";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createBrowserHistory } from "history";
import { store } from "./data/configureStore";
import RoutePath from './routers/RoutePath';

const history = createBrowserHistory();

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router history={history}>
          <RoutePath />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
