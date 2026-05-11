export const questions = [
  {
    id: 1,
    text: "How do you currently feel about your life right now?",
    options: [
      { value: "A", text: "Overwhelmed and scattered" },
      { value: "B", text: "Stuck but trying to push through" },
      { value: "C", text: "Clear but inconsistent" },
      { value: "D", text: "Ready for change and growth" },
    ],
  },
  {
    id: 2,
    text: "What best describes your current situation?",
    options: [
      { value: "A", text: "I'm rebuilding my life from scratch" },
      { value: "B", text: "I'm juggling everything and burning out" },
      { value: "C", text: "I have goals but struggle to stay consistent" },
      { value: "D", text: "I'm ready to focus and build income" },
    ],
  },
  {
    id: 3,
    text: "What is your biggest struggle right now?",
    options: [
      { value: "A", text: "I don't have structure" },
      { value: "B", text: "I feel mentally/emotionally drained" },
      { value: "C", text: "I don't know what direction to take" },
      { value: "D", text: "I need strategy and support to grow" },
    ],
  },
  {
    id: 4,
    text: "What do you need MOST right now?",
    options: [
      { value: "A", text: "A simple system to organize my life" },
      { value: "B", text: "A reset to clear my mind and refocus" },
      { value: "C", text: "Clarity and a plan" },
      { value: "D", text: "Long-term structure and accountability" },
    ],
  },
  {
    id: 5,
    text: "How committed are you to change right now?",
    options: [
      { value: "A", text: "I just need something simple to start" },
      { value: "B", text: "I need help ASAP" },
      { value: "C", text: "I'm ready to take action with guidance" },
      { value: "D", text: "I'm fully committed to transformation" },
    ],
  },
  {
    id: 6,
    text: "Be honest—what's been holding you back?",
    options: [
      { value: "A", text: "Chaos and lack of structure" },
      { value: "B", text: "Emotional exhaustion" },
      { value: "C", text: "Confusion and inconsistency" },
      { value: "D", text: "Doing it all alone" },
    ],
  },
  {
    id: 7,
    text: "What would change in your life if you actually had structure?",
    options: [
      { value: "A", text: "I would feel less overwhelmed" },
      { value: "B", text: "I would finally feel like myself again" },
      { value: "C", text: "I would start making real progress" },
      { value: "D", text: "I would build the life and income I want" },
    ],
  },
  {
    id: 8,
    text: "What level of support are you ready for right now?",
    options: [
      { value: "A", text: "Something simple I can start on my own" },
      { value: "B", text: "A reset with guidance" },
      { value: "C", text: "Strategy and direction" },
      { value: "D", text: "Ongoing support and accountability" },
    ],
  },
];

export type QuizPackage = {
  name: string;
  duration: string;
  tagline: string;
  benefits: string[];
  cta: string;
  url: string;
};

export type QuizPricingOption = {
  label: string;
  url: string;
};

export type QuizProduct = {
  name: string;
  tagline: string;
  benefits: string[];
  cta: string;
  url: string;
  image?: string;
  pricingOptions?: QuizPricingOption[];
  packages?: QuizPackage[];
};

export type QuizResult = {
  title: string;
  subtitle?: string;
  corePattern: string[];
  whatsHappening: string[];
  hiddenCost: string[];
  rebirth: string[];
  product: QuizProduct;
};

