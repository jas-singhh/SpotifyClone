import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/assets";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
  const audioRef = useRef();
  const seekBg = useRef();
  const seekBar = useRef();
  const volumeBar = useRef();

  const [track, setTrack] = useState(songsData[0]); // first song will be the default track
  const [isPlaying, setIsPlaying] = useState(false);
  const [time, setTime] = useState({
    currentTime: {
      minutes: 0,
      seconds: 0,
    },
    duration: {
      minutes: 0,
      seconds: 0,
    },
  });
  const [volume, setVolume] = useState(0.5);

  const play = () => {
    audioRef.current.play();
    setIsPlaying(true);
  };

  const pause = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  const playTrackId = async (id) => {
    await setTrack(songsData[id]);
    await audioRef.current.play();
    setIsPlaying(true);
  };

  const previous = async () => {
    if (track.id > 0) {
      await setTrack(songsData[track.id - 1]);
      await audioRef.current.play();
    } else {
      await setTrack(songsData[songsData.length - 1]);
      await audioRef.current.play();
    }

    setIsPlaying(true);
  };

  const next = async () => {
    if (track.id < songsData.length - 1) {
      await setTrack(songsData[track.id + 1]);
      await audioRef.current.play();
    } else {
      await setTrack(songsData[0]);
      await audioRef.current.play();
    }

    setIsPlaying(true);
  };

  const seekSong = async (e) => {
    audioRef.current.currentTime =
      (e.nativeEvent.offsetX / seekBg.current.offsetWidth) *
      audioRef.current.duration;
  };

  useEffect(() => {
    setTimeout(() => {
      audioRef.current.ontimeupdate = () => {
        seekBar.current.style.width =
          (Math.floor(audioRef.current.currentTime) /
            Math.floor(audioRef.current.duration)) *
            100 +
          "%";

        setTime({
          currentTime: {
            minutes: Math.floor(audioRef.current.currentTime / 60),
            seconds: Math.floor(audioRef.current.currentTime % 60),
          },
          duration: {
            minutes: Math.floor(audioRef.current.duration / 60),
            seconds: Math.floor(audioRef.current.duration % 60),
          },
        });
      };
    }, 1000);
  }, [audioRef]);

  const contextValue = {
    audioRef,
    seekBg,
    seekBar,
    track,
    setTrack,
    isPlaying,
    setIsPlaying,
    time,
    setTime,
    play,
    pause,
    playTrackId,
    previous,
    next,
    seekSong,
  };

  return (
    <PlayerContext.Provider value={contextValue}>
      {props.children}
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;
