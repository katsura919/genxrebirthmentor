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
  const [showStickyBtn, setShowStickyBtn] = useState(false);

  useEffect(() => {
    setHeroVisible(true);

    const handleScroll = () => {
      setShowStickyBtn(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const pain = useScrollReveal();
  const turning = useScrollReveal();
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
          STICKY CTA
      ================================================ */}
        <div
          className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${
            showStickyBtn
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4 pointer-events-none"
          }`}
        >
          <a
            href="https://stan.store/genxbirthmentor"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-secondary px-6 py-3 font-dm-sans text-sm font-semibold uppercase tracking-wider text-white shadow-2xl transition-all hover:bg-cta-hover hover:-translate-y-1"
          >
            Book Your Session
          </a>
        </div>

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
                You've spent years being everything for everyone else…
                <span className="mt-2 block text-accent-dark italic">
                  now it's time to come back to you.
                </span>
              </h1>
              <p className="font-inter max-w-xl text-xl leading-relaxed text-text-secondary">
                Reconnect with who you are, what you need, and the life you
                truly want.
              </p>
              <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center">
                <a
                  href="/quiz"
                  className="rounded-full bg-secondary px-8 py-4 text-center font-dm-sans text-base font-medium uppercase tracking-wider text-white shadow-lg transition-all duration-300 hover:bg-cta-hover hover:shadow-xl hover:-translate-y-1"
                >
                  Take the Rebirth Reflection Quiz
                </a>
                <a
                  href="https://stan.store/genxbirthmentor"
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
                <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-2xl">
                  <Image
                    src="/images/funnel/Angelic Chair Smile.png"
                    alt="Celeste, Gen X Rebirth Mentor"
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
          SECTION 2: PAIN (EMOTIONAL HOOK)
      ================================================ */}
        <section className="bg-bg-light py-24 sm:py-32">
          <div ref={pain.ref} className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
              {/* Text */}
              <div
                className={`space-y-8 transition-all duration-1000 ${
                  pain.isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
              >
                <h2 className="font-playfair text-4xl font-bold leading-tight text-primary sm:text-5xl">
                  You've Spent So Much Time Being Who Everyone Needed…
                  <span className="mt-2 block text-accent-dark italic">
                    You Forgot Who You Are
                  </span>
                </h2>
                <div className="space-y-5 font-inter text-lg leading-relaxed text-text-primary">
                  <p>
                    You&apos;ve been the strong one.
                    <br />
                    The one who figures it out.
                    <br />
                    The one who keeps going no matter what.
                  </p>
                  <p>
                    You&apos;ve carried the emotional weight of your family,
                    your relationships, your career, often all at once, often in
                    silence.
                  </p>
                  <p>
                    Somewhere along the way,{" "}
                    <span className="font-semibold text-primary">
                      you got lost in the giving.
                    </span>
                  </p>
                </div>

                <div className="space-y-3">
                  {[
                    "Emotionally drained no matter how much you rest",
                    "Disconnected from your own wants and needs",
                    "Guilty for wanting more out of life",
                    "Stuck in a season that no longer fits who you are",
                  ].map((item, i) => (
                    <div
                      key={i}
                      className={`flex items-start gap-4 transition-all duration-700 ${
                        pain.isVisible
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

                <blockquote className="border-l-4 border-emotional-accent pl-6 font-cormorant text-2xl italic text-text-primary">
                  &ldquo;You&apos;ve spent so long being strong for everyone
                  else, it&apos;s okay to be held for a change.&rdquo;
                </blockquote>
              </div>

              {/* Image */}
              <div
                className={`relative transition-all duration-1000 delay-300 ${
                  pain.isVisible
                    ? "translate-x-0 opacity-100"
                    : "translate-x-12 opacity-0"
                }`}
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem] shadow-xl">
                  <Image
                    src="/images/funnel/Angelic Boho Space.png"
                    alt="A moment of quiet reflection"
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
          SECTION 3: TURNING POINT
      ================================================ */}
        <section className="bg-bg-main py-24 sm:py-32">
          <div ref={turning.ref} className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
              {/* Image */}
              <div
                className={`relative transition-all duration-1000 ${
                  turning.isVisible
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
                  turning.isVisible
                    ? "translate-x-0 opacity-100"
                    : "translate-x-8 opacity-0"
                }`}
              >
                <p className="font-dm-sans text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
                  The Turning Point
                </p>
                <h2 className="font-playfair text-4xl font-bold leading-tight text-primary sm:text-5xl">
                  What About You?
                </h2>
                <div className="space-y-4 font-inter text-lg leading-relaxed text-text-secondary">
                  <p>There&apos;s a quiet voice inside you.</p>
                  <p>It&apos;s been patient. But it&apos;s getting louder.</p>
                  <p>
                    It&apos;s asking for something you&apos;ve put off for
                    years:
                  </p>
                </div>

                <div className="space-y-4 py-2">
                  {["Peace.", "Purpose.", "Clarity.", "Joy."].map((word, i) => (
                    <div
                      key={i}
                      className={`font-playfair text-3xl font-bold italic text-accent-dark transition-all duration-700 ${
                        turning.isVisible
                          ? "translate-y-0 opacity-100"
                          : "translate-y-4 opacity-0"
                      }`}
                      style={{ transitionDelay: `${400 + i * 100}ms` }}
                    >
                      {word}
                    </div>
                  ))}
                </div>

                <div
                  className={`rounded-2xl bg-highlight-bg px-8 py-6 transition-all duration-1000 delay-700 ${
                    turning.isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                >
                  <p className="font-cormorant text-2xl italic leading-relaxed text-text-primary">
                    &ldquo;This isn&apos;t selfish. This is self-return.&rdquo;
                  </p>
                </div>

                <p className="font-inter text-lg text-text-secondary">
                  You&apos;ve given enough. You&apos;ve waited long enough.
                  <br />
                  <span className="font-medium text-primary">
                    The next chapter is yours.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================
          SECTION 4: QUIZ / ARCHETYPES
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
                    Discover Where You Are in Your Rebirth Journey
                  </h2>
                  <p className="font-inter text-lg text-text-secondary">
                    In just a few minutes, you&apos;ll identify where you are,
                    understand what&apos;s keeping you stuck, and know your next
                    step.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {[
                    {
                      name: "The Over Giver",
                      desc: "You give everything to everyone but yourself",
                      accent: "border-emotional-accent",
                    },
                    {
                      name: "The Survivor",
                      desc: "You've been through a lot and you're still standing",
                      accent: "border-secondary",
                    },
                    {
                      name: "The Rebuilder",
                      desc: "You're ready to start fresh but don't know how",
                      accent: "border-accent-dark",
                    },
                    {
                      name: "The Woman in Rebirth",
                      desc: "You're awakening and stepping into your next season",
                      accent: "border-primary",
                    },
                  ].map((archetype, i) => (
                    <div
                      key={i}
                      className={`rounded-2xl border-l-4 bg-white p-5 shadow-sm transition-all duration-700 ${archetype.accent} ${
                        quiz.isVisible
                          ? "translate-y-0 opacity-100"
                          : "translate-y-6 opacity-0"
                      }`}
                      style={{ transitionDelay: `${200 + i * 120}ms` }}
                    >
                      <p className="mb-1 font-playfair text-lg font-bold text-primary">
                        {archetype.name}
                      </p>
                      <p className="font-inter text-sm text-text-secondary">
                        {archetype.desc}
                      </p>
                    </div>
                  ))}
                </div>

                <a
                  href="/quiz"
                  className="inline-block rounded-full bg-secondary px-10 py-4 font-dm-sans text-base font-semibold uppercase tracking-wider text-white shadow-lg transition-all duration-300 hover:bg-cta-hover hover:shadow-xl hover:-translate-y-1"
                >
                  Take the Rebirth Reflection Quiz
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
                  Why So Many Women Feel Disconnected from Themselves
                </h2>
                <div className="space-y-5 font-inter text-lg leading-relaxed text-text-primary">
                  <p>It didn&apos;t happen all at once.</p>
                  <p>
                    It happened in the small moments, when you put your needs
                    aside to keep the peace, when you silenced your wants to
                    meet someone else&apos;s, when you defined your worth by how
                    much you could carry.
                  </p>
                  <p>
                    Caregiving, self-sacrifice, people-pleasing, they&apos;re
                    taught to us.
                    <br />
                    Praised in us.
                    <br />
                    Rewarded in us.
                  </p>
                  <p>
                    Until one day, you look in the mirror and wonder:
                    <span className="mt-3 block font-cormorant text-2xl italic text-primary">
                      &ldquo;Who am I anymore?&rdquo;
                    </span>
                  </p>
                  <p>
                    This isn&apos;t a character flaw.
                    <br />
                    <span className="font-medium text-primary">
                      This is a pattern that can be unlearned.
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
                    src="/images/funnel/Angelic in the Office.png"
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
                  &ldquo;What would it feel like to choose <em>myself</em>
                  ?&rdquo;
                </blockquote>
                <p className="text-text-secondary">
                  That question changed everything.
                </p>
                <p className="text-text-secondary">
                  Now I walk alongside women who are ready to stop surviving and
                  start{" "}
                  <span className="font-semibold text-primary">becoming</span>.
                </p>
                <p className="text-text-secondary">
                  Not a new version of who you were.
                  <br />
                  The truest version of who you are.
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
                "Your needs are not a burden. They are a compass.",
                "You don't need to earn rest. You don't need to earn joy.",
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
          SECTION 8: OFFER (TWO CARDS)
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
                Two Ways to Begin Your Rebirth
              </h2>
              <p className="mx-auto max-w-2xl font-inter text-lg text-text-secondary">
                Whether you prefer deep 1:1 support or the power of sisterhood,
                there&apos;s a path designed for exactly where you are.
              </p>
            </div>

            <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2">
              {/* Card 1: 1:1 Mentorship */}
              <div
                className={`flex flex-col rounded-[2rem] bg-bg-light p-10 shadow-lg transition-all duration-700 hover:-translate-y-2 hover:shadow-xl ${
                  offer.isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-12 opacity-0"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                <span className="mb-6 inline-block self-start rounded-full bg-secondary/20 px-4 py-1 font-dm-sans text-sm font-semibold uppercase tracking-wider text-secondary">
                  1:1 Mentorship
                </span>
                <h3 className="mb-4 font-playfair text-3xl font-bold text-primary">
                  Personalized Deep Support
                </h3>
                <p className="mb-6 font-inter text-text-secondary">
                  For the woman who&apos;s ready for a deeply personal,
                  transformative journey. This is your space, held, private, and
                  entirely focused on <em>you</em>.
                </p>
                <p className="mb-4 font-dm-sans text-sm font-semibold uppercase tracking-[0.1em] text-text-secondary">
                  Who this is for:
                </p>
                <ul className="mb-8 space-y-3">
                  {[
                    "Women feeling deeply stuck or lost",
                    "Those navigating major life transitions",
                    "Anyone ready for profound inner transformation",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 font-inter text-text-primary"
                    >
                      <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-secondary" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mb-4 font-dm-sans text-sm font-semibold uppercase tracking-[0.1em] text-text-secondary">
                  What you get:
                </p>
                <ul className="mb-auto space-y-3">
                  {[
                    "Personalized mentorship sessions",
                    "Tailored identity & clarity roadmap",
                    "Ongoing support between sessions",
                    "Safe space to be fully honest",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 font-inter text-text-primary"
                    >
                      <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://stan.store/genxbirthmentor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 block rounded-full bg-secondary py-4 text-center font-dm-sans text-base font-semibold uppercase tracking-wider text-white shadow-md transition-all duration-300 hover:bg-cta-hover hover:-translate-y-1"
                >
                  Book Your Rebirth Session
                </a>
              </div>

              {/* Card 2: Circle Mentorship */}
              <div
                className={`flex flex-col rounded-[2rem] bg-primary p-10 shadow-lg transition-all duration-700 hover:-translate-y-2 hover:shadow-xl ${
                  offer.isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-12 opacity-0"
                }`}
                style={{ transitionDelay: "350ms" }}
              >
                <span className="mb-6 inline-block self-start rounded-full bg-white/20 px-4 py-1 font-dm-sans text-sm font-semibold uppercase tracking-wider text-white">
                  Circle Mentorship
                </span>
                <h3 className="mb-4 font-playfair text-3xl font-bold text-white">
                  Sisterhood &amp; Community
                </h3>
                <p className="mb-6 font-inter text-white/80">
                  You don&apos;t have to do this alone. Join a circle of women
                  who understand exactly where you are, because they&apos;ve
                  been there too.
                </p>
                <p className="mb-4 font-dm-sans text-sm font-semibold uppercase tracking-[0.1em] text-white/60">
                  Who this is for:
                </p>
                <ul className="mb-8 space-y-3">
                  {[
                    "Women craving community and connection",
                    "Those who thrive in shared healing spaces",
                    "Anyone ready to grow alongside others",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 font-inter text-white/90"
                    >
                      <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-accent-dark" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mb-4 font-dm-sans text-sm font-semibold uppercase tracking-[0.1em] text-white/60">
                  What you get:
                </p>
                <ul className="mb-auto space-y-3">
                  {[
                    "Group mentorship sessions with Celeste",
                    "A private community of like-minded women",
                    "Shared wisdom, vulnerability & growth",
                    "Access to resources & monthly themes",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 font-inter text-white/90"
                    >
                      <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-accent-dark" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://stan.store/genxbirthmentor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 block rounded-full bg-white py-4 text-center font-dm-sans text-base font-semibold uppercase tracking-wider text-primary shadow-md transition-all duration-300 hover:bg-accent-dark hover:text-white hover:-translate-y-1"
                >
                  Book Your Rebirth Session
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
                  src="/images/funnel/Angelic Boho Book Room.png"
                  alt="A warm, welcoming space for your journey"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-primary/20" />
                <div className="absolute inset-0 flex items-center justify-center px-8">
                  <p className="text-center font-cormorant text-3xl italic text-white drop-shadow-lg sm:text-4xl">
                    &ldquo;This is your space. Your time. Your return.&rdquo;
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
                    This isn&apos;t about becoming someone new.
                    <br />
                    It&apos;s about coming home to who you already are.
                  </p>
                </div>

                <div className="space-y-6">
                  {[
                    {
                      title: "Clarity",
                      desc: "A clear sense of what you want and what you're done tolerating",
                    },
                    {
                      title: "Confidence",
                      desc: "Trust in your own voice, your own needs, your own choices",
                    },
                    {
                      title: "Boundaries",
                      desc: "The ability to say no without guilt and yes with full heart",
                    },
                    {
                      title: "Peace",
                      desc: "An inner stillness that doesn't depend on external approval",
                    },
                    {
                      title: "Purpose",
                      desc: "A renewed sense of meaning and direction for the years ahead",
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
                    I see the years of giving, the quiet ache of feeling unseen,
                    the exhaustion you&apos;ve learned to call normal.
                  </p>
                  <p>I also see something else:</p>
                  <p className="font-semibold text-text-primary">
                    I see a woman who is ready.
                  </p>
                  <p>
                    Not just ready to feel better, ready to{" "}
                    <em>be different</em>. Ready to stop managing and start
                    living.
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
                    href="https://stan.store/genxbirthmentor"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block rounded-full bg-secondary px-10 py-4 font-dm-sans text-base font-semibold uppercase tracking-wider text-white shadow-lg transition-all duration-300 hover:bg-cta-hover hover:shadow-xl hover:-translate-y-1"
                  >
                    Book Your Rebirth Session
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
                  href="https://stan.store/genxbirthmentor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-secondary px-12 py-5 font-dm-sans text-lg font-semibold uppercase tracking-wider text-white shadow-xl transition-all duration-300 hover:bg-cta-hover hover:shadow-2xl hover:-translate-y-1"
                >
                  Book Your Rebirth Session
                </a>
                <a
                  href="/quiz"
                  className="rounded-full border-2 border-primary px-10 py-5 font-dm-sans text-base font-semibold uppercase tracking-wider text-primary transition-all duration-300 hover:bg-primary hover:text-white hover:-translate-y-1"
                >
                  Take the Quiz First
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </ReactLenis>
  );
}
