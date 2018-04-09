import React from 'react';
import YouTube from '@u-wave/react-youtube';

const YoutubeComponent = props => (
  <YouTube
    video={props.trailerId}
    width={640}
    height={480}
    style={{borderRadius: 25}}
    autoplay
    controls
  />
);

export default YoutubeComponent;
