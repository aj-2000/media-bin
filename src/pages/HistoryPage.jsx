import React from "react";
import { useDispatch, useSelector } from "react-redux";
import HistoryItem from "../components/HistoryItem";

export const HistoryPage = () => {
  const { history, loading } = useSelector((state) => state.history);
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
      <div className="md:p-8 flex flex-col items-center gap-4 p-4">
        {history.map((history) => (
          <HistoryItem key={history.id} history={history} />
        ))}
      </div>
    );
  }
};
