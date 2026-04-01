"use client";

import { useEffect, useState, useRef } from "react";
import { ReactLenis } from "lenis/react";
import Image from "next/image";

function useScrollReveal(threshold = 0.12) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}

const CHECK_ICON = (
  <svg
    className="mt-0.5 h-5 w-5 flex-shrink-0 text-secondary"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2.5}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.5 12.75l6 6 9-13.5"
    />
  </svg>
);

const CHECK_ICON_WHITE = (
  <svg
    className="mt-0.5 h-5 w-5 flex-shrink-0 text-white/70"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2.5}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.5 12.75l6 6 9-13.5"
    />
  </svg>
);

export default function WorkWithMePage() {
  const [heroVisible, setHeroVisible] = useState(false);
  const [showStickyBtn, setShowStickyBtn] = useState(false);

  useEffect(() => {
    setHeroVisible(true);
    const handleScroll = () => setShowStickyBtn(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const qualify = useScrollReveal();
  const session = useScrollReveal();
  const getValue = useScrollReveal();
  const transition = useScrollReveal();
  const pricing = useScrollReveal();
  const trust = useScrollReveal();
  const celeste = useScrollReveal();
  const objections = useScrollReveal();
  const finalCta = useScrollReveal();

  return (
    <ReactLenis root>
      <div className="overflow-x-hidden">
        {/* ================================================
          STICKY CTA
      ================================================ */}
        {/* <div
        className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${
          showStickyBtn
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <a
          href="https://genxrebirthmentor.setmore.com" target="_blank" rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-full bg-secondary px-6 py-3 font-dm-sans text-sm font-semibold uppercase tracking-wider text-white shadow-2xl transition-all hover:bg-cta-hover hover:-translate-y-1"
        >
          Book Your Session
        </a>
      </div> */}

        {/* ================================================
          SECTION 1: HERO
      ================================================ */}
        <section className="relative w-full overflow-hidden bg-bg-main pt-5">
          <div className="absolute top-0 right-0 h-[600px] w-[600px] rounded-full bg-accent-dark opacity-10 blur-3xl -translate-y-1/4 translate-x-1/4 pointer-events-none" />
          <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-emotional-accent opacity-15 blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />

          <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-6 pt-24 pb-16 sm:gap-12 lg:grid-cols-2 lg:gap-16 lg:px-12 lg:min-h-[90vh] lg:py-12">
            {/* LEFT: Text */}
            <div
              className={`space-y-7 transition-all duration-1000 ${
                heroVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-8 opacity-0"
              }`}
            >
              <p className="font-dm-sans text-sm font-semibold uppercase tracking-[0.2em] text-emotional-accent">
                Gen X Rebirth Mentor
              </p>
              <h1 className="font-playfair text-4xl font-bold leading-tight text-primary sm:text-5xl xl:text-6xl">
                Stop Carrying Everything Alone
                <span className="mt-2 block italic text-accent-dark">
                  It&apos;s Time to Come Back to Yourself
                </span>
              </h1>
              <p className="font-inter max-w-xl text-xl leading-relaxed text-text-secondary">
                A private 1:1 session designed to give you clarity, direction,
                and a personalized path forward.
              </p>

              {/* Price pill */}
              <div className="inline-flex flex-wrap items-center gap-2 rounded-full bg-secondary/10 px-5 py-3 sm:gap-3 sm:px-6">
                <span className="font-dm-sans text-2xl font-bold text-secondary">
                  $59
                </span>
                <span className="font-inter text-sm text-text-secondary sm:text-base">
                  Rebirth Strategy Session
                </span>
              </div>

              <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center">
                <a
                  href="https://stan.store/genxbirthmentor/p/rebirth-strategy-session-"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-secondary px-10 py-4 text-center font-dm-sans text-base font-semibold uppercase tracking-wider text-white shadow-lg transition-all duration-300 hover:bg-cta-hover hover:shadow-xl hover:-translate-y-1"
                >
                  Book Your Session
                </a>
                <a
                  href="#packages"
                  className="rounded-full border-2 border-accent-dark px-8 py-4 text-center font-dm-sans text-base font-semibold uppercase tracking-wider text-accent-dark transition-all duration-300 hover:bg-accent-dark hover:text-white hover:-translate-y-1"
                >
                  See All Packages
                </a>
              </div>

              <p className="font-inter text-sm text-text-secondary">
                No pressure. No scripts. Just clarity in 60 minutes.
              </p>
            </div>

            {/* RIGHT: Image */}
            <div
              className={`relative order-first lg:order-none transition-all duration-1000 delay-300 ${
                heroVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-8 opacity-0"
              }`}
            >
              <div className="absolute right-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-emotional-accent opacity-20 blur-3xl pointer-events-none" />
              <div className="relative z-10 mx-auto max-w-[280px] sm:max-w-sm lg:max-w-none">
                <div className="relative aspect-[3/4] sm:aspect-[4/5] overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl">
                  <Image
                    src="/images/funnel/Angelic in the Office.png"
                    alt="Celeste, Gen X Rebirth Mentor"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/15 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================
          SECTION 2: WHO THIS IS FOR
      ================================================ */}
        <section className="bg-highlight-bg py-24 sm:py-32">
          <div ref={qualify.ref} className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
              {/* Text */}
              <div
                className={`space-y-8 transition-all duration-1000 ${
                  qualify.isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
              >
                <div className="space-y-3">
                  <p className="font-dm-sans text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
                    Is This You?
                  </p>
                  <h2 className="font-playfair text-4xl font-bold text-primary sm:text-5xl">
                    This Is For You If…
                  </h2>
                </div>
                <div className="space-y-4">
                  {[
                    "You feel emotionally drained and overwhelmed no matter how much you rest",
                    "You've been in survival mode for so long it feels like your default setting",
                    "You've lost connection with yourself and who you are outside of your roles",
                    "You know something needs to change, but you don't know where to start",
                    "You're ready, truly ready, to stop putting yourself last",
                  ].map((item, i) => (
                    <div
                      key={i}
                      className={`flex items-start gap-4 rounded-xl bg-white p-5 shadow-sm transition-all duration-700 ${
                        qualify.isVisible
                          ? "translate-x-0 opacity-100"
                          : "translate-x-8 opacity-0"
                      }`}
                      style={{ transitionDelay: `${150 + i * 100}ms` }}
                    >
                      {CHECK_ICON}
                      <p className="font-inter text-lg text-text-primary">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
                <blockquote className="border-l-4 border-emotional-accent pl-6 font-cormorant text-2xl italic text-text-primary">
                  &ldquo;If you nodded at even one of these, you&apos;re in the
                  right place.&rdquo;
                </blockquote>
              </div>

              {/* Image */}
              <div
                className={`relative transition-all duration-1000 delay-300 ${
                  qualify.isVisible
                    ? "translate-x-0 opacity-100"
                    : "translate-x-12 opacity-0"
                }`}
              >
                <div className="absolute -top-6 -right-6 h-40 w-40 rounded-full bg-secondary opacity-15 blur-3xl" />
                <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem] shadow-xl">
                  <Image
                    src="/images/funnel/Angelic Boho Space.png"
                    alt="A woman reconnecting with herself"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================
          SECTION 3: WHAT THIS SESSION IS
      ================================================ */}
        <section className="bg-bg-main py-24 sm:py-32">
          <div ref={session.ref} className="mx-auto max-w-4xl px-6 lg:px-12">
            <div
              className={`space-y-10 text-center transition-all duration-1000 ${
                session.isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <div className="space-y-4">
                <p className="font-dm-sans text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
                  The Rebirth Strategy Session
                </p>
                <h2 className="font-playfair text-4xl font-bold text-primary sm:text-5xl">
                  This Is More Than a Conversation
                </h2>
                <p className="mx-auto max-w-2xl font-inter text-xl text-text-secondary">
                  In 60 minutes, we cut through the noise and get to the truth
                  of where you are, and what&apos;s keeping you from where you
                  want to be.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 text-left">
                {[
                  {
                    label: "Identify",
                    text: "Where you feel stuck, out of alignment, or disconnected from yourself",
                  },
                  {
                    label: "Clarify",
                    text: "What you truly want in this next season of your life",
                  },
                  {
                    label: "Uncover",
                    text: "The patterns and stories keeping you in survival mode",
                  },
                  {
                    label: "Map",
                    text: "Your clear, personalized next steps forward",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`flex gap-5 rounded-2xl bg-bg-light p-6 transition-all duration-700 ${
                      session.isVisible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-6 opacity-0"
                    }`}
                    style={{ transitionDelay: `${200 + i * 100}ms` }}
                  >
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-secondary font-dm-sans text-sm font-bold text-white">
                      {i + 1}
                    </div>
                    <div>
                      <p className="mb-1 font-dm-sans text-sm font-bold uppercase tracking-wider text-primary">
                        {item.label}
                      </p>
                      <p className="font-inter text-text-secondary">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div
                className={`rounded-2xl bg-highlight-bg px-8 py-6 transition-all duration-1000 delay-500 ${
                  session.isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
              >
                <p className="font-cormorant text-2xl italic text-text-primary">
                  &ldquo;One honest conversation can change the direction of
                  everything.&rdquo;
                </p>
              </div>

              <a
                href="https://genxrebirthmentor.setmore.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full rounded-full bg-secondary px-8 py-5 text-center font-dm-sans text-base font-semibold uppercase tracking-wider text-white shadow-lg transition-all duration-700 hover:bg-cta-hover hover:shadow-xl hover:-translate-y-1 sm:inline-block sm:w-auto sm:px-12 ${
                  session.isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: "600ms" }}
              >
                Book Your $59 Session
              </a>
            </div>
          </div>
        </section>

        {/* ================================================
          SECTION 4: WHAT YOU GET
      ================================================ */}
        <section className="bg-bg-light py-24 sm:py-32">
          <div ref={getValue.ref} className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
              {/* Image */}
              <div
                className={`relative order-last lg:order-first transition-all duration-1000 ${
                  getValue.isVisible
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-12 opacity-0"
                }`}
              >
                <div className="absolute -top-6 -left-6 h-48 w-48 rounded-full bg-secondary opacity-15 blur-3xl" />
                <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem] shadow-xl">
                  <Image
                    src="/images/funnel/Angelic Chair Smile.png"
                    alt="Empowered and clear"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Text */}
              <div
                className={`space-y-8 transition-all duration-1000 delay-200 ${
                  getValue.isVisible
                    ? "translate-x-0 opacity-100"
                    : "translate-x-8 opacity-0"
                }`}
              >
                <div className="space-y-3">
                  <p className="font-dm-sans text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
                    Session Value
                  </p>
                  <h2 className="font-playfair text-4xl font-bold text-primary sm:text-5xl">
                    What You&apos;ll Walk Away With
                  </h2>
                </div>

                <div className="space-y-5">
                  {[
                    {
                      title: "A clear picture of where you are",
                      desc: "No more guessing. You'll see your current patterns and starting point with honesty and compassion.",
                    },
                    {
                      title: "A personalized transformation plan",
                      desc: "Not generic advice, a path built around you, your life, your needs.",
                    },
                    {
                      title: "Direction for your next chapter",
                      desc: "A focused sense of where to go next and what to prioritize first.",
                    },
                    {
                      title: "Your recommended mentorship path",
                      desc: "If you want to go deeper, you'll know exactly which option fits your journey.",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className={`flex gap-5 transition-all duration-700 ${
                        getValue.isVisible
                          ? "translate-x-0 opacity-100"
                          : "translate-x-8 opacity-0"
                      }`}
                      style={{ transitionDelay: `${200 + i * 120}ms` }}
                    >
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 font-dm-sans text-base font-bold text-primary">
                        {["✦", "✦", "✦", "✦"][i]}
                      </div>
                      <div>
                        <p className="mb-1 font-playfair text-lg font-bold text-primary">
                          {item.title}
                        </p>
                        <p className="font-inter text-text-secondary">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div
                  className={`transition-all duration-700 delay-700 ${
                    getValue.isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                >
                  <a
                    href="https://genxrebirthmentor.setmore.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block rounded-full bg-secondary px-10 py-4 font-dm-sans text-base font-semibold uppercase tracking-wider text-white shadow-lg transition-all duration-300 hover:bg-cta-hover hover:shadow-xl hover:-translate-y-1"
                  >
                    Book Your $59 Session
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================
          SECTION 5: TRANSITION TO PACKAGES
      ================================================ */}
        <section className="bg-bg-main py-24 sm:py-28">
          <div
            ref={transition.ref}
            className="mx-auto max-w-4xl px-6 text-center lg:px-12"
          >
            <div
              className={`space-y-8 transition-all duration-1000 ${
                transition.isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <p className="font-dm-sans text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
                Ready to Go Deeper?
              </p>
              <h2 className="font-playfair text-4xl font-bold text-primary sm:text-5xl">
                Your Next Step After Clarity
              </h2>
              <p className="mx-auto max-w-2xl font-inter text-xl text-text-secondary">
                The strategy session is just the beginning. For women who are
                ready to commit to real, lasting change, there are three paths
                forward.
              </p>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {[
                  {
                    phase: "Reset",
                    months: "3 Months",
                    sessions: "7 Sessions",
                    desc: "Find your footing and release the overwhelm",
                  },
                  {
                    phase: "Re-Align",
                    months: "6 Months",
                    sessions: "13 Sessions",
                    desc: "Build consistency and create lasting change",
                  },
                  {
                    phase: "Rebirth Year",
                    months: "12 Months",
                    sessions: "26 Sessions",
                    desc: "Full identity transformation and life realignment",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`rounded-2xl bg-bg-light p-6 text-center transition-all duration-700 ${
                      transition.isVisible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-6 opacity-0"
                    }`}
                    style={{ transitionDelay: `${300 + i * 150}ms` }}
                  >
                    <p className="mb-1 font-dm-sans text-xs font-bold uppercase tracking-widest text-secondary">
                      {item.months}
                    </p>
                    <p className="mb-2 font-playfair text-xl font-bold text-primary">
                      {item.phase}
                    </p>
                    <p className="mb-3 font-dm-sans text-sm font-semibold text-text-secondary">
                      {item.sessions}
                    </p>
                    <p className="font-inter text-sm text-text-secondary">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              <a
                href="#packages"
                className="inline-block font-inter text-lg font-medium text-primary underline underline-offset-4 transition-all hover:text-secondary"
              >
                View full details below ↓
              </a>
            </div>
          </div>
        </section>

        {/* ================================================
          SECTION 6: PRICING CARDS
      ================================================ */}
        <section id="packages" className="bg-bg-light py-24 sm:py-32">
          <div ref={pricing.ref} className="mx-auto max-w-7xl px-6 lg:px-12">
            <div
              className={`mb-16 space-y-4 text-center transition-all duration-1000 ${
                pricing.isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <p className="font-dm-sans text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
                Mentorship Packages
              </p>
              <h2 className="font-playfair text-4xl font-bold text-primary sm:text-5xl">
                Choose Your Path Forward
              </h2>
              <p className="mx-auto max-w-xl font-inter text-lg text-text-secondary">
                All sessions are bi-weekly, held privately with Celeste.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {/* Card 1: Reset */}
              <div
                className={`flex flex-col rounded-[2rem] bg-white p-8 shadow-md ring-1 ring-primary/10 transition-all duration-700 hover:-translate-y-2 hover:shadow-xl ${
                  pricing.isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-12 opacity-0"
                }`}
                style={{ transitionDelay: "150ms" }}
              >
                <div className="mb-6 space-y-1">
                  <p className="font-dm-sans text-xs font-bold uppercase tracking-widest text-secondary">
                    3 Months
                  </p>
                  <h3 className="font-playfair text-3xl font-bold text-primary">
                    Reset Phase
                  </h3>
                  <p className="font-inter text-text-secondary">
                    For women who need a reset and support at a manageable pace.
                  </p>
                </div>

                <div className="mb-8 flex items-baseline gap-2">
                  <span className="font-playfair text-5xl font-bold text-text-primary">
                    $347
                  </span>
                  <span className="font-inter text-text-secondary">USD</span>
                </div>

                <p className="mb-4 font-dm-sans text-xs font-bold uppercase tracking-widest text-text-secondary">
                  7 Bi-Weekly Sessions
                </p>

                <ul className="mb-8 space-y-3">
                  {[
                    "Release built-up overwhelm and emotional weight",
                    "Rebuild clarity about who you are now",
                    "Create a clear direction for your next steps",
                    "Private 1:1 sessions with Celeste",
                    "Support between sessions",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 font-inter text-text-primary"
                    >
                      {CHECK_ICON}
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <a
                    href="https://stan.store/genxbirthmentor/p/reset-phase-3-months--"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full rounded-full border-2 border-secondary py-4 text-center font-dm-sans text-base font-semibold uppercase tracking-wider text-secondary transition-all duration-300 hover:bg-secondary hover:text-white hover:-translate-y-1"
                  >
                    Start Your Reset
                  </a>
                </div>
              </div>

              {/* Card 2: Re-Align (FEATURED) */}
              <div
                className={`relative mt-6 flex flex-col rounded-[2rem] bg-primary p-8 shadow-2xl ring-2 ring-primary transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl md:mt-0 md:-translate-y-4 ${
                  pricing.isVisible ? "opacity-100" : "translate-y-12 opacity-0"
                }`}
                style={{ transitionDelay: "300ms" }}
              >
                {/* Badge */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-block rounded-full bg-secondary px-5 py-1.5 font-dm-sans text-xs font-bold uppercase tracking-widest text-white shadow-md">
                    Most Popular
                  </span>
                </div>

                <div className="mb-6 space-y-1 pt-4">
                  <p className="font-dm-sans text-xs font-bold uppercase tracking-widest text-accent-dark">
                    6 Months
                  </p>
                  <h3 className="font-playfair text-3xl font-bold text-white">
                    Re-Align Phase
                  </h3>
                  <p className="font-inter text-white/70">
                    Build consistency, strengthen your foundation, and create
                    change that lasts.
                  </p>
                </div>

                <div className="mb-8 flex items-baseline gap-2">
                  <span className="font-playfair text-5xl font-bold text-white">
                    $497
                  </span>
                  <span className="font-inter text-white/70">USD</span>
                </div>

                <p className="mb-4 font-dm-sans text-xs font-bold uppercase tracking-widest text-white/60">
                  13 Bi-Weekly Sessions
                </p>

                <ul className="mb-8 space-y-3">
                  {[
                    "Build consistency and emotional resilience",
                    "Strengthen your boundaries without guilt",
                    "Reconnect with your identity and values",
                    "Create lasting change across all areas of life",
                    "Private 1:1 sessions + between-session support",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 font-inter text-white/90"
                    >
                      {CHECK_ICON_WHITE}
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <a
                    href="https://stan.store/genxbirthmentor/p/realign-phase-6-months-"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full rounded-full bg-white py-4 text-center font-dm-sans text-base font-semibold uppercase tracking-wider text-primary shadow-md transition-all duration-300 hover:bg-accent-dark hover:text-white hover:-translate-y-1"
                  >
                    Commit to Your Growth
                  </a>
                </div>
              </div>

              {/* Card 3: Rebirth Year */}
              <div
                className={`flex flex-col rounded-[2rem] bg-white p-8 shadow-md ring-1 ring-primary/10 transition-all duration-700 hover:-translate-y-2 hover:shadow-xl ${
                  pricing.isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-12 opacity-0"
                }`}
                style={{ transitionDelay: "450ms" }}
              >
                <div className="mb-6 space-y-1">
                  <p className="font-dm-sans text-xs font-bold uppercase tracking-widest text-secondary">
                    12 Months
                  </p>
                  <h3 className="font-playfair text-3xl font-bold text-primary">
                    Rebirth Year
                  </h3>
                  <p className="font-inter text-text-secondary">
                    For the woman who&apos;s ready for full transformation and
                    long-term support.
                  </p>
                </div>

                <div className="mb-8 flex items-baseline gap-2">
                  <span className="font-playfair text-5xl font-bold text-text-primary">
                    $697
                  </span>
                  <span className="font-inter text-text-secondary">USD</span>
                </div>

                <p className="mb-4 font-dm-sans text-xs font-bold uppercase tracking-widest text-text-secondary">
                  26 Bi-Weekly Sessions
                </p>

                <ul className="mb-8 space-y-3">
                  {[
                    "Deep identity transformation from the inside out",
                    "Full realignment of your life, relationships, and purpose",
                    "Long-term accountability and unwavering support",
                    "Sustained clarity, confidence, and peace",
                    "Private 1:1 sessions + priority support",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 font-inter text-text-primary"
                    >
                      {CHECK_ICON}
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <a
                    href="https://stan.store/genxbirthmentor/p/rebirth-year-12-months-"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full rounded-full border-2 border-primary bg-primary py-4 text-center font-dm-sans text-base font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:bg-primary/80 hover:-translate-y-1"
                  >
                    Fully Step Into Your Next Chapter
                  </a>
                </div>
              </div>
            </div>

            {/* Start with session nudge */}
            <div
              className={`mt-12 text-center transition-all duration-1000 delay-500 ${
                pricing.isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <p className="font-inter text-text-secondary">
                Not sure which package is right for you?{" "}
                <a
                  href="https://genxrebirthmentor.setmore.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-primary underline underline-offset-4 transition-all hover:text-secondary"
                >
                  Start with a $59 Strategy Session
                </a>{" "}
                and we&apos;ll figure it out together.
              </p>
            </div>
          </div>
        </section>

        {/* ================================================
          SECTION 7: WHY THIS WORKS
      ================================================ */}
        <section className="bg-bg-main py-24 sm:py-32">
          <div
            ref={trust.ref}
            className="mx-auto max-w-4xl px-6 text-center lg:px-12"
          >
            <div
              className={`space-y-10 transition-all duration-1000 ${
                trust.isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <div className="space-y-4">
                <p className="font-dm-sans text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
                  Why It Works
                </p>
                <h2 className="font-playfair text-4xl font-bold text-primary sm:text-5xl">
                  This Isn&apos;t Surface-Level Change
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-6 text-left sm:grid-cols-3">
                {[
                  {
                    title: "Identity-First",
                    desc: "We don't work on symptoms, we work on the root. Who you believe you are shapes every decision you make.",
                  },
                  {
                    title: "Long-Term Support",
                    desc: "Real transformation doesn't happen in a weekend. Consistent bi-weekly sessions create momentum that sticks.",
                  },
                  {
                    title: "Not Motivation, Clarity",
                    desc: "You don't need another pep talk. You need truth, direction, and a space that sees you clearly.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`rounded-2xl bg-bg-light p-7 transition-all duration-700 ${
                      trust.isVisible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-6 opacity-0"
                    }`}
                    style={{ transitionDelay: `${200 + i * 120}ms` }}
                  >
                    <div className="mb-4 h-1 w-10 rounded-full bg-secondary" />
                    <p className="mb-2 font-playfair text-xl font-bold text-primary">
                      {item.title}
                    </p>
                    <p className="font-inter text-text-secondary">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              <p
                className={`mx-auto max-w-2xl font-cormorant text-2xl italic text-text-primary transition-all duration-1000 delay-500 ${
                  trust.isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-6 opacity-0"
                }`}
              >
                &ldquo;Women don&apos;t need fixing. They need a space to
                finally tell the truth, and someone who can hold it with
                them.&rdquo;
              </p>
            </div>
          </div>
        </section>

        {/* ================================================
          SECTION 8: ABOUT CELESTE
      ================================================ */}
        <section className="bg-bg-light py-24 sm:py-32">
          <div ref={celeste.ref} className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
              {/* Image */}
              <div
                className={`relative transition-all duration-1000 ${
                  celeste.isVisible
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-8 opacity-0"
                }`}
              >
                <div className="absolute -top-6 -right-6 h-40 w-40 rounded-full bg-emotional-accent opacity-25 blur-3xl" />
                <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem] shadow-2xl">
                  <Image
                    src="/images/about-me.jpeg"
                    alt="Celeste Angelic London"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Text */}
              <div
                className={`space-y-6 transition-all duration-1000 delay-300 ${
                  celeste.isVisible
                    ? "translate-x-0 opacity-100"
                    : "translate-x-8 opacity-0"
                }`}
              >
                <p className="font-dm-sans text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
                  Your Mentor
                </p>
                <h2 className="font-playfair text-4xl font-bold italic text-accent-dark sm:text-5xl">
                  Meet Celeste
                </h2>

                <div className="space-y-5 font-inter text-lg leading-relaxed">
                  <p className="text-xl font-semibold text-text-primary">
                    I&apos;m Celeste Angelic London.
                  </p>
                  <p className="text-text-secondary">
                    I spent most of my life being the strong one, the woman who
                    handled what needed to be handled, kept things moving, and
                    put everyone else&apos;s needs before her own.
                  </p>
                  <p className="text-text-secondary">
                    I know what it feels like to lose yourself in the giving. To
                    wake up one day and realize you&apos;ve been living for
                    everyone except you.
                  </p>
                  <p className="text-text-secondary">
                    That realization wasn&apos;t a breakdown.
                    <br />
                    <span className="font-semibold text-primary">
                      It was the beginning of my rebirth.
                    </span>
                  </p>
                  <p className="text-text-secondary">
                    I do this work because I believe Gen X women are not past
                    their prime, they are in the most powerful season of their
                    lives. They just need a space to see it.
                  </p>
                </div>

                <div className="flex flex-col gap-3 pt-4 sm:flex-row sm:gap-4">
                  <a
                    href="https://genxrebirthmentor.setmore.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-secondary px-8 py-4 text-center font-dm-sans text-sm font-semibold uppercase tracking-wider text-white shadow-md transition-all duration-300 hover:bg-cta-hover hover:-translate-y-1"
                  >
                    Work With Celeste
                  </a>
                  <a
                    href="/rebirth-mentor"
                    className="rounded-full border-2 border-primary px-8 py-4 text-center font-dm-sans text-sm font-semibold uppercase tracking-wider text-primary transition-all duration-300 hover:bg-primary hover:text-white hover:-translate-y-1"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================
          SECTION 9: OBJECTION HANDLING
      ================================================ */}
        <section className="bg-bg-main py-24 sm:py-32">
          <div ref={objections.ref} className="mx-auto max-w-4xl px-6 lg:px-12">
            <div
              className={`space-y-10 transition-all duration-1000 ${
                objections.isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <div className="space-y-4 text-center">
                <p className="font-dm-sans text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
                  Let&apos;s Be Honest
                </p>
                <h2 className="font-playfair text-4xl font-bold text-primary sm:text-5xl">
                  You Might Be Thinking…
                </h2>
              </div>

              <div className="space-y-6">
                {[
                  {
                    q: '"Is this really worth it?"',
                    a: "You've spent years investing in everyone else. This is 60 minutes and $59 to invest in yourself. One session can shift the way you see everything. That's not a cost. That's a turning point.",
                  },
                  {
                    q: '"Can I actually change at this point in my life?"',
                    a: "Yes. Full stop. The women I work with aren't broken, they're ready. Midlife isn't the end of becoming. It's often the first time you finally have the permission and the clarity to begin.",
                  },
                  {
                    q: `"What if I've tried coaching before and it didn't work?"`,
                    a: "This isn't cheerleading or goal-setting. This is identity work. We go deeper than goals, we look at what's underneath them. If other approaches felt surface-level, this will feel different.",
                  },
                  {
                    q: `"I don't have time for this."`,
                    a: "The women who feel they have no time are exactly the women who need this most. We spend one hour every two weeks so that the other 335 hours feel less like survival and more like living.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`rounded-2xl bg-bg-light p-8 transition-all duration-700 ${
                      objections.isVisible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-6 opacity-0"
                    }`}
                    style={{ transitionDelay: `${150 + i * 120}ms` }}
                  >
                    <p className="mb-3 font-playfair text-xl font-bold italic text-primary">
                      {item.q}
                    </p>
                    <p className="font-inter text-lg leading-relaxed text-text-secondary">
                      {item.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ================================================
          SECTION 10: FINAL CTA
      ================================================ */}
        <section className="relative overflow-hidden bg-bg-light py-32 sm:py-40">
          <div className="absolute inset-0">
            <Image
              src="/images/funnel/Angelic Dresss Top Skirt.png"
              alt=""
              fill
              className="object-cover object-top opacity-15"
            />
            <div className="absolute inset-0 bg-bg-light/85" />
          </div>
          <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-accent-dark opacity-15 blur-3xl -translate-y-1/4 translate-x-1/4 pointer-events-none" />
          <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-emotional-accent opacity-15 blur-3xl translate-y-1/4 -translate-x-1/4 pointer-events-none" />

          <div
            ref={finalCta.ref}
            className="relative z-10 mx-auto max-w-3xl px-6 text-center"
          >
            <div
              className={`space-y-8 transition-all duration-1000 ${
                finalCta.isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <p className="font-dm-sans text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
                You&apos;re Ready
              </p>
              <h2 className="font-playfair text-4xl font-bold text-primary sm:text-5xl md:text-7xl">
                You Don&apos;t Have to Do This
                <span className="mt-2 block italic text-accent-dark">
                  Alone Anymore
                </span>
              </h2>
              <p className="font-cormorant text-2xl italic text-text-primary sm:text-3xl">
                &ldquo;This is your time to reconnect, rebuild, and rise.&rdquo;
              </p>
              <p className="mx-auto max-w-xl font-inter text-lg text-text-secondary">
                The first step is simple.
                <br />
                60 minutes. One honest conversation.
                <br />
                <span className="font-semibold text-primary">
                  Everything can shift from there.
                </span>
              </p>
              <div className="flex flex-col items-center gap-4 pt-4 sm:flex-row sm:justify-center">
                <a
                  href="https://stan.store/genxbirthmentor/p/rebirth-strategy-session-"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full rounded-full bg-secondary px-8 py-5 text-center font-dm-sans text-base font-semibold uppercase tracking-wider text-white shadow-xl transition-all duration-300 hover:bg-cta-hover hover:shadow-2xl hover:-translate-y-1 sm:w-auto sm:px-12 sm:text-lg"
                >
                  Book Your Rebirth Strategy Session
                </a>
              </div>
              <p className="font-inter text-sm text-text-secondary">
                $59 · 60 minutes · Private 1:1 with Celeste
              </p>
            </div>
          </div>
        </section>
      </div>
    </ReactLenis>
  );
}
