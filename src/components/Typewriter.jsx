import { useState, useEffect } from "react";

function Typewriter({ text, speed = 100 }) {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [index, text, speed]);

  return (
    <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900">
      {displayedText}
      <span className="animate-pulse text-purple-500">|</span>
    </h2>
  );
}

export default Typewriter;
