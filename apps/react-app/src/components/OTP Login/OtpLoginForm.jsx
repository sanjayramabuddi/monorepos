import { useState } from "react";
import OtpInput from "./OtpInput";

export default function OtpLoginForm() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    const regex = /[^0-9]/g;
    if (phoneNumber.length < 10 || regex.test(phoneNumber)) {
      alert("Invalid phone number");
      return;
    }

    setShowOtpInput(true);
  }

  function onOtpSubmit() {}

  return (
    <div className="app">
      {!showOtpInput ? (
        <form onSubmit={handleSubmit}>
          <h1>Login Form</h1>
          <input
            type="text"
            onChange={(e) => setPhoneNumber(e.target.value)}
            value={phoneNumber}
            placeholder="Enter phone number"
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>Enter OTP sent to {phoneNumber}</p>
          <OtpInput length={4} onOtpSubmit={onOtpSubmit} />
        </div>
      )}
    </div>
  );
}
