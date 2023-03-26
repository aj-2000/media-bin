import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllHistory } from "../app/actions/historyActions";
import { AddCard } from "../components/AddCard";
import HistoryItem from "../components/HistoryItem";

export const HistoryPage = () => {
  const history = useSelector((state) => state.history.history);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllHistory());
  }, []);
  return (
    <div className="flex flex-col items-center gap-4 py-4">
      {history.map((history) => (
        <HistoryItem history={history} />
      ))}
    </div>
  );
};
