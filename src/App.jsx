import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import { CardsPage } from "./pages/CardsPage";
import { HistoryPage } from "./pages/HistoryPage";
function App() {
  return (
    <div className="App h-screen w-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<CardsPage />} />
        <Route path="/history" element={<HistoryPage />} />
      </Routes>
    </div>
  );
}

export default App;
