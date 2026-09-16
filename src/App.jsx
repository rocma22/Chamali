import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { CAT_GRADIENTS, MENU_DATA } from "./data/menu";
import { CATEGORY_NAMES, COPY, LANGUAGES, TAG_NAMES } from "./data/i18n";
import "./language.css";

const PHONE = "06 87 46 30 37";
const EMAIL = "contact@coinrose-restaurant.ma";
const LanguageContext = createContext({ language: "fr", setLanguage: () => {}, t: key => key });

function useLanguage() {
  return useContext(LanguageContext);
}

function Icon({ children, size = 20 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{children}</svg>;
}

function Header({ theme, setTheme }) {
  const { language, setLanguage, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("nav-locked", open);
    return () => document.body.classList.remove("nav-locked");
  }, [open]);

  useEffect(() => {
    const closeLanguageMenu = event => {
      if (!event.target.closest(".language-switcher")) setLanguageOpen(false);
    };
    const closeOnEscape = event => {
      if (event.key === "Escape") setLanguageOpen(false);
    };
    document.addEventListener("click", closeLanguageMenu);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("click", closeLanguageMenu);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  const links = [
    ["#histoire", t("history")],
    ["#menu", t("menu")],
    ["#experience", t("experience")],
    ["#avis", t("reviews")],
    ["#reserver", t("contact")]
  ];

  return (
    <>
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <div className="container header-row">
          <a href="#top" className="brand" onClick={() => setOpen(false)} aria-label={t("home")}>
            <img src="/coin-rose-logo.webp" alt="Coin Rose" />
            <span className="brand-name">Coin <em>Rose</em></span>
          </a>

          <nav className={`main-nav ${open ? "is-open" : ""}`} aria-label={t("menu")}>
            <button className="nav-close" onClick={() => setOpen(false)} aria-label={t("closeMenu")}>
              <Icon><path d="M6 6l12 12M18 6 6 18" /></Icon>
            </button>
            {links.map(([href, label]) => (
              <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
            ))}
          </nav>

          <div className="header-tools">
            <div className={`language-switcher ${languageOpen ? "is-open" : ""}`}>
              <button className="language-trigger" type="button" onClick={event => { event.stopPropagation(); setLanguageOpen(value => !value); }} aria-expanded={languageOpen} aria-haspopup="listbox" aria-label={t("language")}>
                <span className="language-globe" aria-hidden="true">◉</span><span>{LANGUAGES.find(option => option.id === language)?.short}</span><span className="language-chevron" aria-hidden="true">⌄</span>
              </button>
              <div className="language-menu" role="listbox" aria-label={t("language")}>
                {LANGUAGES.map(option => <button className={`language-option ${language === option.id ? "is-active" : ""}`} key={option.id} type="button" role="option" aria-selected={language === option.id} onClick={() => { setLanguage(option.id); setLanguageOpen(false); }}><span>{option.short}</span><span>{option.label}</span>{language === option.id && <span className="language-check" aria-hidden="true">✓</span>}</button>)}
              </div>
            </div>
            <button className="theme-toggle" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} aria-label={t("changeTheme")}>
              {theme === "dark" ? "☀️" : "🌙"}
            </button>
            <a className="header-cta" href="#reserver">{t("reserve")} <span className="desktop-only">{t("table")}</span></a>
            <button className="nav-toggle" onClick={() => setOpen(true)} aria-expanded={open} aria-label={t("openMenu")}>
              <Icon size={26}><path d="M4 6h16M4 12h16M4 18h16" /></Icon>
            </button>
          </div>
        </div>
      </header>
      <div className={`nav-overlay ${open ? "is-open" : ""}`} onClick={() => setOpen(false)} />
    </>
  );
}

function Hero() {
  const { t } = useLanguage();
  return (
    <section className="hero" id="top">
      <div className="hero-deco" aria-hidden="true">
        <span className="orb orb-a" /><span className="orb orb-b" /><span className="spark">✦</span>
      </div>
      <div className="container hero-inner">
        <img className="hero-logo" src="/coin-rose-logo.webp" alt="" />
        <span className="hero-eyebrow">{t("taste")}</span>
        <h1>{t("heroTitle")}</h1>
        <p className="lede">{t("heroText")}</p>
        <div className="hero-actions">
          <a href="#menu" className="btn btn-primary"><Icon><path d="M4 19V5a2 2 0 0 1 2-2h9l5 5v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z"/><path d="M14 3v5h5"/></Icon>{t("discover")}</a>
          <a href="#reserver" className="btn btn-ghost">{t("reserveTable")}</a>
        </div>
        <div className="hero-trust">
          <span>✦ {t("seasonal")}</span><span>✦ {t("homemade")}</span><span>✦ {t("rating")}</span>
        </div>
      </div>
    </section>
  );
}

function SectionHead({ kicker, title, children }) {
  return <div className="section-head"><span className="kicker">{kicker}</span><h2>{title}</h2>{children && <p>{children}</p>}</div>;
}

function About() {
  const { t } = useLanguage();
  return (
    <section className="about section-pad" id="histoire">
      <div className="container about-grid">
        <div className="about-art">
          <div className="art-ring ring-1" /><div className="art-ring ring-2" />
          <img src="/coin-rose-logo.webp" alt="Coin Rose" />
          <span className="art-script">{t("homemadeShort")}</span>
        </div>
        <div className="about-copy">
          <span className="kicker">{t("aboutKicker")}</span>
          <h2>{t("aboutTitle")}</h2>
          <p>{t("about1")}</p>
          <p>{t("about2")}</p>
          <p>{t("about3")}</p>
          <div className="about-stats">
            <div className="stat"><b>2016</b><span>{t("opening")}</span></div>
            <div className="stat"><b>24</b><span>{t("dishes")}</span></div>
            <div className="stat"><b>4.8/5</b><span>{t("average")}</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DishCard({ item, cat, index }) {
  const { language } = useLanguage();
  return (
    <article className="dish" style={{ animationDelay: `${Math.min(index * 35, 300)}ms` }}>
      <div className="dish-image" style={{ background: item.image ? "none" : CAT_GRADIENTS[cat.id] }}>
        {item.image ? <img src={item.image} alt={item.name} loading="lazy" /> : <><div className="grain" /><span className="dish-icon">{cat.icon}</span></>}
        <span className="dish-price-tag">{item.price}</span>
      </div>
      <div className="dish-body">
        <div className="dish-name">{item.name}</div>
        <p className="dish-desc">{item.description}</p>
        {item.tags?.length > 0 && <div className="dish-tags">{item.tags.map(tag => <span key={tag} className={`badge ${tag === "veg" ? "veg" : tag === "spice" ? "spice" : ""}`}>{TAG_NAMES[language][tag] || tag}</span>)}</div>}
      </div>
    </article>
  );
}

function Menu() {
  const { language, t } = useLanguage();
  const [active, setActive] = useState("all");
  const [query, setQuery] = useState("");
  const menuData = MENU_DATA;

  const total = menuData.reduce((n, c) => n + c.items.length, 0);
  const visibleCategories = useMemo(() => {
    const cats = active === "all" ? menuData : menuData.filter(c => c.id === active);
    if (!query.trim()) return cats;
    const q = query.toLowerCase();
    return cats.map(cat => ({ ...cat, items: cat.items.filter(i => `${i.name} ${i.description}`.toLowerCase().includes(q)) })).filter(c => c.items.length);
  }, [active, query, menuData]);

  const count = visibleCategories.reduce((n, c) => n + c.items.length, 0);

  return (
    <section className="menu-section section-pad" id="menu">
      <div className="container">
          <SectionHead kicker={t("menuKicker")} title={t("menuTitle")}>
          {t("menuText")}
        </SectionHead>

        <div className="menu-controls">
          <div className="menu-toolbar">
            <button className={`cat-pill ${active === "all" ? "is-active" : ""}`} onClick={() => setActive("all")}>✨ {t("all")} ({total})</button>
            {menuData.map(cat => <button key={cat.id} className={`cat-pill ${active === cat.id ? "is-active" : ""}`} onClick={() => setActive(cat.id)}><span>{cat.icon}</span>{CATEGORY_NAMES[language][cat.id] || cat.name} ({cat.items.length})</button>)}
          </div>
          <label className="menu-search">
            <Icon size={18}><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></Icon>
            <input value={query} onChange={e => setQuery(e.target.value)} placeholder={t("search")} aria-label={t("search")} />
          </label>
        </div>

        <div className="menu-count">{count} {count > 1 ? t("dishesShown") : t("dishShown")}</div>
        <div className="menu-groups">
          {visibleCategories.map(cat => (
            <div className="menu-fadeout" key={cat.id}>
              <h3 className="menu-group-title"><span>{cat.icon}</span>{CATEGORY_NAMES[language][cat.id]}<span className="rule" /></h3>
              <div className="menu-grid">{cat.items.map((item, i) => <DishCard key={`${cat.id}-${item.name}`} item={item} cat={cat} index={i} />)}</div>
            </div>
          ))}
        </div>
        {!visibleCategories.length && <div className="empty-state">{t("noDish")}</div>}
        <p className="menu-footnote">{t("allergies")}</p>
      </div>
    </section>
  );
}

function Experience() {
  const { t } = useLanguage();
  const cards = [
    ["🌿", t("freshTitle"), t("freshText")],
    ["🤍", t("serviceTitle"), t("serviceText")],
    ["🥂", t("roomTitle"), t("roomText")]
  ];
  return <section className="experience section-pad" id="experience"><div className="container">
    <SectionHead kicker={t("experienceKicker")} title={t("experienceTitle")} />
    <div className="exp-grid">{cards.map(([icon, title, text]) => <article className="exp-card" key={title}><div className="exp-icon">{icon}</div><h3>{title}</h3><p>{text}</p></article>)}</div>
  </div></section>;
}

function Testimonials() {
  const { t } = useLanguage();
  const reviews = [
    ["S", "Sanaa B.", t("regular"), "Le tagine aux pruneaux m'a rappelé celui de ma grand-mère, en plus raffiné. Une adresse qu'on garde pour soi."],
    ["Y", "Yassine K.", t("birthday"), "Ambiance chaleureuse, service impeccable et le fondant au chocolat mérite le détour à lui seul."],
    ["L", "Laila M.", t("business"), "On a réservé pour un déjeuner d'affaires, on est repartis avec une nouvelle cantine préférée."]
  ];
  return <section className="section-pad" id="avis"><div className="container">
    <SectionHead kicker={t("reviewsKicker")} title={t("reviewsTitle")} />
    <div className="testimonials-grid">{reviews.map(([initial, name, role, quote]) => <article className="quote-card" key={name}><span className="quote-mark">“</span><p>{quote}</p><div className="quote-who"><div className="quote-avatar">{initial}</div><div><b>{name}</b><span>{role}</span></div></div></article>)}</div>
  </div></section>;
}

function Reservation() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  function submit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return <section className="reserve section-pad" id="reserver"><div className="container reserve-grid">
    <div>
      <SectionHead kicker={t("find")} title={t("reserveTitle")} />
      <div className="info-block"><h3>{t("address")}</h3><p>Snack Coin Rose Chamali<br />Kénitra, Maroc</p><div className="map-embed"><iframe title="Localisation de Snack Coin Rose Chamali" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4037.0412310401352!2d-6.55867887394626!3d34.24619649773816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda75790b76590dd%3A0xbc2be08b51d42891!2sSNACK%20COIN%20ROSE%20CHAMALI!5e0!3m2!1sen!2sma!4v1789584810473!5m2!1sen!2sma" loading="lazy" referrerPolicy="strict-origin-when-cross-origin" style={{ width: "100%", height: "260px", border: 0, borderRadius: "18px" }} allowFullScreen /></div><a className="text-link" target="_blank" rel="noreferrer" href="https://www.google.com/maps/search/?api=1&query=34.24619649773816%2C-6.55867887394626">{t("map")}</a></div>
      <div className="info-block"><h3>{t("contactInfo")}</h3><p><a href={`tel:${PHONE.replaceAll(" ", "")}`}>{PHONE}</a><br /><a href={`mailto:${EMAIL}`}>{EMAIL}</a></p></div>
      <div className="info-block"><h3>{t("hours")}</h3><div className="hours-row"><span>{t("weekdays")}</span><span>12h00 – 23h00</span></div><div className="hours-row"><span>{t("weekends")}</span><span>12h00 – 00h00</span></div></div>
      <a className="header-cta" href={`tel:${PHONE.replaceAll(" ", "")}`}><span>☎</span> {t("call")}</a>
    </div>

    <div className="form-card">
      {!submitted ? <form onSubmit={submit}>
        <div className="field"><label htmlFor="name">{t("fullName")}</label><input id="name" name="name" required autoComplete="name" placeholder={t("fullName")} /></div>
        <div className="field"><label htmlFor="phone">{t("phone")}</label><input id="phone" name="phone" required type="tel" autoComplete="tel" placeholder="06 ..." /></div>
        <div className="field-row"><div className="field"><label htmlFor="date">{t("date")}</label><input id="date" name="date" required type="date" min={new Date().toISOString().split("T")[0]} /></div><div className="field"><label htmlFor="guests">{t("guests")}</label><select id="guests" name="guests" defaultValue="2"><option>{t("one")}</option><option>{t("two")}</option><option>{t("three")}</option><option>{t("four")}</option><option>{t("five")}</option></select></div></div>
        <div className="field"><label htmlFor="message">{t("message")}</label><textarea id="message" name="message" rows="4" placeholder={t("messagePlaceholder")}></textarea></div>
        <button className="btn btn-primary" type="submit">{t("confirm")} <Icon><path d="m5 12 4 4L19 6"/></Icon></button>
        <p className="form-note">{t("formNote").replace("{phone}", PHONE)}</p>
      </form> : <div className="form-success visible"><div className="success-icon">✓</div><h4>{t("submitted")}</h4><p>{t("submittedText").replace("{phone}", PHONE)}</p><a className="btn btn-primary" href={`tel:${PHONE.replaceAll(" ", "")}`}>{t("call")} <Icon><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z" /></Icon></a><button className="btn btn-ghost" onClick={() => setSubmitted(false)}>{t("another")}</button></div>}
    </div>
  </div></section>;
}

function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();
  return <footer className="site-footer"><div className="container">
    <div className="footer-top"><div><div className="footer-brand"><img src="/coin-rose-logo.webp" alt="Coin Rose" /><span className="brand-name">Coin <em>Rose</em></span></div><div className="footer-tagline">{t("tagline")}</div></div>
      <div className="footer-cols"><div className="footer-col"><h4>{t("explore")}</h4><ul><li><a href="#histoire">{t("history")}</a></li><li><a href="#menu">{t("menu")}</a></li><li><a href="#experience">{t("experience")}</a></li><li><a href="#reserver">{t("reserve")}</a></li></ul></div><div className="footer-col"><h4>{t("practical")}</h4><ul><li>Snack Coin Rose Chamali, Kénitra</li><li><a href={`tel:${PHONE.replaceAll(" ", "")}`}>{PHONE}</a></li><li>{t("openEveryDay")}</li></ul></div></div>
    </div><div className="footer-bottom"><span>© {year} Coin Rose Restaurant. {t("rights")}</span><span>{t("modern")}</span></div>
  </div></footer>;
}

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem("coinrose-theme") || "light");
  const [language, setLanguage] = useState(() => localStorage.getItem("coinrose-language") || "fr");
  const t = key => COPY[language][key] || COPY.fr[key] || key;
  useEffect(() => { document.documentElement.dataset.theme = theme; localStorage.setItem("coinrose-theme", theme); }, [theme]);
  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    localStorage.setItem("coinrose-language", language);
  }, [language]);

  return <LanguageContext.Provider value={{ language, setLanguage, t }}><Header theme={theme} setTheme={setTheme} /><main><Hero /><About /><Menu /><Experience /><Testimonials /><Reservation /></main><Footer /></LanguageContext.Provider>;
}
