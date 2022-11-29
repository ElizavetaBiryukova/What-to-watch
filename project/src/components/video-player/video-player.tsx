import { useRef } from 'react';

type VideoPlayerProps = {
  src: string;
  posterImage: string;
}

function VideoPlayer({ src, posterImage }: VideoPlayerProps): JSX.Element {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  return (
    <video autoPlay muted src={src} poster={posterImage} ref={videoRef}></video>
  );
}

export default VideoPlayer;
