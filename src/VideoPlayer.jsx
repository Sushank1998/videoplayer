import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = ({
  video,
  onNext,
  onPrev,
  
}) => {
  return (
    <div className="p-4 w-full">
   

      <div className="w-full">
        <ReactPlayer url={video.url} controls width="100%" height="360px" />
      </div>

      <div className="flex justify-between mt-4">
        <button
          onClick={onPrev}
          className="border border-gray-400 px-4 py-2 rounded hover:bg-gray-100"
        >
          Prev Video
        </button>
        <button
          onClick={onNext}
          className="border border-gray-400 px-4 py-2 rounded hover:bg-gray-100"
        >
          Next Video
        </button>
      </div>
    </div>
  );
};

export default VideoPlayer;
