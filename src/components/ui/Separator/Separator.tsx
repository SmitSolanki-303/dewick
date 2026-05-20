import React from "react";

type SeparatorProps = {
  className?: string;
  "aria-label"?: string;
};

export default function Separator({ className = "", "aria-label": ariaLabel = "Section separator" }: SeparatorProps) {
  return (
    <div className={`container ${className}`} aria-hidden={false}>
      <hr
        role="separator"
        aria-label={ariaLabel}
        className="border-t border-white/6 dark:border-white/8"
      />
    </div>
  );
}