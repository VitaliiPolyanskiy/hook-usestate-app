import { useState } from "react";

export default function ClickButtonHook() {
  const [classCSS, setClassCSS] = useState("off");
  const [label, setLabel] = useState("Выключено");

  const press = () => {
    setClassCSS(prev => (prev === "off" ? "on" : "off"));
    setLabel(prev => (prev === "Выключено" ? "Включено" : "Выключено"));
  };

  return (
    <button className={classCSS} onClick={press}>
      {label}
    </button>
  );
}
