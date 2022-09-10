import { ReactNode, useEffect, useState } from 'react';

interface Props {
  audioSrc: string;
  children?: ReactNode;
}

function AudioControl({ audioSrc, children }: Props) {
  const [isAudioPlayed, setAudioPlayed] = useState<boolean>(false);
  const [audio, setAudio] = useState<HTMLAudioElement>();

  useEffect(() => {
    if (!audio) {
      return;
    }

    audio.addEventListener('ended', () => {
      setAudioPlayed(false);
    });

    if (isAudioPlayed) {
      audio.play();
    } else {
      audio.pause();
    }

    return () => {
      audio.removeEventListener('ended', () => {
        setAudioPlayed(false);
      });
    };
  }, [audio, isAudioPlayed, audioSrc]);

  const handlePlayClick = () => {
    if (!audio) {
      setAudio(new Audio(audioSrc));
    }
    setAudioPlayed(true);
  };

  const handlePauseClick = () => {
    setAudioPlayed(false);
  };

  return (
    <div onClick={isAudioPlayed ? handlePauseClick : handlePlayClick}>
      {children}
    </div>
  );
}

export default AudioControl;
