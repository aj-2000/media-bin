import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllHistory } from "../app/actions/historyActions";
import HistoryItem from "../components/HistoryItem";
import { errorToast, successToast } from "../services/toast";

export const HistoryPage = () => {
  const { history, loading } = useSelector((state) => state.history);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllHistory())
      .then(() => {
        successToast("All history loaded");
      })
      .catch((err) => {
        errorToast("Can not load history.");
      });
  }, []);
  if (loading) {
    return (
      <div className="flex w-full mt-[40vh] justify-center items-center text-4xl font-bold text-gray-400">
        Loading...
      </div>
    );
  }
  if (!loading && history.length === 0) {
    return (
      <div className="flex w-full mt-[40vh] justify-center items-center text-4xl font-bold text-gray-400">
        No History Found
      </div>
    );
  }
  if (!loading) {
    return (
      <div className="flex flex-col items-center gap-4 p-4 md:p-8">
        {history.map((history) => (
          <HistoryItem key={history.id} history={history} />
        ))}
      </div>
    );
  }
};
