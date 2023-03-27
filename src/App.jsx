import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import { CardsPage } from "./pages/CardsPage";
import { HistoryPage } from "./pages/HistoryPage";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllBuckets } from "./app/actions/bucketsActions";
import { errorToast, successToast } from "./services/toast";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllBuckets())
      .then(() => {
        successToast("All buckets loaded");
      })
      .catch((err) => {
        errorToast("Can not load buckets");
      });
  }, []);
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