export const resultsData: Record<string, QuizResult> = {
  A: {
    title: "You're in Your Reset Phase",
    subtitle: "You've been in survival mode, and your life feels scattered right now.",
    corePattern: [
      "Life feels chaotic and it's hard to stay consistent.",
      "You're moving fast but nothing feels organized.",
      "You're ready to start—you just need the right system.",
    ],
    whatsHappening: [
      "You're in survival mode without structure to support you.",
      "Every day feels reactive instead of intentional.",
      "Without a framework, your energy gets scattered before you reach your goals.",
    ],
    hiddenCost: [
      "Chaos quietly drains your energy and momentum every single day.",
      "Without structure, your goals stay as ideas instead of reality.",
      "The overwhelm is keeping you from the income and peace you deserve.",
    ],
    rebirth: [
      "Get organized with a simple daily system.",
      "Build consistency without burnout.",
      "Create structure that actually fits your life.",
    ],
    product: {
      name: "The Life & CEO Digital Planner",
      tagline: "You don't need more pressure—you need structure that supports you.",
      benefits: [
        "Get organized",
        "Build consistency",
        "Create daily structure that actually fits your life",
      ],
      cta: "Start with Structure",
      url: "https://stan.store/genxbirthmentor/p/the-life--ceo-digital-planner--7q2v4ziy",
      image: "/images/new/Angelic-D-planner.png",
      pricingOptions: [
        { label: "Free for One Week", url: "https://stan.store/genxbirthmentor/p/the-life--ceo-digital-planner--7q2v4ziy" },
        { label: "One-time fee — $29.99", url: "https://stan.store/genxbirthmentor/p/the-life--ceo-digital-planner--7q2v4ziy" },
        { label: "Monthly subscription — $22.22", url: "https://stan.store/genxbirthmentor/p/the-life--ceo-digital-planner-" },
      ],
    },
  },
  B: {
    title: "The Overwhelmed Rebuilder",
    subtitle: "You need a full reset—not more pushing.",
    corePattern: [
      "You've been carrying too much for too long.",
      "You're pushing through but running on empty.",
      "You need a reset, not more pressure.",
    ],
    whatsHappening: [
      "Emotional exhaustion is blocking your clarity and momentum.",
      "Your body and mind are signaling that it's time to stop and reset.",
      "You can't build from a depleted foundation.",
    ],
    hiddenCost: [
      "Pushing without resetting leads to deeper burnout.",
      "Exhaustion clouds judgment and blocks real progress.",
      "The weight you're carrying is keeping you from yourself.",
    ],
    rebirth: [
      "Reset mentally and emotionally.",
      "Get clarity fast.",
      "Feel grounded again.",
    ],
    product: {
      name: "Finally Me Reset Session",
      tagline: "You've been carrying too much for too long. Before you build anything, you need to clear the mental and emotional weight.",
      benefits: [
        "Reset mentally + emotionally",
        "Get clarity fast",
        "Feel grounded again",
      ],
      cta: "Book Your Finally Me Session",
      url: "https://stan.store/genxbirthmentor/p/finally-me-reset-session-",
      image: "/images/new/Angelic-Finally-Iam-Me.png",
    },
  },
  C: {
    title: "The Clarity Seeker",
    subtitle: "You're ready—but you need direction.",
    corePattern: [
      "You have goals but no clear direction or plan.",
      "You're showing up but spinning in circles.",
      "You're not stuck because you're incapable—you need a strategy.",
    ],
    whatsHappening: [
      "Confusion and inconsistency are your biggest blocks right now.",
      "You're ready to move but don't know which direction to take.",
      "The right strategy will unlock your momentum.",
    ],
    hiddenCost: [
      "Moving without clarity wastes time and energy.",
      "Inconsistency keeps you from building real results.",
      "You can't reach a destination without knowing the route.",
    ],
    rebirth: [
      "Get clear on your direction.",
      "Build a realistic action plan.",
      "Move forward with confidence.",
    ],
    product: {
      name: "Rebirth Strategy Session",
      tagline: "You're not stuck because you're incapable—you're stuck because you don't have a clear plan.",
      benefits: [
        "Get clear on your direction",
        "Build a realistic plan",
        "Move forward with confidence",
      ],
      cta: "Get Your Rebirth Strategy Session",
      url: "https://stan.store/genxbirthmentor/p/rebirth-strategy-session-",
    },
  },
  D: {
    title: "The Ready for Transformation Woman",
    subtitle: "You're ready to become the CEO of your life.",
    corePattern: [
      "You're done playing small.",
      "Now it's about structure, consistency, and long-term change.",
      "You're fully committed to becoming her.",
    ],
    whatsHappening: [
      "You've done the inner work—now it's time for the outer structure.",
      "You're ready for accountability, strategy, and sustained growth.",
      "The transformation you want requires a long-term container.",
    ],
    hiddenCost: [
      "Without long-term support, growth plateaus.",
      "Doing it alone keeps you from your next level.",
      "Your vision needs a container to become reality.",
    ],
    rebirth: [
      "Build sustainable structure and income.",
      "Step fully into your CEO identity.",
      "Create long-term stability and self-leadership.",
    ],
    product: {
      name: "Transformation Coaching",
      tagline: "You're done playing small. Now it's about structure, consistency, and long-term change.",
      benefits: [
        "Build sustainable structure",
        "Create income",
        "Step fully into your next identity",
      ],
      cta: "Step into Reset Re-Align",
      url: "https://stan.store/genxbirthmentor/p/reset-phase-3-months--",
      image: "/images/new/Angelic-Bus-GenX.png",
      packages: [
        {
          name: "3 Month Reset Phase",
          duration: "Reset / Re-Align / Phase",
          tagline: "Build sustainable structure",
          benefits: [
            "Build sustainable structure",
            "Create income",
            "Step fully into your next identity",
          ],
          cta: "Step into Reset Re-Align",
          url: "https://stan.store/genxbirthmentor/p/reset-phase-3-months--",
        },
        {
          name: "Re-Align Phase",
          duration: "6 Months · 13 Bi-Weekly",
          tagline: "Align your life + direction",
          benefits: [
            "Strengthen consistency",
            "Rebuild your identity and habits",
            "Align your life with what you actually want",
          ],
          cta: "Step into Alignment",
          url: "https://stan.store/genxbirthmentor/p/realign-phase-6-months-",
        },
        {
          name: "Rebirth Phase",
          duration: "12 Months · 26 Bi-Weekly",
          tagline: "Full life + income transformation",
          benefits: [
            "Fully step into your CEO identity",
            "Build structure AND income",
            "Create long-term stability and self-leadership",
          ],
          cta: "Become Her",
          url: "https://stan.store/genxbirthmentor/p/rebirth-year-12-months-",
        },
      ],
    },
  },
};
