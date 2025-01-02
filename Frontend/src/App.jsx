import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OTP from "./components/PhoneSignUp";
import Upload from "./pages/Upload";
import VotePage from "./components/VotePage";

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<OTP />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/upload/vote" element={<VotePage />} />
        </Routes>
    </Router>
  );
}

export default App;
