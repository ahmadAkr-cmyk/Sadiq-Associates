import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaLocationDot,
  FaArrowRight,
  FaChevronDown,
  FaBars,
  FaXmark,
} from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { services, siteConfig } from "@/config/siteConfig";
import mark from "@/assets/logo-mark.png";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="group flex items-center gap-3.5" aria-label="Sadiq Associates home">
      <span className="flex h-12 w-14 items-center justify-center rounded-xl bg-card p-1 shadow-xs border border-border/60 transition-transform duration-200 group-hover:scale-105">
        <img src={mark} alt="Sadiq Associates logo" className="h-full w-full object-contain" width={300} height={202} />
      </span>
      <span className="leading-tight">
        <span className={`block font-serif text-xl font-bold tracking-tight transition-colors duration-200 ${light ? "text-navy-foreground" : "text-navy group-hover:text-gold"}`}>
          Sadiq Associates
        </span>
        <span className="mt-1 block text-[0.66rem] font-bold uppercase tracking-[0.22em] text-gold">Chartered Firm</span>
      </span>
    </Link>
  );
}

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact Us" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 30);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => setOpen(false), [path]);

  const isActive = (to: string) => (to === "/" ? path === "/" : path.startsWith(to));

  return (
    <>
      {/* Top Utility Bar with both phone numbers & professional styling */}
      <div className="bg-[#081325] text-slate-200 border-b border-white/10 text-xs">
        <div className="container-x flex h-10 items-center justify-between gap-4">
          <div className="flex items-center gap-3 sm:gap-5 flex-wrap">
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-2 text-slate-300 hover:text-gold transition-colors duration-200 font-medium tracking-wide"
            >
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gold/15 text-gold">
                <FaEnvelope className="h-2.5 w-2.5" />
              </span>
              <span>{siteConfig.email}</span>
            </a>
            <span className="hidden sm:inline-block h-3.5 w-px bg-white/20" />
            {siteConfig.phones.map((p, idx) => (
              <div key={p.tel} className="flex items-center gap-3 sm:gap-5">
                {idx > 0 && <span className="hidden md:inline-block h-3.5 w-px bg-white/20" />}
                <a
                  href={`tel:${p.tel}`}
                  className={`items-center gap-2 text-slate-300 hover:text-gold transition-colors duration-200 font-medium tracking-wide ${
                    idx === 0 ? "flex" : "hidden sm:flex"
                  }`}
                >
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gold/15 text-gold">
                    <FaPhone className="h-2.5 w-2.5" />
                  </span>
                  <span>{p.label}</span>
                </a>
              </div>
            ))}
          </div>
          <div className="hidden items-center gap-2 text-slate-300 md:flex font-medium tracking-wide text-xs">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gold/15 text-gold">
              <FaLocationDot className="h-2.5 w-2.5" />
            </span>
            <span>Sabzazar, Lahore</span>
          </div>
        </div>
      </div>

      {/* Main Navbar - accurate design preserved */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-2.5 border-b border-border/80"
            : "bg-white/95 backdrop-blur-sm py-4 border-b border-border/50"
        }`}
      >
        <div className="container-x flex items-center justify-between">
          <Logo />
          <nav className="hidden items-center gap-1.5 lg:flex" aria-label="Main">
            {nav.map((n) =>
              n.to === "/services" ? (
                <div key={n.to} className="group relative">
                  <Link
                    to="/services"
                    className={`relative flex items-center gap-1.5 px-4 py-2 rounded-full text-[15px] font-semibold transition-all duration-200 ${
                      isActive(n.to)
                        ? "text-navy bg-gold-soft font-bold"
                        : "text-slate-700 hover:text-navy hover:bg-slate-100/70"
                    }`}
                  >
                    {n.label}
                    <FaChevronDown className="h-3 w-3 transition-transform duration-200 group-hover:rotate-180" />
                  </Link>
                  <div className="invisible absolute left-1/2 top-full w-96 -translate-x-1/2 translate-y-2 pt-3 opacity-0 transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    <div className="rounded-2xl border border-border/70 bg-card p-3 shadow-lift backdrop-blur-md">
                      <div className="px-3 py-1.5 text-[0.7rem] font-bold uppercase tracking-wider text-muted-foreground">
                        Our Specialized Services
                      </div>
                      <div className="mt-1 space-y-1">
                        {services.map((s) => (
                          <Link
                            key={s.slug}
                            to="/services/$slug"
                            params={{ slug: s.slug }}
                            className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm text-foreground/85 transition-all duration-150 hover:bg-gold-soft hover:text-navy group/item"
                          >
                            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-secondary text-gold transition-colors group-hover/item:bg-gold group-hover/item:text-gold-foreground">
                              <s.icon className="h-3.5 w-3.5" />
                            </span>
                            <span className="font-medium text-xs sm:text-sm">{s.title}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={n.to}
                  to={n.to}
                  className={`relative px-4 py-2 rounded-full text-[15px] font-semibold transition-all duration-200 ${
                    isActive(n.to)
                      ? "text-navy bg-gold-soft font-bold"
                      : "text-slate-700 hover:text-navy hover:bg-slate-100/70"
                  }`}
                >
                  {n.label}
                </Link>
              ),
            )}
          </nav>
          <div className="flex items-center gap-3">
            <Button asChild variant="gold" size="xl" className="hidden md:inline-flex rounded-full shadow-xs hover:shadow-soft">
              <Link to="/contact">
                Book a Consultation <FaArrowRight className="h-3.5 w-3.5" />
              </Link>
            </Button>
            <button
              onClick={() => setOpen(true)}
              className="rounded-xl p-2.5 text-navy hover:bg-slate-100 transition-colors lg:hidden"
              aria-label="Open menu"
            >
              <FaBars className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-[60] bg-navy-deep/60 backdrop-blur-xs"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.aside
              className="fixed right-0 top-0 z-[70] flex h-full w-[86%] max-w-sm flex-col overflow-y-auto bg-card p-6 shadow-2xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 260 }}
              aria-label="Mobile menu"
            >
              <div className="flex items-center justify-between border-b border-border/60 pb-4">
                <Logo />
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="rounded-lg p-2 text-navy hover:bg-slate-100 transition-colors"
                >
                  <FaXmark className="h-5 w-5" />
                </button>
              </div>
              <nav className="mt-6 flex flex-col gap-1.5">
                {nav.map((n) => (
                  <Link
                    key={n.to}
                    to={n.to}
                    className={`rounded-xl px-4 py-3 font-semibold text-base transition-colors ${
                      isActive(n.to) ? "bg-gold-soft text-navy font-bold" : "text-foreground/80 hover:bg-slate-50"
                    }`}
                  >
                    {n.label}
                  </Link>
                ))}
                <div className="mt-3 rounded-2xl bg-slate-50/80 p-3 border border-border/40">
                  <div className="px-2 py-1 text-[0.68rem] font-bold uppercase tracking-wider text-muted-foreground">Services</div>
                  <div className="mt-1 flex flex-col gap-1">
                    {services.map((s) => (
                      <Link
                        key={s.slug}
                        to="/services/$slug"
                        params={{ slug: s.slug }}
                        className="rounded-lg px-2 py-1.5 text-xs font-medium text-foreground/75 hover:bg-white hover:text-navy transition-colors"
                      >
                        {s.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </nav>

              <div className="mt-6 border-t border-border/60 pt-4">
                <div className="flex flex-col gap-2.5 text-xs text-muted-foreground mb-4">
                  {siteConfig.phones.map((p) => (
                    <a key={p.tel} href={`tel:${p.tel}`} className="flex items-center gap-2 font-semibold text-navy">
                      <FaPhone className="h-3 w-3 text-gold" /> {p.label}
                    </a>
                  ))}
                  <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2">
                    <FaEnvelope className="h-3 w-3 text-gold" /> {siteConfig.email}
                  </a>
                </div>
                <Button asChild variant="gold" size="xl" className="w-full rounded-full">
                  <Link to="/contact">
                    Book a Consultation <FaArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </Button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
