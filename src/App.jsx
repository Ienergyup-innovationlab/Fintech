import SplashScreen from "./components/splashScreen";
import Login from "./components/login";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SplashScreen />} />

        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
