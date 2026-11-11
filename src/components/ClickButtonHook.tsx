import { useState } from "react";

export default function ClickButtonHook() {
  const [classCSS, setClassCSS] = useState("off");
  const [label, setLabel] = useState("Вимкнено");

  const press = () => {
    setClassCSS(prev => (prev === "off" ? "on" : "off"));
    setLabel(prev => (prev === "Вимкнено" ? "Увімкнено" : "Вимкнено"));
  };

  return (
    <button className={classCSS} onClick={press}>
      {label}
    </button>
  );
}