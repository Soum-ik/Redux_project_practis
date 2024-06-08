import { Provider } from "react-redux";
import store from "./redux/store";
import Main from "./components/Main_App/Main";

function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export default App;
