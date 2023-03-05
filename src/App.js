import Router from "./config/Router";
import { Provider } from "react-redux";
import { store } from "./redux";

function App() {

  return (
    <Provider store={store}>
      <Router />
    </Provider>
  )
}

export default App;
