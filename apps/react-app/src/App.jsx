import "./App.css";
import Accordian from "./components/Accordian/Accordion";
import OtpLoginForm from "./components/OTP Login/OtpLoginForm";
import { Products } from "./components/Pagination/Products";
import { TabForm } from "./components/Tabular Form/TabForm";
import TodoList from "./components/TodoList";

function App() {
  return (
    <>
      {/* <Accordian />
      <TodoList />
      <OtpLoginForm />
      <TabForm /> */}
      <Products />
    </>
  );
}

export default App;
