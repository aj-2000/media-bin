import { Routes, Route } from "react-router-dom";
import { CardsPage } from "./pages/CardsPage";
import { HistoryPage } from "./pages/HistoryPage";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CardsPage />} />
        <Route path="/history" element={<HistoryPage />} />
      </Routes>
    </div>
  );
}

export default App;
