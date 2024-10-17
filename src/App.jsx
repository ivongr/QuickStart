
import { BrowserRouter as Router, Route, Link, Routes }
  from "react-router-dom";

import Profile from "./Profile.jsx"
import './index.css'

export default function MyApp() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/profile"
          element={Profile} />
        

      </Routes>
      <div className="list">
        <ul>
          <li> <Link to="/profile">Ejemplo 1</Link> </li>

        </ul>
      </div>
    </Router>
    </>
  );
}
