import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './Profile.jsx';
import List from './List.jsx';
import CounterS from "./MyButton.jsx"
import CounterTg from './CounterToge.jsx';
import NavBar from './NavBar.jsx';
import './App.css'
export default function MyApp() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/List" element={<List />} />
        <Route path="/CounterS" element={<CounterS />} />
        <Route path="/CounterTg" element={<CounterTg/>} />
      </Routes>
    </Router>
  );
}
