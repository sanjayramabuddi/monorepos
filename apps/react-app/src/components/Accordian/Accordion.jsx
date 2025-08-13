import { useState } from "react";

export default function Accordian() {
  const [activeState, setActiveState] = useState(null);

  const toggleContent = (index) => {
    setActiveState(activeState === index ? null : index);
  };

  const items = [
    {
      title: "JavaScript Basics",
      content: "Learn variables, functions, and loops in JavaScript.",
    },
    {
      title: "React.js Overview",
      content: "Understand components, state, and props in React.",
    },
    {
      title: "Node.js",
      content: "Basics of server-side development with Node.js.",
    },
    {
      title: "Full-Stack Development",
      content: "Build full-stack apps with React and Node.js.",
    },
  ];

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <div key={index} className="accordion-item">
          <button
            onClick={() => toggleContent(index)}
            className="accordion-title"
          >
            {item.title}
          </button>
          {activeState === index && (
            <div className="accordion-content">{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
}
