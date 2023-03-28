import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import { CardsPage } from "./pages/CardsPage";
import { HistoryPage } from "./pages/HistoryPage";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllBuckets } from "./app/actions/bucketsActions";
import { errorToast, successToast } from "./services/toast";
import { getAllCards } from "./app/actions/cardsActions";
import { getAllHistory } from "./app/actions/historyActions";
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
    dispatch(getAllCards())
      .then(() => {
        successToast("All cards loaded");
      })
      .catch((err) => {
        errorToast("Can not load cards");
      });
    dispatch(getAllHistory())
      .then(() => {
        successToast("All history loaded");
      })
      .catch((err) => {
        errorToast("Can not load history.");
      });
  }, []);
  return (
    <div className="App w-screen h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<CardsPage />} />
        <Route path="/history" element={<HistoryPage />} />
      </Routes>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
