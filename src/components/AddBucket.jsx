import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { addBucket, getAllBuckets } from "../app/actions/bucketsActions";

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
            if (bucketNameRef.current.value !== "") {
              dispatch(
                addBucket({
                  name: bucketNameRef.current.value,
                })
              ).then(() => {
                bucketNameRef.current.value = "";
                alert("bucket added successfully");
                dispatch(getAllBuckets());
              });
            } else {
              alert("Bucket name cannot be empty");
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
