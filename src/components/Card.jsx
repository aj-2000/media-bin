import React from "react";
import { FcMusic, FcVideoFile } from "react-icons/fc";
import { BiPlay, BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { removeCard } from "../app/actions/cardsActions";
import { EditCard } from "./EditCard";
import { addHistory } from "../app/actions/historyActions";
import moment from "moment";
import Iframe from "./Iframe";

import { setEditingCart, setIframeLink } from "../app/features/cardsSlice";
import { errorToast, successToast } from "../services/toast";

const Card = ({ card }) => {
  const dispatch = useDispatch();
  const handleAddHistory = () => {
    dispatch(
      addHistory({
        cardName: card.name,
        linkType: card.linkType,
        link: card.link,
        bucketName: card.bucketName,
        playedAt: moment(),
      })
    );
  };
  return (
    <div className="flex gap-2 items-center border-[1px] border-base-200 max-w-md rounded shadow-sm shadow-base-100 bg-base-300">
      <div className="flex items-center justify-center p-4 pr-2">
        {card.linkType === "audio" ? (
          <FcMusic size={50} />
        ) : (
          <FcVideoFile size={50} />
        )}
      </div>
      <div className="flex flex-col gap-4 p-4 pl-2">
        <div className="flex flex-col gap-2">
          <div className="text-2xl font-bold text-secondary">{card?.name}</div>
          <div className="text-md font-bold">{card?.bucketName}</div>
        </div>

        <div className="flex justify-between items-center gap-2">
          <label
            htmlFor="iframe-modal"
            onClick={() => {
              handleAddHistory();
              dispatch(setIframeLink(card.link));
            }}
            className="btn btn-sm gap-2"
          >
            <BiPlay className="hidden md:block" size={25} />
            <span>Play</span>
          </label>

          <label
            onClick={() => {
              dispatch(setEditingCart(card));
            }}
            htmlFor="edit-card-modal"
            className="btn gap-2 btn-sm"
          >
            <BiEdit className="hidden md:block" size={20} />
            <span>Edit</span>
          </label>
          <button
            onClick={() => {
              dispatch(removeCard(card?.id))
                .then(() => {
                  successToast("Card deleted");
                })
                .catch(() => {
                  errorToast("Error deleting card");
                });
            }}
            className="btn btn-sm gap-2"
          >
            <MdDelete className="hidden md:block" size={20} />
            <span>Delete</span>
          </button>
        </div>
      </div>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="iframe-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative ">
          <label
            onClick={() => {
              dispatch(setIframeLink(""));
            }}
            htmlFor="iframe-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2 "
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">iFrame</h3>
          <Iframe linkType={card.linkType} />
        </div>
      </div>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="edit-card-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative  max-w-sm">
          <label
            onClick={() => {
              dispatch(setEditingCart(null));
            }}
            htmlFor="edit-card-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2 "
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Edit Card</h3>
          <EditCard card={card} />
        </div>
      </div>
    </div>
  );
};

export default Card;
