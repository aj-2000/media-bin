import React, { useEffect, useState } from "react";
import { FcMusic, FcVideoFile } from "react-icons/fc";
import { BiPlay, BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { getAllCards, removeCard } from "../app/actions/cardsActions";

const Card = ({ card }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex gap-2 items-center border-[1px] border-base-200 max-w-md rounded shadow-sm shadow-base-100 bg-primary">
      <div className="flex items-center justify-center p-4 pr-2">
        {card.linkType === "audio" ? (
          <FcMusic size={50} />
        ) : (
          <FcVideoFile size={50} />
        )}
      </div>
      <div className="flex flex-col gap-4 p-4 pl-2">
        <div className="flex flex-col gap-2">
          <div className="text-xl font-bold">{card?.name}</div>
          <div className="text-md font-bold">{card?.bucketName}</div>
        </div>

        <div className="flex justify-between items-center gap-2">
          <button className="btn btn-sm gap-2">
            <BiPlay size={25} />
            <span>Play</span>
          </button>
          <button className="btn btn-sm gap-2">
            <BiEdit size={20} />
            <span>Edit</span>
          </button>
          <button
            onClick={() => {
              dispatch(removeCard(card?.id)).then(() => {
                dispatch(getAllCards());
              });
            }}
            className="btn btn-sm gap-2"
          >
            <MdDelete size={20} />
            <span>Delete</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
