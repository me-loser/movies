import AllRoutes from "./AllRoutes";
import { Background } from "./components/threejs/Background";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Background />
      <AllRoutes />
    </div>
  );
}

export default App;
