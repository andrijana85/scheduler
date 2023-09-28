import { useState } from "react";

export default function useVisualMode(initial) {

  const [history, setHistory] = useState([initial]);

  function transition(newMode, replace = false) {
    if (replace) {
      setHistory((prev) => [...prev.slice(0, prev.length - 1), newMode]);
    } else {
      setHistory((prev) => [...prev, newMode]);
    }
  }
  function back() {
    if (history.length > 1) {
      setHistory(prev => [...prev.slice(0, prev.length - 1)]);
    }
  }
  //return { mode, transition };
  return {
    mode: history[history.length - 1],
    transition: transition,
    back: back,
  };
}
