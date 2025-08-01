import "./App.css";
import Accordian from "./components/Accordion";
import OtpLoginForm from "./components/OtpLoginForm";
import TodoList from "./components/TodoList";

function App() {
  // const items = [
  //   {
  //     title: "JavaScript Basics",
  //     content: "Learn variables, functions, and loops in JavaScript.",
  //   },
  //   {
  //     title: "React.js Overview",
  //     content: "Understand components, state, and props in React.",
  //   },
  //   {
  //     title: "Node.js",
  //     content: "Basics of server-side development with Node.js.",
  //   },
  //   {
  //     title: "Full-Stack Development",
  //     content: "Build full-stack apps with React and Node.js.",
  //   },
  // ];

  return (
    <>
      {/* <Accordian items={items} />
      <TodoList /> */}
      <OtpLoginForm />
    </>
  );
}

export default App;
