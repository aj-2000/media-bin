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
import Card from "../components/Card";
export const CardsPage = () => {
  const dispatch = useDispatch();
  const { buckets, loading: bucketsLoading } = useSelector(
    (state) => state.buckets
  );
  const { cards, loading: cardsLoading } = useSelector((state) => state.cards);
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
  if (bucketsLoading || cardsLoading) {
    return (
      <div className="flex w-full mt-[40vh] justify-center items-center text-4xl font-bold text-gray-400">
        Loading...
      </div>
    );
  }
  if (cards.length === 0) {
    return (
      <div className="flex w-full mt-[40vh] justify-center items-center text-4xl font-bold text-gray-400">
        No Cards Found
      </div>
    );
  }
  return (
    <div className="flexflex-wrap justify-center items-center gap-8 md:p-8">
      {cards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
};
