"use client";

import { useState } from "react";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { questions, resultsData } from "../../data/quiz.data";
import Image from "next/image";

export default function QuizPage() {
  const [step, setStep] = useState<"intro" | "quiz" | "email" | "results">(
    "intro",
  );
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [email, setEmail] = useState("");
  const [calculatedResult, setCalculatedResult] = useState("A");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleOptionSelect = (value: string) => {
    setAnswers({ ...answers, [currentQuestion]: value });
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setStep("email");
    }
  };

  const calculateResult = async () => {
    setIsSubmitting(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
    } catch (error) {
      console.error("Error submitting contact:", error);
    }

    const counts: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
    Object.values(answers).forEach((val) => {
      if (counts[val] !== undefined) counts[val]++;
    });

    let max = -1;
    let dominant = "A";
    (["A", "B", "C", "D"] as const).forEach((char) => {
      if (counts[char] > max) {
        max = counts[char];
        dominant = char;
      }
    });
    setCalculatedResult(dominant);
    setStep("results");
    setIsSubmitting(false);
  };

  const result = resultsData[calculatedResult];

  return (
    <main className="min-h-screen bg-bg-main pt-60">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        {/* Intro Step */}
        {step === "intro" && (
          <div className="space-y-8 text-center animate-in fade-in slide-in-from-bottom-4 duration-700 pb-32">
            <h1 className="font-playfair text-4xl font-bold text-accent-dark sm:text-5xl md:text-6xl">
              What Phase of Your Life &amp; Income Are You In Right Now?
            </h1>
            <p className="font-dm-sans text-xl font-medium tracking-wide text-primary">
              Get matched with the exact structure, support, and next step you
              need to move forward.
            </p>
            <hr className="mx-auto w-24 border-primary/20" />
            <div className="mx-auto max-w-2xl space-y-4 font-inter text-xl text-text-primary/80">
              <p>
                You&apos;ve been surviving. Managing. Pushing through.
              </p>
              <p>
                But what you really need is a system that supports you—and a
                clear next step that matches where you actually are.
              </p>
              <p className="font-medium text-text-primary">
                This quiz will match you with the exact structure, support, and
                next step you need to move forward in under 2 minutes.
              </p>
            </div>
            <div className="pt-8">
              <button
                onClick={() => setStep("quiz")}
                className="rounded-full bg-accent-dark px-10 py-4 text-xl font-bold text-white shadow-lg hover:bg-accent-dark/90 transition-all hover:-translate-y-1 cursor-pointer"
              >
                Start with the First Step
              </button>
            </div>
          </div>
        )}

        {/* Quiz Step */}
        {step === "quiz" && (
          <div className="mx-auto max-w-2xl animate-in fade-in slide-in-from-right-8 duration-500 pb-20">
            {/* Progress */}
            <div className="mb-8">
              <div className="flex justify-between text-base font-medium text-text-secondary mb-2">
                <span>
                  Question {currentQuestion + 1} of {questions.length}
                </span>
                <span>
                  {Math.round(((currentQuestion + 1) / questions.length) * 100)}
                  %
                </span>
              </div>
              <div className="h-3 w-full rounded-full bg-secondary/10">
                <div
                  className="h-3 rounded-full bg-primary transition-all duration-300"
                  style={{
                    width: `${((currentQuestion + 1) / questions.length) * 100}%`,
                  }}
                ></div>
              </div>
            </div>

            {/* Question */}
            <div className="mb-10 min-h-[140px]">
              <h2 className="font-playfair text-4xl font-bold leading-tight text-text-primary">
                {questions[currentQuestion].text}
              </h2>
            </div>

            {/* Options */}
            <div className="space-y-4">
              {questions[currentQuestion].options.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleOptionSelect(option.value)}
                  className={`w-full rounded-xl border-2 p-8 text-left transition-all duration-200 ${
                    answers[currentQuestion] === option.value
                      ? "border-primary bg-primary/5 text-accent-dark shadow-md"
                      : "border-transparent bg-white text-text-primary hover:border-gray-200 hover:bg-gray-50 shadow-sm"
                  }`}
                >
                  <div className="flex items-center gap-6">
                    <span
                      className={`flex h-10 w-10 min-w-10 items-center justify-center rounded-full border text-base font-bold ${
                        answers[currentQuestion] === option.value
                          ? "border-primary bg-primary text-white"
                          : "border-gray-300 text-gray-500"
                      }`}
                    >
                      {option.text.charAt(0)}
                    </span>
                    <span className="text-2xl font-medium">{option.text}</span>
                  </div>
                </button>
              ))}
            </div>

            <div className="mt-12 flex justify-end">
              <button
                onClick={handleNext}
                disabled={!answers[currentQuestion]}
                className="rounded-full bg-accent-dark px-12 py-4 text-lg font-bold text-white shadow-lg transition-all hover:bg-accent-dark/90 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                {currentQuestion === questions.length - 1
                  ? "Finish Quiz"
                  : "Next Question"}
              </button>
            </div>
          </div>
        )}

        {/* Email Gate */}
        {step === "email" && (
          <div className="mx-auto max-w-md text-center animate-in fade-in zoom-in-95 duration-500 bg-white p-10 mb-20 rounded-3xl shadow-xl">
            <div className="mb-6 flex justify-center">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <h2 className="mb-4 font-playfair text-3xl font-bold text-accent-dark">
              Your Results Are Ready
            </h2>
            <p className="mb-8 font-inter text-text-primary/80">
              Enter your email to reveal your phase and receive your
              personalized next step.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                calculateResult();
              }}
              className="space-y-4"
            >
              <input
                type="email"
                required
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubmitting}
                className="w-full rounded-lg border-gray-300 px-4 py-3 shadow-sm focus:border-primary focus:ring-primary disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-full bg-accent-dark px-6 py-4 text-base font-bold text-white shadow-md hover:bg-accent-dark/90 transition-all uppercase tracking-wider disabled:opacity-75 disabled:cursor-not-allowed cursor-pointer"
              >
                {isSubmitting ? "Processing..." : "Reveal My Results"}
              </button>
            </form>
            <p className="mt-4 text-xs text-gray-400">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        )}

        {/* Results */}
        {step === "results" && (
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
            {/* Result Header */}
            <div className="mb-16 text-center">
              <p className="mb-2 font-dm-sans text-sm font-bold uppercase tracking-widest text-text-secondary">
                Your Quiz Results
              </p>
              <h1 className="mb-4 font-playfair text-4xl font-bold text-accent-dark sm:text-5xl md:text-6xl">
                {result.title}
              </h1>
              {result.subtitle && (
                <>
                  <p className="mb-8 font-dm-sans text-xl text-primary font-medium">
                    {result.subtitle}
                  </p>
                  <p className="mx-auto mb-10 max-w-3xl font-inter text-lg leading-relaxed text-text-primary/80">
                    No matter where you are, your next step is right in front of
                    you.
                  </p>
                </>
              )}

              <div className="mx-auto max-w-4xl space-y-12 text-left">
                {/* Core Pattern */}
                <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-indigo-50">
                  <h3 className="mb-6 font-playfair text-2xl font-bold text-primary">
                    Core Pattern
                  </h3>
                  <ul className="space-y-3">
                    {result.corePattern.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-4 text-lg text-text-primary leading-relaxed"
                      >
                        <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* What's Really Happening */}
                <div className="rounded-3xl bg-indigo-50/50 p-8 shadow-sm ring-1 ring-indigo-50">
                  <h3 className="mb-6 font-playfair text-2xl font-bold text-accent-dark">
                    What&apos;s Really Happening
                  </h3>
                  <ul className="space-y-3">
                    {result.whatsHappening.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-4 text-lg text-text-primary leading-relaxed"
                      >
                        <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent-dark"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Hidden Cost */}
                <div className="rounded-3xl bg-rose-50/30 p-8 shadow-sm ring-1 ring-rose-100">
                  <h3 className="mb-6 font-playfair text-2xl font-bold text-gray-900">
                    Hidden Cost
                  </h3>
                  <ul className="space-y-3">
                    {result.hiddenCost.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-4 text-lg text-text-primary leading-relaxed"
                      >
                        <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-rose-400"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Rebirth */}
                <div className="rounded-3xl bg-primary p-8 md:p-10 shadow-lg text-white">
                  <h3 className="mb-6 font-playfair text-2xl font-bold text-white">
                    What This Phase Looks Like for You
                  </h3>
                  <ul className="space-y-4">
                    {result.rebirth.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-4 text-lg text-white/90 leading-relaxed"
                      >
                        <CheckCircleIcon className="h-6 w-6 flex-shrink-0 text-accent-dark" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Product CTA */}
              <div className="mt-20 mx-auto max-w-4xl">
                <p className="mb-3 font-dm-sans text-sm font-bold uppercase tracking-widest text-text-secondary">
                  Your Next Step
                </p>
                <h2 className="mb-4 font-playfair text-3xl md:text-4xl font-bold text-primary">
                  {result.product.name}
                </h2>
                <p className="mb-10 font-inter text-lg text-text-secondary max-w-2xl mx-auto">
                  {result.product.tagline}
                </p>

                {/* Single product (A, B, C) */}
                {!result.product.packages && (
                  <div className="rounded-[2.5rem] border-2 border-primary/10 bg-white shadow-xl overflow-hidden">
                    {result.product.image && (
                      <div className="relative h-64 sm:h-80 w-full">
                        <Image
                          src={result.product.image}
                          alt={result.product.name}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-white/60 to-transparent" />
                      </div>
                    )}
                    <div className="p-8 md:p-12">
                      <p className="mb-6 font-dm-sans text-sm font-semibold uppercase tracking-wider text-secondary">
                        This will help you:
                      </p>
                      <ul className="mb-8 space-y-3">
                        {result.product.benefits.map((benefit, idx) => (
                          <li
                            key={idx}
                            className="flex items-center gap-3 font-inter text-lg text-text-primary"
                          >
                            <CheckCircleIcon className="h-5 w-5 flex-shrink-0 text-secondary" />
                            {benefit}
                          </li>
                        ))}
                      </ul>

                      {/* Pricing options (A only) */}
                      {result.product.pricingOptions ? (
                        <div className="space-y-3">
                          {result.product.pricingOptions.map((opt, idx) => (
                            <a
                              key={idx}
                              href={opt.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`block w-full rounded-full py-4 text-center font-dm-sans text-base font-semibold uppercase tracking-wider shadow-md transition-all duration-300 hover:-translate-y-1 ${
                                idx === 0
                                  ? "bg-secondary text-white hover:bg-cta-hover"
                                  : "border-2 border-secondary text-secondary hover:bg-secondary hover:text-white"
                              }`}
                            >
                              {opt.label}
                            </a>
                          ))}
                        </div>
                      ) : (
                        <a
                          href={result.product.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full rounded-full bg-accent-dark py-5 text-center font-dm-sans text-lg font-bold text-white shadow-lg hover:bg-primary transition-all duration-300 hover:-translate-y-1 uppercase tracking-wider"
                        >
                          {result.product.cta}
                        </a>
                      )}
                    </div>
                  </div>
                )}

                {/* Coaching packages (D) */}
                {result.product.packages && (
                  <div className="space-y-6">
                    {result.product.image && (
                      <div className="relative h-48 w-full overflow-hidden rounded-3xl mb-8">
                        <Image
                          src={result.product.image}
                          alt={result.product.name}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-primary/10" />
                      </div>
                    )}
                    {result.product.packages.map((pkg, idx) => (
                      <div
                        key={idx}
                        className="rounded-[2rem] border-2 border-primary/10 bg-white p-8 shadow-lg hover:-translate-y-1 transition-all duration-300"
                      >
                        <div className="mb-4 flex items-start justify-between gap-4">
                          <div>
                            <h3 className="font-playfair text-2xl font-bold text-primary">
                              {pkg.name}
                            </h3>
                            <p className="font-dm-sans text-sm font-semibold text-secondary mt-1">
                              {pkg.duration}
                            </p>
                          </div>
                        </div>
                        <p className="mb-4 font-inter text-text-secondary italic">
                          {pkg.tagline}
                        </p>
                        <ul className="mb-6 space-y-2">
                          {pkg.benefits.map((b, bidx) => (
                            <li
                              key={bidx}
                              className="flex items-center gap-3 font-inter text-text-primary"
                            >
                              <CheckCircleIcon className="h-5 w-5 flex-shrink-0 text-secondary" />
                              {b}
                            </li>
                          ))}
                        </ul>
                        <a
                          href={pkg.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full rounded-full bg-accent-dark py-4 text-center font-dm-sans text-base font-bold text-white shadow-md hover:bg-primary transition-all duration-300 hover:-translate-y-1 uppercase tracking-wider"
                        >
                          {pkg.cta}
                        </a>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
