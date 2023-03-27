import React, { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCard, getAllCards, updateCard } from "../app/actions/cardsActions";
import { errorToast, infoToast, successToast } from "../services/toast";

export const EditCard = () => {
  const card = useSelector((state) => state.cards.editingCard);
  const dispatch = useDispatch();
  const { buckets } = useSelector((state) => state.buckets);
  const nameRef = useRef(null);
  const bucketRef = useRef(null);
  const linkRef = useRef(null);
  const linkTypeRef = useRef(null);
  useEffect(() => {
    if (nameRef) {
      nameRef.current.value = card?.name;
    }
    if (bucketRef) {
      bucketRef.current.value = card?.bucketName;
    }
    if (linkTypeRef) {
      linkTypeRef.current.value = card?.linkType;
    }
    if (linkRef) {
      linkRef.current.value = card?.link;
    }
  }, [card]);
  const handleEditCard = () => {
    if (nameRef.current.value === "") {
      infoToast("Name empty");
      return;
    }
    if (bucketRef.current.value === "") {
      infoToast("Bucket empty");
      return;
    }
    if (linkTypeRef.current.value === "") {
      infoToast("Link type empty");
      return;
    }
    if (linkRef.current.value === "") {
      infoToast("Link empty");
      return;
    }

    dispatch(
      updateCard({
        id: card?.id,
        data: {
          name: nameRef.current.value,
          bucketName: bucketRef.current.value,
          linkType: linkTypeRef.current.value,
          link: linkRef.current.value,
        },
      })
    )
      .then(() => {
        successToast(`${nameRef.current.value} card updated`);
      })
      .catch((err) => {
        errorToast(`Error updating ${nameRef.current.value} card`);
      });
  };
  return (
    <div className="flex flex-col gap-4">
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Card Name</span>
        </label>
        <input
          type="text"
          ref={nameRef}
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
      </div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Bucket</span>
        </label>
        <select className="select select-bordered" ref={bucketRef} required>
          <option disabled value="">
            Pick one
          </option>
          {buckets.map((bucket) => (
            <option key={bucket.id} value={bucket.name}>
              {bucket.name}
            </option>
          ))}
        </select>
      </div>

      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Link type</span>
        </label>
        <select className="select select-bordered" ref={linkTypeRef} required>
          <option disabled value="">
            Pick one
          </option>
          <option value="audio"> Audio </option>
          <option value="video"> Video </option>
        </select>
      </div>

      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Video / Audio Link</span>
        </label>
        <input
          ref={linkRef}
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
          required
        />
      </div>
      <div className="form-control w-full max-w-xs">
        <button onClick={handleEditCard} className="btn btn-sm">
          Update
        </button>
      </div>
    </div>
  );
};

// name
// link
// bucket
