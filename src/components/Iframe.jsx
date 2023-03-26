import React, { useState, useEffect, useRef } from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
const Iframe = () => {
  const iframeLink = useSelector((state) => state.cards.iframeLink);

  return (
    <div className=" border-2 border-base-200 rounded shadow-sm shadow-base-100 mt-4">
      <video src={iframeLink} autoPlay />
    </div>
  );
};

export default Iframe;
// file:///Users/aj2000/Movies/2023-03-25%2022-36-20.mkv
