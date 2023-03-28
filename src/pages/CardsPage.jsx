import React from "react";
import { useSelector } from "react-redux";

import Card from "../components/Card";

export const CardsPage = () => {
  const { cards, loading } = useSelector((state) => state.cards);

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
