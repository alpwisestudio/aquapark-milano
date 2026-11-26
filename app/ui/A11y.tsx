"use client";

import { useEffect, useState } from "react";

const COOKIE_POLICY = "https://www.iubenda.com/privacy-policy/12373529/cookie-policy";

type Prefs = { zoom: 0 | 1 | 2; contrast: boolean; links: boolean; still: boolean; font: boolean };
const DEFAULTS: Prefs = { zoom: 0, contrast: false, links: false, still: false, font: false };
const KEY = "acq-a11y";

function apply(p: Prefs) {
  const r = document.documentElement;
  r.classList.toggle("a11y-zoom-1", p.zoom === 1);
  r.classList.toggle("a11y-zoom-2", p.zoom === 2);
  r.classList.toggle("a11y-contrast", p.contrast);
  r.classList.toggle("a11y-links", p.links);
  r.classList.toggle("a11y-still", p.still);
  r.classList.toggle("a11y-font", p.font);
  const v = document.querySelector<HTMLVideoElement>(".hero__video");
  if (v && p.still) v.pause();
}

const toggles: { key: Exclude<keyof Prefs, "zoom">; label: string; hint: string }[] = [
  { key: "contrast", label: "Contrasto alto", hint: "Testi e bordi più netti" },
  { key: "links", label: "Sottolinea i link", hint: "Riconosci subito cosa è cliccabile" },
  { key: "still", label: "Ferma le animazioni", hint: "Anche il video in alto" },
  { key: "font", label: "Carattere leggibile", hint: "Lettere più larghe e distanziate" },
];

export default function A11y() {
  const [open, setOpen] = useState<"a11y" | "privacy" | null>(null);
  const [prefs, setPrefs] = useState<Prefs>(DEFAULTS);
  const [stats, setStats] = useState(false);

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(KEY) || "null");
      if (saved) setPrefs({ ...DEFAULTS, ...saved });
      setStats(localStorage.getItem(KEY + "-stats") === "1");
    } catch {}
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const update = (change: (p: Prefs) => Prefs) => {
    setPrefs((prev) => {
      const next = change(prev);
      try { localStorage.setItem(KEY, JSON.stringify(next)); } catch {}
      return next;
    });
  };
  useEffect(() => apply(prefs), [prefs]);

  return (
    <div className="dock">
      <div className={`dock__panel${open === "a11y" ? " is-open" : ""}`} id="a11y-panel" role="dialog" aria-label="Accessibilità" inert={open !== "a11y"}>
        <p className="dock__title">Accessibilità</p>
        <div className="dock__row">
          <span>Dimensione testo</span>
          <div className="dock__steps" role="group" aria-label="Dimensione testo">
            {(["A", "A+", "A++"] as const).map((l, i) => (
              <button key={l} type="button" aria-pressed={prefs.zoom === i} onClick={() => update((p) => ({ ...p, zoom: i as Prefs["zoom"] }))}>{l}</button>
            ))}
          </div>
        </div>
        {toggles.map((t) => (
          <label className="dock__row dock__toggle" key={t.key}>
            <span>{t.label}<small>{t.hint}</small></span>
            <button
              type="button"
              role="switch"
              className="switch"
              aria-checked={prefs[t.key]}
              aria-label={t.label}
              onClick={() => update((p) => ({ ...p, [t.key]: !p[t.key] }))}
            />
          </label>
        ))}
        <button type="button" className="dock__reset ulink" onClick={() => update(() => DEFAULTS)}>Ripristina le impostazioni</button>
      </div>

      <div className={`dock__panel${open === "privacy" ? " is-open" : ""}`} id="privacy-panel" role="dialog" aria-label="Preferenze privacy" inert={open !== "privacy"}>
        <p className="dock__title">Preferenze privacy</p>
        <div className="dock__row dock__toggle">
          <span>Cookie necessari<small>Servono al sito per funzionare</small></span>
          <button type="button" role="switch" className="switch" aria-checked="true" aria-label="Cookie necessari, sempre attivi" disabled />
        </div>
        <div className="dock__row dock__toggle">
          <span>Statistiche<small>Ci aiutano a capire cosa migliorare</small></span>
          <button
            type="button"
            role="switch"
            className="switch"
            aria-checked={stats}
            aria-label="Cookie statistici"
            onClick={() => { setStats(!stats); try { localStorage.setItem(KEY + "-stats", !stats ? "1" : "0"); } catch {} }}
          />
        </div>
        <a className="dock__reset ulink" href={COOKIE_POLICY} target="_blank" rel="noopener">Leggi la cookie policy</a>
      </div>

      <div className="dock__btns">
        <button
          type="button"
          className={`dock__btn${open === "privacy" ? " is-active" : ""}`}
          aria-label="Preferenze privacy"
          aria-expanded={open === "privacy"}
          aria-controls="privacy-panel"
          onClick={() => setOpen(open === "privacy" ? null : "privacy")}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <circle cx="12" cy="8" r="5" />
            <path d="M9.4 11.5h5.2L16 22H8z" />
          </svg>
        </button>
        <button
          type="button"
          className={`dock__btn${open === "a11y" ? " is-active" : ""}`}
          aria-label="Opzioni di accessibilità"
          aria-expanded={open === "a11y"}
          aria-controls="a11y-panel"
          onClick={() => setOpen(open === "a11y" ? null : "a11y")}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <circle cx="12" cy="3.6" r="2.4" />
            <path d="M3.5 7.2l.6-1.9L12 7.6l7.9-2.3.6 1.9-5.9 1.9v4.2l2.6 8.1-1.9.6L12 15.2l-3.3 6.8-1.9-.6 2.6-8.1V9.1z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
