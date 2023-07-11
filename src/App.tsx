import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";

//Redux
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
