import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import { CardsPage } from "./pages/CardsPage";
import { HistoryPage } from "./pages/HistoryPage";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App h-screen w-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<CardsPage />} />
        <Route path="/history" element={<HistoryPage />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default App;
