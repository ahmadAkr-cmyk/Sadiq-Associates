import { createFileRoute } from "@tanstack/react-router";
import {
  FaAward,
  FaBuildingColumns,
  FaChartLine,
  FaGears,
  FaHandshake,
  FaShieldHalved,
  FaUserTie,
} from "react-icons/fa6";
import { images, pageTitle, siteConfig } from "@/config/siteConfig";
import { IconBadge, Reveal, SectionHeading } from "@/components/site/Reveal";
import { CtaBanner, PageBanner, SkillBar } from "@/components/site/Blocks";
import { WhyChoose } from "./index";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: pageTitle("About Us") },
      { name: "description", content: "Sadiq Associates is a Chartered Firm in Lahore led by Muhammad Sadiq, offering audit, accounting, tax and advisory services." },
      { property: "og:title", content: pageTitle("About Us") },
      { property: "og:description", content: "Meet Sadiq Associates, a Chartered Firm led by Muhammad Sadiq." },
      { property: "og:url", content: "https://sadiqassociates.com/about" },
    ],
    links: [{ rel: "canonical", href: "https://sadiqassociates.com/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  const intro = [
    { icon: FaChartLine, title: "Business Growth", text: "Financial clarity that helps you plan and grow with confidence." },
    { icon: FaGears, title: "Stronger Business Processes", text: "Systems, controls and policies that make your organisation run smoothly." },
    { icon: FaBuildingColumns, title: "Financial Management", text: "Reliable reporting and advice for sound day-to-day decisions." },
  ];
  return (
    <>
      <PageBanner title="About Us" image={images.hero1} />
      <section className="pt-20 pb-8 bg-background">
        <div className="container-x grid gap-6 md:grid-cols-3">
          {intro.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.1}>
              <div className="group h-full card-premium card-hover p-8">
                <IconBadge icon={c.icon} />
                <h3 className="mt-5 text-2xl font-semibold text-navy">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="py-24">
        <div className="container-x grid items-center gap-16 lg:grid-cols-2">
          <Reveal className="relative">
            <img src={images.consulting} alt="Sadiq Associates advisory session" loading="lazy" className="relative aspect-[4/3] w-full rounded-3xl object-cover shadow-lift" width={1024} height={768} />
          </Reveal>
          <div>
            <SectionHeading align="left" eyebrow="Who We Are" title="Financial Expertise Built on Experience" text={`Sadiq Associates is a Chartered Firm led by ${siteConfig.owner}. We support businesses and individuals with audit, accounting, taxation, compliance and advisory services, always with a focus on accuracy, honesty and practical results.`} />
            <div className="mt-10 space-y-6">
              {siteConfig.skills.map((s, i) => <SkillBar key={s.label} {...s} i={i} />)}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-secondary/60 py-24">
        <div className="container-x">
          <SectionHeading eyebrow="Why Choose Us" title="What Sets Us Apart" />
          <WhyChoose items={[
            { icon: FaShieldHalved, title: "Trusted Expertise", text: "Professional standards applied to every engagement." },
            { icon: FaUserTie, title: "Experienced Team", text: "People who understand local regulation and business realities." },
            { icon: FaHandshake, title: "Client-Focused Service", text: "Responsive, clear and personal support." },
            { icon: FaAward, title: "Complete Business Support", text: "Audit, accounting, tax, compliance and advisory together." },
          ]} />
        </div>
      </section>
      <section className="py-24">
        <div className="container-x grid items-center gap-14 lg:grid-cols-[380px_1fr]">
          <Reveal>
            <div className="aspect-[4/5] overflow-hidden rounded-3xl shadow-lift border border-border/50">
              <img
                src={images.founder}
                alt="Sadiq Associates – Chartered Firm"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="eyebrow">Message from the Founder</p>
            <blockquote className="mt-5 font-serif text-3xl leading-snug text-navy md:text-4xl">“{siteConfig.founderMessage}”</blockquote>
            <div className="mt-6 h-px w-20 bg-gold" />
            <p className="mt-5 text-xl font-semibold text-navy">{siteConfig.owner}</p>
            <p className="text-sm text-gold">{siteConfig.ownerTitle}, Sadiq Associates – Chartered Firm</p>
          </Reveal>
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
