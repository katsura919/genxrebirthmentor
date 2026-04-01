export const questions = [
  {
    id: 1,
    text: "How do you usually feel at the end of the day?",
    options: [
      { value: "A", text: "Drained from taking care of everyone else" },
      { value: "B", text: "Tired, but I just push through it" },
      { value: "C", text: "Aware I need change, but unsure where to start" },
      { value: "D", text: "More intentional about how I spend my energy" },
    ],
  },
  {
    id: 2,
    text: "When it comes to your needs, you tend to:",
    options: [
      { value: "A", text: "Put them last" },
      { value: "B", text: "Ignore them to keep things going" },
      { value: "C", text: "Notice them, but struggle to act on them" },
      { value: "D", text: "Honor them more than you used to" },
    ],
  },
  {
    id: 3,
    text: "How connected do you feel to yourself right now?",
    options: [
      { value: "A", text: "Not at all" },
      { value: "B", text: "I don’t even think about it" },
      { value: "C", text: "I’m starting to reconnect" },
      { value: "D", text: "I feel more aligned than before" },
    ],
  },
  {
    id: 4,
    text: "Which statement feels most true?",
    options: [
      { value: "A", text: "I give a lot, but don’t receive much back" },
      { value: "B", text: "I’m just trying to get through life" },
      { value: "C", text: "I know something needs to change" },
      { value: "D", text: "I’m actively working on becoming my best self" },
    ],
  },
  {
    id: 5,
    text: "How do you respond to overwhelm?",
    options: [
      { value: "A", text: "Keep going and take on more" },
      { value: "B", text: "Shut down or push through" },
      { value: "C", text: "Pause and reflect, but feel stuck" },
      { value: "D", text: "Set boundaries or step back when needed" },
    ],
  },
  {
    id: 6,
    text: "How do you feel about this season of your life?",
    options: [
      { value: "A", text: "I feel lost in it" },
      { value: "B", text: "I feel stuck in it" },
      { value: "C", text: "I feel like I’m waking up" },
      { value: "D", text: "I feel like I’m stepping into something new" },
    ],
  },
  {
    id: 7,
    text: "When you think about yourself, you feel:",
    options: [
      { value: "A", text: "Forgotten" },
      { value: "B", text: "Disconnected" },
      { value: "C", text: "Curious" },
      { value: "D", text: "Reclaiming who I am" },
    ],
  },
  {
    id: 8,
    text: "What do you need most right now?",
    options: [
      { value: "A", text: "Rest and emotional support" },
      { value: "B", text: "Relief from pressure and stress" },
      { value: "C", text: "Clarity and direction" },
      { value: "D", text: "Expansion and growth" },
    ],
  },
  {
    id: 9,
    text: "Which pattern do you relate to most?",
    options: [
      { value: "A", text: "Over giving" },
      { value: "B", text: "Surviving" },
      { value: "C", text: "Questioning" },
      { value: "D", text: "Rebuilding" },
    ],
  },
  {
    id: 10,
    text: "What feels like your biggest struggle right now?",
    options: [
      { value: "A", text: "I don’t know who I am anymore" },
      { value: "B", text: "I’m exhausted but keep pushing" },
      { value: "C", text: "I want change but feel stuck" },
      { value: "D", text: "I’m changing but need guidance" },
    ],
  },
];

export const resultsData: Record<
  string,
  {
    title: string;
    subtitle?: string;
    corePattern: string[];
    whatsHappening: string[];
    hiddenCost: string[];
    rebirth: string[];
  }
> = {
  A: {
    title: "The Over Giver",
    subtitle: "You’ve been everything for everyone, except yourself.",
    corePattern: [
      "You give deeply and show up consistently.",
      "You carry emotional weight for other people.",
      "You are often the steady one in the room.",
    ],
    whatsHappening: [
      "You have likely trained yourself to put your needs last.",
      "Over time, that has turned into self-abandonment through over giving.",
      "Your energy is often spent before you get to yourself.",
    ],
    hiddenCost: [
      "You overextend, then wonder why you feel depleted.",
      "You may be carrying what was never yours to hold.",
      "You have lost touch with your own needs, rhythms, and desire.",
    ],
    rebirth: [
      "Permission to choose yourself.",
      "Emotional replenishment without guilt.",
      "Boundaries that protect your energy.",
    ],
  },
  B: {
    title: "The Survivor",
    subtitle: "You’ve been in survival mode for so long, it feels normal.",
    corePattern: [
      "You know how to push through.",
      "You know how to hold it together.",
      "You keep going even when you are running on empty.",
    ],
    whatsHappening: [
      "You have been coping, not fully living.",
      "Your system may be braced for pressure, stress, and responsibility.",
      "Rest and softness can feel unfamiliar or hard to access.",
    ],
    hiddenCost: [
      "Your exhaustion becomes your baseline.",
      "You may be disconnected from what safety and ease actually feel like.",
      "Living in constant resilience can keep you from receiving support.",
    ],
    rebirth: [
      "Space to slow down.",
      "Emotional safety and support.",
      "A return to feeling, not just functioning.",
    ],
  },
  C: {
    title: "The Rebuilder",
    subtitle: "You know something needs to change, and you’re ready.",
    corePattern: [
      "You are waking up to yourself.",
      "You can feel that your current life no longer fits completely.",
      "You are in the in-between stage where clarity is beginning to emerge.",
    ],
    whatsHappening: [
      "You are questioning old roles, patterns, and assumptions.",
      "You are not stuck, you are becoming aware.",
      "This is the stage where rebuilding starts with honesty.",
    ],
    hiddenCost: [
      "Without direction, awareness can still feel like frustration.",
      "You may know what is missing before you know what is next.",
      "Trying to rebuild alone can leave you spinning.",
    ],
    rebirth: [
      "Clarity about your next chapter.",
      "Guidance as you rebuild your identity.",
      "Intention instead of confusion.",
    ],
  },
  D: {
    title: "The Woman in Rebirth",
    subtitle: "You are actively becoming the woman you’re meant to be.",
    corePattern: [
      "You have begun setting boundaries and making aligned choices.",
      "You are reconnecting with your needs, voice, and vision.",
      "You are no longer just surviving, you are transforming.",
    ],
    whatsHappening: [
      "You are stepping into a new chapter with more self-trust.",
      "You are learning how to keep expanding without abandoning yourself.",
      "This is rebirth in motion.",
    ],
    hiddenCost: [
      "Even transformation needs structure and support.",
      "Without guidance, growth can feel scattered.",
      "Your next level asks for steadiness, not just momentum.",
    ],
    rebirth: [
      "Continued support.",
      "Expansion with alignment.",
      "A deeper rise into your next life.",
    ],
  },
};
