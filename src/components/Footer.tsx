import Link from "next/link";
import { Logo } from "./Logo";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="3"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M8.5 10.5V16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="8.5" cy="8" r="1" fill="currentColor" />
      <path
        d="M12.5 16v-3.1c0-1.4.9-2.4 2.2-2.4 1.3 0 2.1.9 2.1 2.4V16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-primary pt-20 pb-12 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Brand */}
          <div className="space-y-6 lg:col-span-2">
            <Link href="/" className="inline-block ">
              <Logo className="h-10 w-auto text-white" />
            </Link>
            <p className="font-inter text-white/80 leading-relaxed">
              Gen X Authority Mentor is what happens when a woman stops
              surviving and starts choosing.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/genxmentor/"
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors text-white"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/celeste-angelic-london-3799b3236/"
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors text-white"
              >
                <LinkedInIcon className="w-5 h-5" />
              </a>
            </div>
            <div>
              <a
                href="mailto:hello@genxauthoritymentor.com"
                className="font-inter text-white/80 hover:text-white transition-colors"
              >
                hello@genxauthoritymentor.com
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3 className="font-playfair text-xl font-bold mb-6 ">
              <span className="text-white">Explore</span>
            </h3>
            <ul className="space-y-4 font-inter text-white/80">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/quiz"
                  className="hover:text-white transition-colors"
                >
                  Take the Quiz
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div>
            <h3 className="font-playfair text-xl font-bold mb-6">
              <span className="text-white">Legal</span>
            </h3>
            <ul className="space-y-4 font-inter text-white/80">
              <li>
                <Link
                  href="/privacy-policy"
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-service"
                  className="hover:text-white transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-white/10 mb-8"></div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="font-inter text-sm text-white/60">
            &copy; {new Date().getFullYear()} Gen X Authority Mentor. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
