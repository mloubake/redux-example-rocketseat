import { Provider } from "react-redux";
import Catalog from "./components/Catalog/index";
import store from "./store/index";

function App() {
  return (
    <Provider store={store}>
      <Catalog />
    </Provider>
  );
}

export default App;
