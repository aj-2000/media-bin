import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAllCards } from "../app/actions/cardsActions";
import Card from "../components/Card";
import { errorToast, successToast } from "../services/toast";

export const CardsPage = () => {
  const dispatch = useDispatch();
  const { cards, loading } = useSelector((state) => state.cards);
  useEffect(() => {
    dispatch(getAllCards())
      .then(() => {
        successToast("All cards loaded");
      })
      .catch((err) => {
        errorToast("Can not load cards");
      });
  }, []);
  if (loading) {
    return (
      <div className="flex w-full mt-[40vh] justify-center items-center text-4xl font-bold text-gray-400">
        Loading...
      </div>
    );
  }
  if (!loading && cards.length === 0) {
    return (
      <div className="flex w-full mt-[40vh] justify-center items-center text-4xl font-bold text-gray-400">
        No Cards Found
      </div>
    );
  }
  if (!loading) {
    return (
      <div className="md:p-8 flex flex-wrap items-center justify-center gap-8 p-4">
        {cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    );
  }
};
