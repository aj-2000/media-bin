import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBucket, getAllBuckets } from "../app/actions/bucketsActions";
import {
  addCard,
  getAllCards,
  removeCard,
  updateCard,
} from "../app/actions/cardsActions";
import { addHistory, getAllHistory } from "../app/actions/historyActions";
export const CardsPage = () => {
  const dispatch = useDispatch();
  const { buckets, loading } = useSelector((state) => state.buckets);
  useEffect(() => {
    dispatch(getAllHistory());
    dispatch(getAllBuckets());
    dispatch(getAllCards());
    dispatch(
      updateCard({
        id: 3,
        data: {
          name: "afafawf",
        },
      })
    ).then(() => {
      getAllCards();
    });
  }, []);
  return <div>CardsPage</div>;
};
