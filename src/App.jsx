import React, { useState } from "react";
import VideoList from "./VideoList";
import VideoPlayer from "./VideoPlayer";
import videoData from "./videoData";

const App = () => {
  const [videos] = useState(videoData);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [customUrl, setCustomUrl] = useState("");

  const handleSelect = (video) => {
    const index = videos.findIndex((v) => v.id === video.id);
    setCurrentIndex(index);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  const handlePlayCustomUrl = () => {
    if (customUrl) setCurrentIndex(-1);
  };

  const currentVideo =
    currentIndex >= 0
      ? videos[currentIndex]
      : { url: customUrl, length: "N/A", description: "Custom Video" };

  const currentDate = new Date().toLocaleDateString();

  return (
    <>
    <div className=" bg-gray-500 h-screen">
      <div className="w-full bg-amber-500 h-auto px-4 py-2 flex justify-between">
        <h1 className="font-bold text-blue-500 text-2xl">
          Dori UX Interview <span className="text-white">Sushnat Ishwe</span>
        </h1>
        <h1 className="font-bold text-blue-500 text-2xl">
          Today date <span className="text-white">{currentDate}</span>
        </h1>
      </div>

      <div className="flex flex-col md:flex-row gap-6 p-6">
        <div className="w-full md:w-1/3 border bg-white p-4">
          <VideoList videos={videos} onSelect={handleSelect} />
        </div>

        <div className="flex-1 border bg-white p-4">
          <h2 className="text-2xl font-semibold mb-4">
            {currentIndex >= 0 ? videos[currentIndex].title : "Custom Video"}
          </h2>
          <VideoPlayer
            video={currentVideo}
            onNext={handleNext}
            onPrev={handlePrev}
          />
        </div>
      </div>

      <div className="w-full p-4 flex justify-between items-center gap-4">
        <input
          type="text"
          placeholder="Video URL"
          value={customUrl}
          onChange={(e) => setCustomUrl(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handlePlayCustomUrl()}
          className="flex-grow border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={handlePlayCustomUrl}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Play
        </button>

        <div className="relative group">
          <button className="w-8 h-8 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center">
            i
          </button>
          <div className="absolute bottom-full mb-2 hidden group-hover:block bg-black text-white text-sm rounded px-2 py-1 whitespace-nowrap">
            {currentVideo.length} - {currentVideo.description}
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default App;
