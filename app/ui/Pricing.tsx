"use client";

import { useState } from "react";
import { SHOP_URL, tickets } from "../content";

export default function Pricing() {
  const [online, setOnline] = useState(true);
  const [flip, setFlip] = useState(false);

  const toggle = () => {
    setFlip(true);
    window.setTimeout(() => {
      setOnline((o) => !o);
      setFlip(false);
    }, 220);
  };

  return (
    <>
      <div className="block__head">
        <div>
          <p className="eyebrow">Biglietti · listino 2026</p>
          <h2 className="h2">Online paghi un euro in meno. <em>In cassa il prezzo pieno.</em></h2>
        </div>
        <div className="pricing__switch">
          <span>In cassa</span>
          <span className="switch-wrap">
            <button
              type="button"
              role="switch"
              className="switch"
              aria-checked={online}
              aria-label="Mostra i prezzi online"
              onClick={toggle}
            />
          </span>
          <span style={{ color: online ? "var(--ink)" : undefined }}>Online</span>
        </div>
      </div>

      <div className="plans">
        {tickets.map((t, i) => {
          const price = online ? t.online : t.cassa;
          return (
            <article key={t.name} className={`plan${t.featured ? " plan--feat" : ""}`} data-reveal style={{ ["--k" as string]: i }}>
              {t.featured && <span className="badge-save plan__flag">Per quattro</span>}
              <h3>{t.name}</h3>
              <p className="plan__who">{t.who}</p>
              <p className={`plan__price${flip ? " is-flip" : ""}`} aria-live="polite">
                <span className="num">{price}</span>
                <span className="cur">€</span>
              </p>
              <p className="plan__alt">{online ? `${t.cassa} € in cassa` : `${t.online} € comprando online`}</p>
              <p className="plan__note">{t.note}</p>
              <a className={`btn${t.featured ? " btn--sun" : ""}`} href={SHOP_URL}>
                {t.cta}
              </a>
            </article>
          );
        })}
      </div>
    </>
  );
}
