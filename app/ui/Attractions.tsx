"use client";

import Image from "next/image";
import { useLayoutEffect, useRef, useState } from "react";
import { attractions, type Group } from "../content";

const filters: ("Tutte" | Group)[] = ["Tutte", "Adrenalina", "Famiglia", "Bimbi"];

export default function Attractions() {
  const [active, setActive] = useState<(typeof filters)[number]>("Tutte");
  const segRef = useRef<HTMLDivElement>(null);
  const pillRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const place = () => {
      const btn = segRef.current?.querySelector<HTMLButtonElement>('button[aria-pressed="true"]');
      const pill = pillRef.current;
      if (!btn || !pill) return;
      pill.style.width = `${btn.offsetWidth}px`;
      pill.style.transform = `translateX(${btn.offsetLeft}px)`;
    };
    place();
    window.addEventListener("resize", place);
    return () => window.removeEventListener("resize", place);
  }, [active]);

  const count = (f: (typeof filters)[number]) =>
    f === "Tutte" ? attractions.length : attractions.filter((a) => a.group === f).length;

  const visible = attractions.filter((a) => active === "Tutte" || a.group === active);
  const wideSet = new Set<string>(
    active === "Tutte" ? ["Kamikaze", "Fiume Lento", "Baby Lagoon"]
    : active === "Adrenalina" ? [visible[0].name]
    : active === "Famiglia" ? [visible[0].name, visible[visible.length - 1].name]
    : [],
  );
  const lastName = visible[visible.length - 1].name;
  let k = 0;
  return (
    <>
      <div className="block__head">
        <div>
          <p className="eyebrow">Attrazioni</p>
          <h2 className="h2">15 attrazioni d&apos;acqua, dai 19 metri del Kamikaze all&apos;acqua bassa.</h2>
        </div>
        <div className="seg" ref={segRef} role="group" aria-label="Filtra le attrazioni">
          <span className="seg__pill" ref={pillRef} aria-hidden="true" />
          {filters.map((f) => (
            <button key={f} type="button" aria-pressed={active === f} onClick={() => setActive(f)}>
              {f}<span className="n">{count(f)}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="grid-attr" key={active}>
        {attractions.map((a) => {
          const show = active === "Tutte" || a.group === active;
          const wide = show && wideSet.has(a.name);
          const last = show && a.name === lastName;
          return (
            <article
              key={a.name}
              className={`card${wide ? " card--wide" : ""}${last ? " card--last" : ""}${show ? " is-in" : " is-hidden"}`}
              style={{ ["--k" as string]: show ? k++ : 0 }}
            >
              <div className="card__img">
                <Image
                  src={a.photo}
                  alt={a.alt}
                  sizes={wide ? "(max-width: 1024px) 100vw, 840px" : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 420px"}
                  placeholder="blur"
                />
              </div>
              <div className="card__body">
                <div className="card__top">
                  <h3>{a.name}</h3>
                  <span className="card__tag">{a.group}</span>
                </div>
                <p className="card__spec">{a.spec}</p>
                <p className="card__text">{a.text}</p>
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
}
