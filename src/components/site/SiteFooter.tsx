import { Link } from "@tanstack/react-router";
import { FaClock, FaEnvelope, FaLocationDot, FaPhone } from "react-icons/fa6";
import { services, siteConfig } from "@/config/siteConfig";
import logo from "@/assets/logo.png";

export function SiteFooter() {
  return (
    <footer className="bg-navy-gradient text-navy-foreground/80">
      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="inline-block rounded-2xl bg-card p-3">
            <img src={logo} alt="Sadiq Associates – Chartered Firm logo" className="h-20 w-auto" width={1091} height={607} loading="lazy" />
          </div>
          <p className="mt-5 text-sm leading-relaxed">
            Sadiq Associates is a Chartered Firm providing audit, accounting, tax and business advisory services tailored to each client.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-navy-foreground">Quick Links</h3>
          <div className="mt-2 h-px w-10 bg-gold" />
          <ul className="mt-5 space-y-2.5 text-sm">
            {([["/", "Home"], ["/services", "Services"], ["/about", "About Us"], ["/contact", "Contact"]] as const).map(([to, l]) => (
              <li key={to}><Link to={to} className="transition-colors hover:text-gold">{l}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-navy-foreground">Services</h3>
          <div className="mt-2 h-px w-10 bg-gold" />
          <ul className="mt-5 space-y-2.5 text-sm">
            {services.map((s) => (
              <li key={s.slug}><Link to="/services/$slug" params={{ slug: s.slug }} className="transition-colors hover:text-gold">{s.title}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-navy-foreground">Contact</h3>
          <div className="mt-2 h-px w-10 bg-gold" />
          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex gap-3"><FaLocationDot className="mt-1 h-3.5 w-3.5 shrink-0 text-gold" /><span>{siteConfig.address.line1}<br />{siteConfig.address.line2}</span></li>
            <li className="flex gap-3"><FaPhone className="mt-1 h-3.5 w-3.5 shrink-0 text-gold" /><span className="flex flex-col">{siteConfig.phones.map((p) => <a key={p.tel} href={`tel:${p.tel}`} className="hover:text-gold">{p.label}</a>)}</span></li>
            <li className="flex gap-3"><FaEnvelope className="mt-1 h-3.5 w-3.5 shrink-0 text-gold" /><a href={`mailto:${siteConfig.email}`} className="hover:text-gold">{siteConfig.email}</a></li>
            <li className="flex gap-3"><FaClock className="mt-1 h-3.5 w-3.5 shrink-0 text-gold" /><span>{siteConfig.officeHours}</span></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-navy-foreground/10">
        <div className="container-x py-5 text-center text-xs text-navy-foreground/60">
          © 2026 Sadiq Associates - Chartered Firm. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
