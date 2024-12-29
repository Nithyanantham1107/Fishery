import Navigater from "./Navigation/Navigater";

import { ModalPortal } from "react-native-modals";
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Navigater />
        <ModalPortal />
      </Provider>
    </>
  );
};
export default App;
