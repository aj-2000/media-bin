import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCard } from "../app/actions/cardsActions";
import { errorToast, infoToast, successToast } from "../services/toast";

export const AddCard = () => {
  const dispatch = useDispatch();
  const { buckets } = useSelector((state) => state.buckets);
  const nameRef = useRef();
  const bucketRef = useRef();
  const linkRef = useRef();
  const linkTypeRef = useRef();
  const handleAddCard = () => {
    if (nameRef.current.value.trim() === "") {
      infoToast("Name empty");
      return;
    }
    if (bucketRef.current.value.trim() === "") {
      infoToast("Bucket empty");
      return;
    }
    if (linkTypeRef.current.value.trim() === "") {
      infoToast("Link type empty");
      return;
    }
    if (linkRef.current.value.trim() === "") {
      infoToast("Link empty");
      return;
    }

    dispatch(
      addCard({
        name: nameRef.current.value.trim(),
        bucketName: bucketRef.current.value.trim(),
        linkType: linkTypeRef.current.value.trim(),
        link: linkRef.current.value.trim(),
      })
    )
      .then(() => {
        successToast(`${nameRef.current.value.trim()} Card added`);
        nameRef.current.value = "";
        bucketRef.current.value = "";
        linkRef.current.value = "";
      })
      .catch((err) => {
        errorToast(`Error adding ${nameRef.current.value.trim()} card`);
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
          <option disabled selected value={""}>
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
        <button onClick={handleAddCard} className="btn btn-sm">
          Add
        </button>
      </div>
    </div>
  );
};

// name
// link
// bucket
