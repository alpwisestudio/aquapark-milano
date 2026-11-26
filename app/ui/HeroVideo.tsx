"use client";

import { useEffect, useRef, useState } from "react";

type Props = { src: string; poster: string };

/** Video a tutto schermo del sito ufficiale. Muto, in loop; con "riduci movimento" parte in pausa. */
export default function HeroVideo({ src, poster }: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      v.pause();
      setPlaying(false);
    } else {
      v.play().catch(() => setPlaying(false));
    }
  }, []);

  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) { v.play(); setPlaying(true); } else { v.pause(); setPlaying(false); }
  };

  return (
    <>
      <video
        ref={ref}
        className="hero__video"
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        autoPlay
        preload="auto"
        aria-hidden="true"
      />
      <button type="button" className="hero__pause" onClick={toggle} aria-label={playing ? "Metti in pausa il video" : "Riproduci il video"}>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" aria-hidden="true">
          {playing ? <path d="M3 1h3v12H3zM8 1h3v12H8z" /> : <path d="M3 1l10 6-10 6z" />}
        </svg>
      </button>
    </>
  );
}
