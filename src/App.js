import Router from "./config/Router";
import { Provider } from "react-redux";
import { store } from "./redux";
import { CssBaseline } from "@mui/material";

function App() {

  return (
    <Provider store={store}>
      <CssBaseline />
      <Router />
    </Provider>
  )
}

export default App;
