import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllHistory } from "../app/actions/historyActions";
import { AddCard } from "../components/AddCard";
import HistoryItem from "../components/HistoryItem";

export const HistoryPage = () => {
  const { history, loading } = useSelector((state) => state.history);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllHistory());
  }, []);
  if (loading) {
    return (
      <div className="flex w-full mt-[40vh] justify-center items-center text-4xl font-bold text-gray-400">
        Loading...
      </div>
    );
  }
  if (history.length === 0) {
    return (
      <div className="flex w-full mt-[40vh] justify-center items-center text-4xl font-bold text-gray-400">
        No History Found
      </div>
    );
  }
  return (
    <div className="flex flex-col items-center gap-4 py-4">
      {history.map((history) => (
        <HistoryItem history={history} />
      ))}
    </div>
  );
};
