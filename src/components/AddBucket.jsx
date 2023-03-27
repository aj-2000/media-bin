import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { addBucket } from "../app/actions/bucketsActions";
import { errorToast, infoToast, successToast } from "../services/toast";

export const AddBucket = () => {
  const bucketNameRef = useRef();
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col gap-4">
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Bucket Name</span>
        </label>
        <input
          ref={bucketNameRef}
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
          required
        />
      </div>
      <div className="form-control w-full max-w-xs">
        <button
          onClick={() => {
            if (bucketNameRef.current.value.trim() !== "") {
              dispatch(
                addBucket({
                  name: bucketNameRef.current.value.trim(),
                })
              )
                .then(() => {
                  successToast(`${bucketNameRef.current.value} bucket added`);
                  bucketNameRef.current.value = "";
                })
                .catch((err) => {
                  errorToast(
                    `Error adding ${bucketNameRef.current.value.trim()} bucket`
                  );
                });
            } else {
              infoToast("Bucket name cannot be empty");
            }
          }}
          className="btn btn-sm"
        >
          Add
        </button>
      </div>
    </div>
  );
};

// name
// link
// bucket
