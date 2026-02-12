import React from "react";
import { cn } from "../../lib/utils";

/**
 * Text reveal animation: each character animates in with a staggered delay.
 * @param {string} word - Text to reveal character by character
 * @param {string} className - Optional class for the wrapper (e.g. title size/color)
 * @param {boolean} showReplay - If true, show a replay button (default false)
 * @param {number} delayBase - Base delay in seconds before first char (e.g. 0.5 = start after 0.5s)
 */
export function TextReveal({ word = "Animations", className, showReplay = false, delayBase = 0 }) {
  const [reset, setReset] = React.useState(0);
  const text = word || "Animations";

  return (
    <div className="inline-block">
      <span className={cn("text-reveal inline-block", className)} key={reset}>
        {text.split("").map((char, i) => (
          <span
            style={{ "--index": i, "--delay-base": `${delayBase}s` }}
            key={`${reset}-${i}`}
            className="text-reveal-char"
          >
            {char}
          </span>
        ))}
      </span>
      {showReplay && (
        <button
          type="button"
          className="mt-6 w-full h-8 text-sm font-medium rounded-full text-[var(--primary-foreground)] bg-[var(--primary)] shadow-sm"
          onClick={() => setReset((r) => r + 1)}
        >
          Replay animation
        </button>
      )}
    </div>
  );
}
