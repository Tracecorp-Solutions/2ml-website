import { useEffect, useRef, useState } from "react";

interface TypewriterLine {
  text: string;
  className?: string;
  as?: "span" | "em";
}

interface TypewriterHeadingProps {
  lines: TypewriterLine[];
  charDelay?: number;
  lineDelay?: number;
  startDelay?: number;
  loop?: boolean;
  repeatDelay?: number;
  className?: string;
  cursorClassName?: string;
}

export function TypewriterHeading({
  lines,
  charDelay = 32,
  lineDelay = 380,
  startDelay = 300,
  loop = true,
  repeatDelay = 2200,
  className = "",
  cursorClassName = "text-[#F5953B]",
}: TypewriterHeadingProps) {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [started, setStarted] = useState(false);
  const prefersReducedMotion = useRef(
    typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  useEffect(() => {
    if (prefersReducedMotion.current) {
      setLineIndex(lines.length);
      return;
    }
    const t = setTimeout(() => setStarted(true), startDelay);
    return () => clearTimeout(t);
  }, [startDelay, lines.length]);

  useEffect(() => {
    if (!started || lineIndex >= lines.length) return;
    const text = lines[lineIndex].text;

    if (charIndex < text.length) {
      const t = setTimeout(() => setCharIndex((c) => c + 1), charDelay);
      return () => clearTimeout(t);
    }
    if (lineIndex === lines.length - 1 && loop) {
      const t = setTimeout(() => {
        setLineIndex(0);
        setCharIndex(0);
      }, repeatDelay);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setLineIndex((l) => l + 1);
      setCharIndex(0);
    }, lineDelay);
    return () => clearTimeout(t);
  }, [started, charIndex, lineIndex, lines, charDelay, lineDelay, loop, repeatDelay]);

  const isActive = started && lineIndex < lines.length;

  const renderLine = (text: string, i: number) => {
    const line = lines[i];
    const Tag = line.as ?? "span";
    return (
      <Tag key={i} className={line.className}>
        {text}
      </Tag>
    );
  };

  return (
    <h1 className={className}>
      <span className="sr-only">{lines.map((l) => l.text).join(" ")}</span>

      <span aria-hidden="true" className="block">
        {lines.map((line, index) => {
          const completed = index < lineIndex
          const active = isActive && index === lineIndex
          const text = completed ? line.text : active ? line.text.slice(0, charIndex) : "\u00a0"
          return <span key={index} className="block min-h-[.9em]">
            {renderLine(text, index)}
            {active && <span className={`animate-pulse ${cursorClassName}`}>|</span>}
          </span>
        })}
      </span>
    </h1>
  );
}
