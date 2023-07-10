import React from 'react';
import YouTube from 'react-youtube';

export default function YouTubeVideo({ data: { videoId } }) {

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <>
      <div class='w-full flex justify-center'>
        <YouTube videoId={videoId} opts={opts} />;
      </div>
    </>
  )
}