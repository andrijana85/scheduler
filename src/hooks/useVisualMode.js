import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition(newMode) {
    setMode(newMode);
  }
  function back() { /* ... */ }
//return { mode, transition };
  return { mode: mode,
           transition: transition, 
           back: back
          };
}
