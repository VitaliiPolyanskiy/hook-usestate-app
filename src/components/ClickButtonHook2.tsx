import { useState } from "react";

interface State {
  classCSS: string;
  label: string;
}

export default function ClickButtonHook2() {
  const [state, setState] = useState<State>({
    classCSS: "off",
    label: "Вимкнено"
  });

  const press = () => {
    setState(prev => ({
      classCSS: prev.classCSS === "off" ? "on" : "off",
      label: prev.label === "Вимкнено" ? "Увімкнено" : "Вимкнено"
    }));
  };

  return (
    <button className={state.classCSS} onClick={press}>
      {state.label}
    </button>
  );
}