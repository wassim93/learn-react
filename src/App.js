import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Stats } from "./components/Stats";
import { Charts } from "./components/Charts";
import { Revenues } from "./components/Revenues";
import { Dashboard } from "./components/Dashboard";
import { ProtectedComponent } from "./components/ProtectedComponent";
import { Unauthorized } from "./components/Unauthorized";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="dashboard" element={<Dashboard />}>
          <Route path="revenues" element={<Revenues />} />
          <Route path="stats" element={<Stats />} />
          <Route path="charts" element={<Charts />} />
        </Route> */}
        <Route
          path="/protected"
          element={
            <ProtectedComponent>
              <Home />
            </ProtectedComponent>
          }
        />
        <Route path="/unauthorized" element={<Unauthorized />} />
        {/* <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
