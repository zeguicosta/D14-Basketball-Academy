import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "../../lib/utils";

const InteractiveHoverButton = React.forwardRef(
  ({ text = "Button", className, inverted = false, invertedHoverTextClass, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "group relative w-32 cursor-pointer overflow-hidden rounded-full py-3 pl-5 pr-8 text-center font-semibold",
          inverted
            ? "border border-[#54AE21] bg-[#54AE21] text-white"
            : "border border-black/10 bg-white text-black",
          className,
        )}
        {...props}
      >
        <span className="inline-block translate-x-4 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
          {text}
        </span>
        <div
          className={cn(
            "absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 pr-8 opacity-0 transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100",
            inverted ? (invertedHoverTextClass ?? "text-[#54AE21]") : "text-[var(--primary-foreground)]",
          )}
        >
          <span>{text}</span>
          <ArrowRight className="h-5 w-5 shrink-0" />
        </div>
        <div
          className={cn(
            "absolute left-7 top-[50%] h-2 w-2 -translate-y-1/2 scale-[1] rounded-lg transition-all duration-300 group-hover:left-[0%] group-hover:top-[0%] group-hover:h-full group-hover:w-full group-hover:scale-[1.8] group-hover:translate-y-0",
            inverted ? "bg-white group-hover:bg-white" : "bg-[var(--primary)] group-hover:bg-[var(--primary)]",
          )}
        />
      </button>
    );
  },
);

InteractiveHoverButton.displayName = "InteractiveHoverButton";

export { InteractiveHoverButton };
