import { useState } from "react";
    
    export default function App() {
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      const [success, setSuccess] = useState(false);
      const [error, setError] = useState(false);
    
      function handleSubmit(e) {
        e.preventDefault();
    
        // submit email and password via post request for server authentication
        if (email === "dev@gmail.com" && password === "password") {
          // setTimeout is used to simulate server delay of 2s 
          setTimeout(() => {
            // simulate message pop up
            setSuccess(true);
            setTimeout(() => setSuccess(false), 2000);
          }, 2000);
        } else {
          setTimeout(() => {     
            // simulate message pop up
            setError(true);
            setTimeout(() => setError(false), 2000);
          }, 2000);
        }
      }
    
      return (
        <div className="App">
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <br />
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <br />
            <button type="submit">Log in</button>
          </form>
          
          {success && <p>Welcome back!</p>}
          {error && <p>Are you a hacker or just forgetful? Try again😁</p>}
        </div>
      );
    }