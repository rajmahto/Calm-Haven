import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Services from "./pages/Services";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Music from "./pages/Music";
import Articles from "./pages/Articles";
import Meditation from "./pages/Meditation";
import Navbar from "./components/Navbar";
import Yoga from "./pages/Yoga";
import SpiritualTherapy from "./pages/Spiritual";
import ChatAssistant from "./components/ChatAssistant";


const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);

  return (
    <Router>
      <NavWrapper isAuthenticated={isAuthenticated} />
      <Routes>
        <Route
          path="/"
          element={isAuthenticated ? <Home /> : <Navigate to="/login" />}
        />
        <Route
          path="/services"
          element={isAuthenticated ? <Services /> : <Navigate to="/login" />}
        />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route
          path="/dashboard"
          element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}
        />
        <Route path="/music" element={<Music />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/meditation" element={<Meditation />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/yoga" element={<Yoga />} />
        <Route path="/spiritual" element={<SpiritualTherapy />} />
      </Routes>
      <ChatAssistant />
    </Router>
  );
};

// ✅ Moved `useLocation()` inside `NavWrapper`
const NavWrapper = ({ isAuthenticated }) => {
  const location = useLocation();
  const hideNavbar = ["/login", "/register", "/music", "/meditation",].includes(
    location.pathname
  );
  return !hideNavbar && isAuthenticated ? <Navbar /> : null;
};

export default App;
