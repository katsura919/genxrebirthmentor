"use client";

import { useEffect, useState, useRef } from "react";
import { ReactLenis } from "lenis/react";
import Image from "next/image";

function useScrollReveal(threshold = 0.15) {
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

export default function RebirthMentorPage() {
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    setHeroVisible(true);
  }, []);

  const story = useScrollReveal();
  const forWho = useScrollReveal();
  const quiz = useScrollReveal();
  const why = useScrollReveal();
  const celeste = useScrollReveal();
  const believes = useScrollReveal();
  const offer = useScrollReveal();
  const outcomes = useScrollReveal();
  const note = useScrollReveal();
  const finalCta = useScrollReveal();

  return (
    <ReactLenis root>
      <div className="overflow-x-hidden">
        {/* ================================================
          SECTION 1: HERO
        ================================================ */}
        <section className="relative min-h-[95vh] w-full overflow-hidden bg-bg-main pt-5">
          <div className="absolute top-0 right-0 h-[600px] w-[600px] rounded-full bg-accent-dark opacity-10 blur-3xl -translate-y-1/4 translate-x-1/4 pointer-events-none" />
          <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-emotional-accent opacity-15 blur-3xl translate-y-1/4 -translate-x-1/4 pointer-events-none" />

          <div className="relative z-10 mx-auto grid min-h-[95vh] max-w-7xl grid-cols-1 items-center gap-12 px-6 pt-24 pb-16 lg:grid-cols-2 lg:gap-16 lg:px-12 lg:py-12">
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
              <h1 className="font-playfair text-4xl font-bold leading-tight text-primary sm:text-5xl lg:text-5xl xl:text-6xl">
                Simplify Operations and Increase Revenue with Smarter Systems.

              </h1>
              <p className="font-inter max-w-xl text-xl leading-relaxed text-text-secondary">
                A simple, real-life system for the woman who&apos;s done
                surviving and ready to build a life and income that actually
                supports her.
              </p>
              <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center">
                <a
                  href="/quiz"
                  className="rounded-full bg-secondary px-8 py-4 text-center font-dm-sans text-base font-medium uppercase tracking-wider text-white shadow-lg transition-all duration-300 hover:bg-cta-hover hover:shadow-xl hover:-translate-y-1"
                >
                  Start with the First Step → Quiz
                </a>
                <a
                  href="https://genxrebirthmentor.setmore.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border-2 border-accent-dark bg-accent-dark px-8 py-4 text-center font-dm-sans text-base font-medium uppercase tracking-wider text-white transition-all duration-300 hover:bg-primary hover:text-white hover:-translate-y-1"
                >
                  Book Your Rebirth Session
                </a>
              </div>
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
              <div className="relative z-10 mx-auto max-w-sm lg:max-w-none">
                <div className="relative aspect-square overflow-hidden rounded-[2.5rem] shadow-2xl">
                  <Image
                    src="/images/new/Angelic-Bus-GenX.png"
                    alt="Gen X Rebirth Mentor — structure and income system"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================
          SECTION 2: MY STORY
        ================================================ */}
        <section className="bg-bg-light py-24 sm:py-32">
          <div ref={story.ref} className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
              {/* Text */}
              <div
                className={`space-y-8 transition-all duration-1000 ${
                  story.isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
              >
                <p className="font-dm-sans text-sm font-semibold uppercase tracking-[0.2em] text-emotional-accent">
                  My Story
                </p>
                <h2 className="font-playfair text-4xl font-bold leading-tight text-primary sm:text-5xl">
                  Everything Changed When I Started Asking a Different Question
                </h2>
                <div className="space-y-5 font-inter text-lg leading-relaxed text-text-primary">
                  <p>I stopped asking:</p>
                  <blockquote className="border-l-4 border-emotional-accent pl-6 font-cormorant text-2xl italic text-text-primary">
                    &ldquo;How do I keep up with everything?&rdquo;
                  </blockquote>
                  <p>And started asking:</p>
                  <blockquote className="border-l-4 border-accent-dark pl-6 font-cormorant text-2xl italic text-text-primary">
                    &ldquo;Why am I building a life that has no structure to
                    support me?&rdquo;
                  </blockquote>
                  <p>
                    That&apos;s why I created a simple structure system that
                    helps you:
                  </p>
                </div>

                <div className="space-y-3">
                  {[
                    "Get out of overwhelm",
                    "Build consistency",
                    "Create income without burnout",
                  ].map((item, i) => (
                    <div
                      key={i}
                      className={`flex items-start gap-4 transition-all duration-700 ${
                        story.isVisible
                          ? "translate-x-0 opacity-100"
                          : "translate-x-8 opacity-0"
                      }`}
                      style={{ transitionDelay: `${300 + i * 120}ms` }}
                    >
                      <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-emotional-accent" />
                      <p className="font-inter text-lg text-text-primary">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image */}
              <div
                className={`relative transition-all duration-1000 delay-300 ${
                  story.isVisible
                    ? "translate-x-0 opacity-100"
                    : "translate-x-12 opacity-0"
                }`}
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem] shadow-xl">
                  <Image
                    src="/images/funnel/Angelic Boho Space.png"
                    alt="A moment of clarity and intention"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 h-32 w-32 rounded-full bg-accent-dark opacity-20 blur-2xl" />
              </div>
            </div>
          </div>
        </section>

        {/* ================================================
          SECTION 3: THIS IS FOR THE WOMAN WHO
        ================================================ */}
        <section className="bg-bg-main py-24 sm:py-32">
          <div ref={forWho.ref} className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
              {/* Image */}
              <div
                className={`relative transition-all duration-1000 ${
                  forWho.isVisible
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-12 opacity-0"
                }`}
              >
                <div className="absolute -top-6 -left-6 h-48 w-48 rounded-full bg-secondary opacity-15 blur-3xl" />
                <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem] shadow-xl">
                  <Image
                    src="/images/funnel/Angelic Dresss Top Skirt.png"
                    alt="Standing in your own power"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Text */}
              <div
                className={`space-y-8 transition-all duration-1000 delay-200 ${
                  forWho.isVisible
                    ? "translate-x-0 opacity-100"
                    : "translate-x-8 opacity-0"
                }`}
              >
                <p className="font-dm-sans text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
                  Is This You?
                </p>
                <h2 className="font-playfair text-4xl font-bold leading-tight text-primary sm:text-5xl">
                  This Is for the Woman Who:
                </h2>

                <div className="space-y-4 py-2">
                  {[
                    "Has lived in survival mode",
                    "Is rebuilding from scratch",
                    "Wants peace and income",
                    "Is done over-functioning",
                  ].map((item, i) => (
                    <div
                      key={i}
                      className={`flex items-center gap-4 font-playfair text-2xl font-bold text-accent-dark transition-all duration-700 ${
                        forWho.isVisible
                          ? "translate-y-0 opacity-100"
                          : "translate-y-4 opacity-0"
                      }`}
                      style={{ transitionDelay: `${400 + i * 100}ms` }}
                    >
                      <span className="h-2 w-2 flex-shrink-0 rounded-full bg-emotional-accent" />
                      {item}
                    </div>
                  ))}
                </div>

                <div
                  className={`rounded-2xl bg-highlight-bg px-8 py-6 transition-all duration-1000 delay-700 ${
                    forWho.isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                >
                  <p className="font-cormorant text-2xl italic leading-relaxed text-text-primary">
                    &ldquo;You&apos;re done surviving. Now it&apos;s time to
                    build.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================
          SECTION 4: QUIZ / PHASE FINDER
        ================================================ */}
        <section className="bg-highlight-bg py-24 sm:py-32">
          <div ref={quiz.ref} className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
              {/* Text */}
              <div
                className={`space-y-10 transition-all duration-1000 ${
                  quiz.isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
              >
                <div className="space-y-4">
                  <p className="font-dm-sans text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
                    Free Quiz
                  </p>
                  <h2 className="font-playfair text-4xl font-bold leading-tight text-primary sm:text-5xl">
                    What Phase of Your Life &amp; Income Are You In Right Now?
                  </h2>
                  <p className="font-inter text-lg text-text-secondary">
                    Get matched with the exact structure, support, and next step
                    you need to move forward—in under 2 minutes.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {[
                    {
                      name: "The Reset Phase",
                      desc: "Life feels scattered—you need structure to move forward",
                      accent: "border-emotional-accent",
                    },
                    {
                      name: "The Overwhelmed Rebuilder",
                      desc: "You've been carrying too much and need a full reset",
                      accent: "border-secondary",
                    },
                    {
                      name: "The Clarity Seeker",
                      desc: "You're ready but don't have a clear direction or plan",
                      accent: "border-accent-dark",
                    },
                    {
                      name: "Ready for Transformation",
                      desc: "You're committed and ready to become the CEO of your life",
                      accent: "border-primary",
                    },
                  ].map((phase, i) => (
                    <div
                      key={i}
                      className={`rounded-2xl border-l-4 bg-white p-5 shadow-sm transition-all duration-700 ${phase.accent} ${
                        quiz.isVisible
                          ? "translate-y-0 opacity-100"
                          : "translate-y-6 opacity-0"
                      }`}
                      style={{ transitionDelay: `${200 + i * 120}ms` }}
                    >
                      <p className="mb-1 font-playfair text-lg font-bold text-primary">
                        {phase.name}
                      </p>
                      <p className="font-inter text-sm text-text-secondary">
                        {phase.desc}
                      </p>
                    </div>
                  ))}
                </div>

                <a
                  href="/quiz"
                  className="inline-block rounded-full bg-secondary px-10 py-4 font-dm-sans text-base font-semibold uppercase tracking-wider text-white shadow-lg transition-all duration-300 hover:bg-cta-hover hover:shadow-xl hover:-translate-y-1"
                >
                  Start with the First Step → Quiz
                </a>
              </div>

              {/* Image */}
              <div
                className={`relative transition-all duration-1000 delay-300 ${
                  quiz.isVisible
                    ? "translate-x-0 opacity-100"
                    : "translate-x-12 opacity-0"
                }`}
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-xl">
                  <Image
                    src="/images/funnel/Angelic Diverse Women.png"
                    alt="Women supporting each other"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-accent-dark/15 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================
          SECTION 5: WHY THIS HAPPENS
        ================================================ */}
        <section className="bg-bg-main py-24 sm:py-32">
          <div ref={why.ref} className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
              {/* Image */}
              <div
                className={`relative transition-all duration-1000 ${
                  why.isVisible
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-12 opacity-0"
                }`}
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem] shadow-xl">
                  <Image
                    src="/images/funnel/Angelic Water View.png"
                    alt="Quiet reflection by the water"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-8 -right-8 h-40 w-40 rounded-full bg-primary opacity-10 blur-3xl" />
              </div>

              {/* Text */}
              <div
                className={`space-y-8 transition-all duration-1000 delay-200 ${
                  why.isVisible
                    ? "translate-x-0 opacity-100"
                    : "translate-x-8 opacity-0"
                }`}
              >
                <h2 className="font-playfair text-4xl font-bold leading-tight text-primary sm:text-5xl">
                  Why So Many Women Stay Stuck Without Structure
                </h2>
                <div className="space-y-5 font-inter text-lg leading-relaxed text-text-primary">
                  <p>It didn&apos;t happen all at once.</p>
                  <p>
                    It happened in the small moments—when you kept going without
                    a system, when you put yourself last to meet everyone
                    else&apos;s needs, when you defined your worth by how much
                    you could carry.
                  </p>
                  <p>
                    Surviving, over-functioning, doing it all alone—
                    they&apos;re taught to us.
                    <br />
                    Praised in us.
                    <br />
                    Rewarded in us.
                  </p>
                  <p>
                    Until one day, you look around and wonder:
                    <span className="mt-3 block font-cormorant text-2xl italic text-primary">
                      &ldquo;Why does nothing feel like it&apos;s
                      working?&rdquo;
                    </span>
                  </p>
                  <p>
                    This isn&apos;t a character flaw.
                    <br />
                    <span className="font-medium text-primary">
                      This is a structure problem that can be solved.
                    </span>
                  </p>
                  <p>And you don&apos;t have to figure it out alone.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================
          SECTION 6: MEET CELESTE
        ================================================ */}
        <section className="bg-bg-light py-24 sm:py-32">
          <div ref={celeste.ref} className="mx-auto max-w-7xl px-6 lg:px-12">
            <div
              className={`mb-16 text-center transition-all duration-1000 ${
                celeste.isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <p className="font-dm-sans text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
                Your Guide
              </p>
              <h2 className="mt-3 font-playfair text-4xl font-bold italic text-accent-dark sm:text-5xl md:text-6xl">
                Meet Celeste
              </h2>
            </div>

            <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
              {/* Image */}
              <div
                className={`relative transition-all duration-1000 ${
                  celeste.isVisible
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-8 opacity-0"
                }`}
              >
                <div className="absolute -top-6 -right-6 h-32 w-32 rounded-full bg-emotional-accent opacity-30 blur-2xl" />
                <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem] shadow-2xl">
                  <Image
                    src="/images/new/Angelic-in-the-Office.png"
                    alt="Celeste, your mentor"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Text */}
              <div
                className={`space-y-6 font-inter text-lg leading-relaxed transition-all duration-1000 delay-300 ${
                  celeste.isVisible
                    ? "translate-x-0 opacity-100"
                    : "translate-x-8 opacity-0"
                }`}
              >
                <p className="text-2xl font-semibold text-text-primary">
                  I&apos;m Celeste Angelic London.
                </p>
                <p className="text-text-secondary">
                  I know what it&apos;s like to be the strong one. To hold
                  everything together while quietly falling apart inside.
                </p>
                <p className="text-text-secondary">
                  I raised my daughters on my own, built my life from scratch
                  more than once, and carried weight that was never meant for
                  one person.
                </p>
                <p className="text-text-secondary">
                  I did it with grace. And I did it at a cost.
                </p>
                <p className="text-text-secondary">
                  It took reaching midlife to finally ask myself a real
                  question:
                </p>
                <blockquote className="border-l-4 border-emotional-accent pl-6 font-cormorant text-2xl italic text-text-primary">
                  &ldquo;Why am I building a life that has no structure to
                  support me?&rdquo;
                </blockquote>
                <p className="text-text-secondary">
                  That question changed everything.
                </p>
                <p className="text-text-secondary">
                  Now I walk alongside women who are ready to stop surviving and
                  start{" "}
                  <span className="font-semibold text-primary">building</span>.
                </p>
                <p className="text-text-secondary">
                  Not just a new version of who you were.
                  <br />A life and income that actually supports who you are.
                </p>
                <p className="mt-6 font-playfair text-2xl italic text-text-primary">
                  Celeste Angelic London
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================
          SECTION 7: WHAT SHE BELIEVES
        ================================================ */}
        <section className="relative overflow-hidden bg-primary py-24 sm:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-accent-dark opacity-90" />
          <div
            ref={believes.ref}
            className="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-12"
          >
            <h2
              className={`font-playfair text-4xl font-bold text-white sm:text-5xl md:text-6xl transition-all duration-1000 ${
                believes.isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              This Is Not a Breakdown.
              <span className="mt-2 block italic text-accent-dark">
                This Is a Rebirth.
              </span>
            </h2>

            <div className="mt-16 space-y-8">
              {[
                "You are not behind. You are exactly where your next chapter begins.",
                "Choosing yourself is not abandonment. It is finally showing up.",
                "Structure is not a cage. It is the foundation that sets you free.",
                "You don't need to earn rest. You don't need to earn income.",
                "The woman you've been putting off? She's been waiting patiently. She's ready now.",
              ].map((belief, i) => (
                <p
                  key={i}
                  className={`font-cormorant text-2xl italic leading-relaxed text-white/90 sm:text-3xl transition-all duration-700 ${
                    believes.isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-6 opacity-0"
                  }`}
                  style={{ transitionDelay: `${200 + i * 150}ms` }}
                >
                  &ldquo;{belief}&rdquo;
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================
          SECTION 8: OFFERS (4 PRODUCTS)
        ================================================ */}
        <section className="bg-bg-main py-24 sm:py-32">
          <div ref={offer.ref} className="mx-auto max-w-7xl px-6 lg:px-12">
            <div
              className={`mb-16 space-y-4 text-center transition-all duration-1000 ${
                offer.isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <p className="font-dm-sans text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
                Your Path Forward
              </p>
              <h2 className="font-playfair text-4xl font-bold text-primary sm:text-5xl">
                Find Your Next Step
              </h2>
              <p className="mx-auto max-w-2xl font-inter text-lg text-text-secondary">
                Every woman&apos;s journey is different. Choose the level of
                structure and support that matches exactly where you are right
                now.
              </p>
            </div>

            {/* Top 2 products */}
            <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-2">
              {/* Card: Digital Planner */}
              <div
                className={`flex flex-col rounded-[2rem] bg-bg-light p-0 shadow-lg overflow-hidden transition-all duration-700 hover:-translate-y-2 hover:shadow-xl ${
                  offer.isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-12 opacity-0"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                <div className="relative h-48 w-full">
                  <Image
                    src="/images/new/Angelic-D-planner.png"
                    alt="The Life & CEO Digital Planner"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-light/80 to-transparent" />
                  <span className="absolute bottom-4 left-6 inline-block rounded-full bg-secondary/90 px-4 py-1 font-dm-sans text-sm font-semibold uppercase tracking-wider text-white">
                    Reset Phase
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-8">
                  <h3 className="mb-3 font-playfair text-2xl font-bold text-primary">
                    The Life &amp; CEO Digital Planner
                  </h3>
                  <p className="mb-5 font-inter text-text-secondary">
                    You don&apos;t need more pressure—you need structure that
                    supports you. Start here.
                  </p>
                  <ul className="mb-6 space-y-2">
                    {[
                      "Get organized",
                      "Build consistency",
                      "Create daily structure that actually fits your life",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 font-inter text-text-primary text-sm"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-secondary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto space-y-2">
                    <a
                      href="https://stan.store/genxbirthmentor/p/the-life--ceo-digital-planner--7q2v4ziy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block rounded-full bg-secondary py-3 text-center font-dm-sans text-sm font-semibold uppercase tracking-wider text-white shadow-md transition-all duration-300 hover:bg-cta-hover hover:-translate-y-1"
                    >
                      Free for One Week
                    </a>
                    <a
                      href="https://stan.store/genxbirthmentor/p/the-life--ceo-digital-planner--7q2v4ziy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block rounded-full border-2 border-secondary py-3 text-center font-dm-sans text-sm font-semibold uppercase tracking-wider text-secondary transition-all duration-300 hover:bg-secondary hover:text-white hover:-translate-y-1"
                    >
                      One-time Fee — $29.99
                    </a>
                    <a
                      href="https://stan.store/genxbirthmentor/p/the-life--ceo-digital-planner-"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-center font-dm-sans text-sm font-medium text-text-secondary underline underline-offset-2 transition-colors hover:text-secondary"
                    >
                      Monthly Subscription — $22.22
                    </a>
                  </div>
                </div>
              </div>

              {/* Card: Finally Me Reset Session */}
              <div
                className={`flex flex-col rounded-[2rem] bg-bg-light p-0 shadow-lg overflow-hidden transition-all duration-700 hover:-translate-y-2 hover:shadow-xl ${
                  offer.isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-12 opacity-0"
                }`}
                style={{ transitionDelay: "350ms" }}
              >
                <div className="relative h-48 w-full">
                  <Image
                    src="/images/new/Angelic-Bus-GenX.png"
                    alt="Finally Me Reset Session"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-light/80 to-transparent" />
                  <span className="absolute bottom-4 left-6 inline-block rounded-full bg-emotional-accent/90 px-4 py-1 font-dm-sans text-sm font-semibold uppercase tracking-wider text-white">
                    Overwhelmed Rebuilder
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-8">
                  <h3 className="mb-3 font-playfair text-2xl font-bold text-primary">
                    Finally Me Reset Session
                  </h3>
                  <p className="mb-5 font-inter text-text-secondary">
                    You&apos;ve been carrying too much for too long. Before you
                    build anything, clear the mental and emotional weight.
                  </p>
                  <ul className="mb-6 space-y-2">
                    {[
                      "Reset mentally + emotionally",
                      "Get clarity fast",
                      "Feel grounded again",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 font-inter text-text-primary text-sm"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emotional-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto">
                    <a
                      href="https://stan.store/genxbirthmentor/p/finally-me-reset-session-"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block rounded-full bg-accent-dark py-4 text-center font-dm-sans text-base font-semibold uppercase tracking-wider text-white shadow-md transition-all duration-300 hover:bg-primary hover:-translate-y-1"
                    >
                      Book Your Finally Me Session
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom 2 products */}
            <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2">
              {/* Card: Rebirth Strategy Session */}
              <div
                className={`flex flex-col rounded-[2rem] bg-bg-light p-8 shadow-lg transition-all duration-700 hover:-translate-y-2 hover:shadow-xl ${
                  offer.isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-12 opacity-0"
                }`}
                style={{ transitionDelay: "500ms" }}
              >
                <span className="mb-5 inline-block self-start rounded-full bg-accent-dark/15 px-4 py-1 font-dm-sans text-sm font-semibold uppercase tracking-wider text-accent-dark">
                  Clarity Seeker
                </span>
                <h3 className="mb-3 font-playfair text-2xl font-bold text-primary">
                  Rebirth Strategy Session
                </h3>
                <p className="mb-5 font-inter text-text-secondary">
                  You&apos;re not stuck because you&apos;re incapable—
                  you&apos;re stuck because you don&apos;t have a clear plan.
                </p>
                <ul className="mb-auto space-y-2">
                  {[
                    "Get clear on your direction",
                    "Build a realistic plan",
                    "Move forward with confidence",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 font-inter text-text-primary text-sm"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent-dark" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://stan.store/genxbirthmentor/p/rebirth-strategy-session-"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 block rounded-full bg-accent-dark py-4 text-center font-dm-sans text-base font-semibold uppercase tracking-wider text-white shadow-md transition-all duration-300 hover:bg-primary hover:-translate-y-1"
                >
                  Get Your Rebirth Strategy Session
                </a>
              </div>

              {/* Card: Transformation Coaching */}
              <div
                className={`flex flex-col rounded-[2rem] bg-primary p-8 shadow-lg transition-all duration-700 hover:-translate-y-2 hover:shadow-xl ${
                  offer.isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-12 opacity-0"
                }`}
                style={{ transitionDelay: "650ms" }}
              >
                <span className="mb-5 inline-block self-start rounded-full bg-white/20 px-4 py-1 font-dm-sans text-sm font-semibold uppercase tracking-wider text-white">
                  Ready for Transformation
                </span>
                <h3 className="mb-3 font-playfair text-2xl font-bold text-white">
                  Long-Term Coaching
                </h3>
                <p className="mb-5 font-inter text-white/80">
                  You&apos;re done playing small. Now it&apos;s about structure,
                  consistency, and long-term change.
                </p>
                <ul className="mb-auto space-y-3">
                  {[
                    {
                      label: "3 Month Reset Phase",
                      url: "https://stan.store/genxbirthmentor/p/reset-phase-3-months--",
                    },
                    {
                      label: "Re-Align Phase — 6 Months (13 Bi-Weekly)",
                      url: "https://stan.store/genxbirthmentor/p/realign-phase-6-months-",
                    },
                    {
                      label: "Rebirth Phase — 12 Months (26 Bi-Weekly)",
                      url: "https://stan.store/genxbirthmentor/p/rebirth-year-12-months-",
                    },
                  ].map((pkg, i) => (
                    <li key={i}>
                      <a
                        href={pkg.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start gap-3 font-inter text-sm text-white/90 hover:text-white transition-colors"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent-dark" />
                        {pkg.label}
                      </a>
                    </li>
                  ))}
                </ul>
                <a
                  href="https://stan.store/genxbirthmentor/p/reset-phase-3-months--"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 block rounded-full bg-white py-4 text-center font-dm-sans text-base font-semibold uppercase tracking-wider text-primary shadow-md transition-all duration-300 hover:bg-accent-dark hover:text-white hover:-translate-y-1"
                >
                  Step into Transformation
                </a>
              </div>
            </div>

            {/* Wide image with overlay quote */}
            <div
              className={`relative overflow-hidden rounded-[2.5rem] transition-all duration-1000 delay-500 ${
                offer.isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
            >
              <div className="relative h-64 sm:h-80 lg:h-[420px]">
                <Image
                  src="/images/new/Angelic-Finally-Iam-Me.png"
                  alt="A warm, welcoming space for your journey"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-primary/20" />
                <div className="absolute inset-0 flex items-center justify-center px-8">
                  <p className="text-center font-cormorant text-3xl italic text-white drop-shadow-lg sm:text-4xl">
                    &ldquo;Structure is not a cage. It&apos;s the foundation
                    that sets you free.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================
          SECTION 9: OUTCOMES
        ================================================ */}
        <section className="bg-bg-light py-24 sm:py-32">
          <div ref={outcomes.ref} className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
              {/* Text */}
              <div
                className={`space-y-10 transition-all duration-1000 ${
                  outcomes.isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
              >
                <div className="space-y-4">
                  <p className="font-dm-sans text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
                    What&apos;s Possible
                  </p>
                  <h2 className="font-playfair text-4xl font-bold text-primary sm:text-5xl">
                    What You&apos;ll Walk Away With
                  </h2>
                  <p className="font-inter text-lg text-text-secondary">
                    This isn&apos;t about doing more.
                    <br />
                    It&apos;s about building a life that actually works for you.
                  </p>
                </div>

                <div className="space-y-6">
                  {[
                    {
                      title: "Structure",
                      desc: "A real system that organizes your life and supports your goals",
                    },
                    {
                      title: "Consistency",
                      desc: "The ability to show up for yourself without burning out",
                    },
                    {
                      title: "Clarity",
                      desc: "A clear direction so every step you take is intentional",
                    },
                    {
                      title: "Income",
                      desc: "A path to building income that fits your life and values",
                    },
                    {
                      title: "Peace",
                      desc: "An inner stillness that comes from having a life that supports you",
                    },
                  ].map((outcome, i) => (
                    <div
                      key={i}
                      className={`flex items-start gap-5 transition-all duration-700 ${
                        outcomes.isVisible
                          ? "translate-x-0 opacity-100"
                          : "translate-x-8 opacity-0"
                      }`}
                      style={{ transitionDelay: `${200 + i * 120}ms` }}
                    >
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-secondary font-dm-sans text-lg font-bold text-white">
                        {i + 1}
                      </div>
                      <div>
                        <p className="font-playfair text-xl font-bold text-primary">
                          {outcome.title}
                        </p>
                        <p className="font-inter text-text-secondary">
                          {outcome.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image */}
              <div
                className={`relative transition-all duration-1000 delay-400 ${
                  outcomes.isVisible
                    ? "translate-x-0 opacity-100"
                    : "translate-x-12 opacity-0"
                }`}
              >
                <div className="absolute -top-8 -right-8 h-48 w-48 rounded-full bg-emotional-accent opacity-20 blur-3xl" />
                <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem] shadow-2xl">
                  <Image
                    src="/images/funnel/Angelic Accents.png"
                    alt="Empowered and at peace"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================
          SECTION 10: PERSONAL NOTE
        ================================================ */}
        <section className="bg-bg-main py-24 sm:py-32">
          <div ref={note.ref} className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
              {/* Image */}
              <div
                className={`relative transition-all duration-1000 ${
                  note.isVisible
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-8 opacity-0"
                }`}
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem] shadow-xl">
                  <Image
                    src="/images/about-me.jpeg"
                    alt="A personal note from Celeste"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 h-40 w-40 rounded-full bg-accent-dark opacity-20 blur-3xl" />
              </div>

              {/* Letter */}
              <div
                className={`space-y-6 transition-all duration-1000 delay-300 ${
                  note.isVisible
                    ? "translate-x-0 opacity-100"
                    : "translate-x-8 opacity-0"
                }`}
              >
                <p className="font-dm-sans text-sm font-semibold uppercase tracking-[0.2em] text-emotional-accent">
                  A Note From Me to You
                </p>
                <h2 className="font-playfair text-4xl font-bold italic text-primary sm:text-5xl">
                  You Are Not Too Late.
                </h2>
                <div className="space-y-5 font-inter text-lg leading-relaxed text-text-secondary">
                  <p>I see you.</p>
                  <p>
                    I see the years of surviving, the quiet ache of feeling like
                    you&apos;re always behind, the exhaustion you&apos;ve
                    learned to call normal.
                  </p>
                  <p>I also see something else:</p>
                  <p className="font-semibold text-text-primary">
                    I see a woman who is ready.
                  </p>
                  <p>
                    Not just ready to feel better—ready to{" "}
                    <em>build differently</em>. Ready to stop managing chaos and
                    start creating structure that supports her life and income.
                  </p>
                  <p>
                    You don&apos;t have to have it all figured out. You just
                    have to be willing to take one honest step.
                  </p>
                  <p>I&apos;ll meet you there.</p>
                  <p className="font-semibold text-text-primary">
                    With love and full belief in you,
                  </p>
                </div>
                <p className="font-playfair text-3xl italic text-text-primary">
                  Celeste Angelic London
                </p>
                <div className="pt-4">
                  <a
                    href="/quiz"
                    className="inline-block rounded-full bg-secondary px-10 py-4 font-dm-sans text-base font-semibold uppercase tracking-wider text-white shadow-lg transition-all duration-300 hover:bg-cta-hover hover:shadow-xl hover:-translate-y-1"
                  >
                    Start with the First Step → Quiz
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================
          SECTION 11: FINAL CTA
        ================================================ */}
        <section className="relative overflow-hidden bg-bg-light py-32 sm:py-40">
          <div className="absolute inset-0">
            <Image
              src="/images/funnel/Angelic Dresss Top Skirt.png"
              alt=""
              fill
              className="object-cover object-center opacity-15"
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
                Your Time Is Now
              </p>
              <h2 className="font-playfair text-5xl font-bold text-primary sm:text-6xl md:text-7xl">
                It&apos;s Your Time
              </h2>
              <p className="font-cormorant text-2xl italic text-text-primary sm:text-3xl">
                &ldquo;Your rebirth has already begun.&rdquo;
              </p>
              <p className="mx-auto max-w-xl font-inter text-lg text-text-secondary">
                You&apos;ve read this far. Something in you recognized itself
                here.
                <br />
                That recognition is your beginning.
              </p>
              <p className="font-inter text-lg text-text-secondary">
                Don&apos;t wait for the perfect moment.
                <br />
                <span className="font-semibold text-primary">
                  This is the moment.
                </span>
              </p>
              <div className="flex flex-col items-center gap-4 pt-4 sm:flex-row sm:justify-center">
                <a
                  href="/quiz"
                  className="rounded-full bg-secondary px-12 py-5 font-dm-sans text-lg font-semibold uppercase tracking-wider text-white shadow-xl transition-all duration-300 hover:bg-cta-hover hover:shadow-2xl hover:-translate-y-1"
                >
                  Start with the First Step → Quiz
                </a>
                <a
                  href="https://genxrebirthmentor.setmore.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border-2 border-primary px-10 py-5 font-dm-sans text-base font-semibold uppercase tracking-wider text-primary transition-all duration-300 hover:bg-primary hover:text-white hover:-translate-y-1"
                >
                  Book a Session
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </ReactLenis>
  );
}
