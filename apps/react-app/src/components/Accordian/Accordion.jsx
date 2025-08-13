import { useState } from "react";
import "../styles.css";

export default function Accordian({ items }) {
  const [activeState, setActiveState] = useState(null);

  const toggleContent = (index) => {
    setActiveState(activeState === index ? null : index);
  };

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <div key={index} className="accordion-item">
          <button onClick={() => toggleContent(index)} className="accordion-title">{item.title}</button>
          {activeState === index && <div className="accordion-content">{item.content}</div>}
        </div>
      ))}
    </div>
  );
}
