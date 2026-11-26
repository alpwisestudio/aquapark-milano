"use client";

import { useEffect, useState } from "react";
import { PHONE, SHOP_URL, season } from "../content";

const links = [
  ["#attrazioni", "Attrazioni"],
  ["#biglietti", "Biglietti"],
  ["#giornata", "La giornata"],
  ["#arrivare", "Come arrivare"],
  ["#feste", "Feste e gruppi"],
] as const;

export default function Nav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  useEffect(() => {
    document.body.classList.toggle("menu-lock", open);
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onResize = () => window.innerWidth > 960 && setOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <>
      <header className={`nav${open ? " is-open" : ""}`}>
        <div className="wrap nav__in">
          <a href="#top" className="nav__logo" aria-label="Acquatica Park, torna all'inizio" onClick={close}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="Acquatica Park" width={187} height={120} />
          </a>
          <ul className="nav__links">
            {links.map(([href, label]) => (
              <li key={href}>
                <a className="ulink" href={href}>{label}</a>
              </li>
            ))}
          </ul>
          <a className="btn nav__cta" href={SHOP_URL}>Compra il biglietto</a>
          <button
            type="button"
            className="nav__burger"
            aria-expanded={open}
            aria-controls="menu"
            aria-label={open ? "Chiudi il menu" : "Apri il menu"}
            onClick={() => setOpen((o) => !o)}
          >
            <i aria-hidden="true" />
            <i aria-hidden="true" />
          </button>
        </div>
      </header>

      <nav id="menu" className={`menu${open ? " is-open" : ""}`} aria-label="Menu" aria-hidden={!open} inert={!open}>
        <ul>
          {links.map(([href, label], i) => (
            <li key={href} data-stagger style={{ ["--s" as string]: i }}>
              <a href={href} onClick={close}>{label}</a>
            </li>
          ))}
        </ul>
        <div className="menu__actions" data-stagger style={{ ["--s" as string]: links.length }}>
          <a className="btn" href={PHONE.href}>Chiama</a>
          <a className="btn btn--sun" href={SHOP_URL} onClick={close}>Biglietto</a>
        </div>
        <p className="menu__meta" data-stagger style={{ ["--s" as string]: links.length + 1 }}>
          Tutti i giorni {season.hours} · {PHONE.label}
        </p>
      </nav>
    </>
  );
}
