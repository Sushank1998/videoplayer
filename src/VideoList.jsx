import React from "react";

const VideoList = ({ videos, onSelect }) => (
  <div className="flex flex-col gap-4">
    {videos.map((video) => (
      
      <div
        key={video.id}
        onClick={() => onSelect(video)}
        className="relative w-52 cursor-pointer rounded overflow-hidden shadow hover:scale-105 transition-transform"
      >
        <img src={video.thumbnail} alt={video.title} className="w-full h-32 object-cover" />
        <div className="absolute bottom-0 w-full bg-gray-500 bg-opacity-55 text-white text-sm px-2 py-1 flex justify-between">
          {video.title}
          <h1>i</h1>
        </div>
      </div>
    ))}
  </div>
);

export default VideoList;
