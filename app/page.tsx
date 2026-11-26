import Image from "next/image";
import {
  EMAIL, EMAIL_GRUPPI, MAPS_URL, PHONE, REVIEWS, SHOP_URL,
  attractions, food, foodPhotos, groups, hero, routes, season, services, stats, ticketsExtra,
} from "./content";
import A11y from "./ui/A11y";
import Attractions from "./ui/Attractions";
import Effects from "./ui/Effects";
import Nav from "./ui/Nav";
import HeroVideo from "./ui/HeroVideo";
import Pricing from "./ui/Pricing";

export default function Home() {
  return (
    <>
      <a className="skip" href="#main">Vai al contenuto</a>
      <Effects />
      <A11y />
      <Nav />

      <main id="main">
        {/* HERO — solo il video del sito ufficiale */}
        <section className="hero hero--video" id="top">
          <h1 className="sr-only">Acquatica Park, il parco acquatico di Milano a Quinto Romano</h1>
          <HeroVideo src={hero.video} poster={hero.photo.src} />
        </section>

        <div className="marquee" aria-hidden="true">
          <div className="marquee__track">
            {[...attractions, ...attractions].map((a, i) => <span key={i}>{a.name}</span>)}
          </div>
        </div>

        {/* NUMERI + ATTRAZIONI */}
        <section className="block" id="attrazioni" aria-labelledby="attr-h">
          <div className="wrap">
            <div className="stats" data-reveal aria-label="Il parco in numeri">
              {stats.map((s) => (
                <div className="stat" key={s.label}>
                  <div className="stat__v">
                    {s.prefix && <span className="pre">{s.prefix}</span>}
                    <span data-count={s.value}>{s.value.toLocaleString("it-IT")}</span>
                    <small>{s.unit}</small>
                  </div>
                  <p className="stat__l">{s.label}</p>
                </div>
              ))}
            </div>
            <div style={{ marginTop: "clamp(96px, 12vw, 160px)" }} id="attr-h">
              <Attractions />
            </div>
          </div>
        </section>

        {/* BIGLIETTI */}
        <section className="block block--light" id="biglietti">
          <div className="wrap">
            <Pricing />
            <dl className="extras" data-reveal>
              {ticketsExtra.map((x) => (
                <div key={x.name}><dt>{x.name}</dt><dd>{x.price}</dd></div>
              ))}
            </dl>
            <p className="reviews">
              <strong>{REVIEWS.score}/5</strong>
              <span>
                su {REVIEWS.count} recensioni di chi ha comprato su{" "}
                <a className="ulink" href={REVIEWS.href} target="_blank" rel="noopener">{REVIEWS.source}</a>
              </span>
            </p>
          </div>
        </section>

        {/* LA GIORNATA */}
        <section className="block" id="giornata">
          <div className="wrap">

            <h2 className="h2">Quattro posti dove mangiare, e un prato per il tuo picnic.</h2>
            <div className="day">
              <div className="day__photos">
                {foodPhotos.map((f, i) => (
                  <figure key={i} data-reveal style={{ ["--k" as string]: i }}>
                    <Image src={f.photo} alt={f.alt} sizes="(max-width: 960px) 50vw, 330px" placeholder="blur" />
                  </figure>
                ))}
              </div>
              <div data-reveal>
                <p className="list-title">Ristoro</p>
                <ul className="list">
                  {food.map((f) => <li key={f.name}><b>{f.name}</b><span>{f.text}</span></li>)}
                </ul>
                <p className="list-title">Servizi</p>
                <ul className="list">
                  {services.map((s) => <li key={s.name}><b>{s.name}</b><span>{s.text}</span></li>)}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* COME ARRIVARE */}
        <section className="block block--light" id="arrivare">
          <div className="wrap">
            <p className="eyebrow">Come arrivare</p>
            <h2 className="visit__addr">
              Via Gaetano Airaghi,
              <span>Quinto Romano, Milano</span>
            </h2>
            <div className="routes">
              {routes.map((r, i) => (
                <div className="route" key={r.stop} data-reveal style={{ ["--k" as string]: i }}>
                  <div className="route__line">
                    <span className="route__m" style={{ background: r.color }}>{r.line}</span>
                    {r.stop}
                  </div>
                  <div className="route__path" style={{ ["--k" as string]: i }} aria-hidden="true" />
                  <p className="route__bus" style={{ margin: 0 }}>poi bus <b>{r.bus}</b> fino a Quinto Romano</p>
                </div>
              ))}
            </div>
            <p className="visit__car">In auto: Tangenziale Ovest, uscita San Siro / Fiera Milano. Parcheggio al parco o gratuito a pochi passi.</p>
            <div className="visit__actions">
              <a className="btn" href={MAPS_URL} target="_blank" rel="noopener">Apri le indicazioni</a>
              <a className="link-play" href={PHONE.href}>
                <span className="dot" aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M6.6 10.8a15.1 15.1 0 006.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 013 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1z" /></svg>
                </span>
                <span>Chiama {PHONE.label}</span>
              </a>
            </div>
          </div>
        </section>

        {/* FESTE E GRUPPI */}
        <section className="block" id="feste">
          <div className="wrap">
            <div className="groups" data-reveal>
              <div>

                <h2 className="h2">La tua festa a bordo vasca, con lo staff di animazione.</h2>
                <p className="lead">Mandaci il modulo almeno 48 ore prima: ti rispondiamo noi con la conferma.</p>
                <div style={{ marginTop: 32 }}>
                  <a className="btn btn--sun" href="#contatti">Scrivi per la tua festa</a>
                </div>
              </div>
              <ul>
                {groups.items.map((g) => <li key={g}>{g}</li>)}
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap">
          <div className="footer__grid">
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.png" alt="Acquatica Park" width={110} height={71} style={{ marginBottom: 18 }} />
              <p>Via Gaetano Airaghi, Quinto Romano, Milano</p>
            </div>
            <div>
              <h4>Orari</h4>
              <p>{season.dates}</p>
              <p>{season.hours}, {season.pools}</p>
              <p>{season.closed}</p>
            </div>
            <div>
              <h4 id="contatti">Contatti</h4>
              <a className="ulink" href={PHONE.href}>{PHONE.label}</a><br />
              <a className="ulink" href={`mailto:${EMAIL}`}>{EMAIL}</a><br />
              <a className="ulink" href={`mailto:${EMAIL_GRUPPI}`}>{EMAIL_GRUPPI}</a>
            </div>
            <div>
              <h4>Biglietti</h4>
              <a className="ulink" href={SHOP_URL}>Compra online</a><br />
              <a className="ulink" href="#biglietti">Listino 2026</a>
            </div>
          </div>
          <div className="footer__bottom">
            <span><span className="preview">Anteprima</span>Mock non ufficiale, non indicizzato. Foto: acquaticapark.it (Jody Parisi).</span>
            <span>Proposta di Alpwise Studio</span>
          </div>
        </div>
      </footer>
    </>
  );
}
