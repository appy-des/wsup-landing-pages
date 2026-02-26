import React from "react";

interface AustraliaNoticeModalProps {
  /** Pass the wsup.ai app screenshot as a URL to use as the blurred backdrop */
  backdropImage?: string;
  onLogin: () => void;
  onDismiss: () => void;
}

export default function AustraliaNoticeModal({
  backdropImage,
  onLogin,
  onDismiss,
}: AustraliaNoticeModalProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{
        backgroundImage: backdropImage ? `url(${backdropImage})` : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#0d0d0d",
        fontFamily: "'Rubik', sans-serif",
      }}
    >
      {/* Black 70% overlay + backdrop blur */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.70)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
        }}
      />

      {/* Modal card */}
      <div
        className="relative z-10 w-full max-w-[480px] mx-4 rounded-[20px] flex flex-col"
        style={{
          gap: "20px",
          padding: "40px 40px 32px",
          backgroundColor: "rgba(26, 26, 28, 0.97)",
          border: "1px solid rgba(255, 255, 255, 0.10)",
          boxShadow: "0 32px 80px -8px rgba(0, 0, 0, 0.80)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
        }}
      >
        {/* Icon + Headline */}
        <div className="flex items-start gap-3">
          <WarningIcon />
          <h2
            className="text-white font-semibold"
            style={{ fontSize: 17, lineHeight: 1.35 }}
          >
            wsup.ai is pausing service in Australia on March 6
          </h2>
        </div>

        {/* Body */}
        <div
          className="flex flex-col gap-4 text-sm"
          style={{ color: "rgba(255, 255, 255, 0.70)", lineHeight: 1.75 }}
        >
          <p>
            To comply with Australia's new Online Safety Act, wsup.ai will be
            temporarily unavailable in Australia starting March 6, 2026, while
            we update our systems.
          </p>
          <p>
            Log in now to keep your data safe. Logging in links your
            conversations, characters, and history to your account — so
            everything is here waiting for you when we return.
          </p>
        </div>

        {/* Divider */}
        <div style={{ height: 1, backgroundColor: "rgba(255, 255, 255, 0.08)" }} />

        {/* Primary CTA */}
        <button
          onClick={onLogin}
          className="w-full font-semibold text-white transition-all duration-200 hover:opacity-90 hover:-translate-y-px active:translate-y-0"
          style={{
            height: 50,
            borderRadius: 50,
            fontSize: 15,
            backgroundColor: "#4a3ec6",
            border: "none",
            cursor: "pointer",
          }}
        >
          Log In / Sign Up
        </button>

        {/* Secondary CTA */}
        <button
          onClick={onDismiss}
          className="w-full text-center font-medium transition-opacity duration-200 hover:opacity-70"
          style={{
            fontSize: 14,
            color: "#82a1ff",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
          }}
        >
          I understand
        </button>

        {/* Footer */}
        <p
          className="text-center"
          style={{ fontSize: 12, color: "rgba(255, 255, 255, 0.30)" }}
        >
          Questions?{" "}
          <a
            href="mailto:support@wsup.ai"
            className="transition-opacity hover:opacity-80"
            style={{ color: "#82a1ff" }}
          >
            support@wsup.ai
          </a>
        </p>
      </div>
    </div>
  );
}

function WarningIcon() {
  return (
    <svg
      width="44"
      height="44"
      viewBox="0 0 24 24"
      fill="none"
      style={{ flexShrink: 0, marginTop: 2 }}
    >
      <path
        d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
        stroke="#f4da5c"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="12" y1="9" x2="12" y2="13"
        stroke="#f4da5c"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="12" cy="17" r="0.5" fill="#f4da5c" stroke="#f4da5c" strokeWidth="1.5" />
    </svg>
  );
}
