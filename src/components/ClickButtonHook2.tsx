import { useState } from "react";

interface State {
  classCSS: string;
  label: string;
}

export default function ClickButtonHook2() {
  const [state, setState] = useState<State>({
    classCSS: "off",
    label: "Выключено"
  });

  const press = () => {
    setState(prev => ({
      classCSS: prev.classCSS === "off" ? "on" : "off",
      label: prev.label === "Выключено" ? "Включено" : "Выключено"
    }));
  };

  return (
    <button className={state.classCSS} onClick={press}>
      {state.label}
    </button>
  );
}
